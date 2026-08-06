import { useState, useEffect } from 'react';

interface GitHubStats {
  stars: number;
  forks: number;
}

const CACHE_PREFIX = 'gh_stats_v1_';
const CACHE_TTL = 3600 * 1000; // 1 hour

export function useGitHubStats(repoUrl?: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!repoUrl) return;

    // Parse owner/repo from URL
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return;

    const owner = match[1];
    const repo = match[2].replace(/\.git$/, '');
    const cacheKey = `${CACHE_PREFIX}${owner}_${repo}`;

    // Check localStorage cache
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          setStats(data);
          return;
        }
      }
    } catch {
      // Ignore cache parse errors
    }

    setLoading(true);
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error('API Rate limit or not found');
        return res.json();
      })
      .then((data) => {
        const result: GitHubStats = {
          stars: data.stargazers_count ?? 0,
          forks: data.forks_count ?? 0,
        };
        setStats(result);
        try {
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ data: result, timestamp: Date.now() })
          );
        } catch {
          // Ignore storage errors
        }
      })
      .catch(() => {
        // Graceful fallback
        setStats(null);
      })
      .finally(() => setLoading(false));
  }, [repoUrl]);


  return { stats, loading };
}
