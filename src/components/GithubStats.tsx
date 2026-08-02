import { useEffect, useState } from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import GitHubCalendar from 'react-github-calendar';

interface Stats {
  stars: number;
  repos: number;
  followers: number;
}

export function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const username = 'gokulra2006-del';

  useEffect(() => {
    async function fetchStats() {
      try {
        const cached = localStorage.getItem('gh_stats');
        const cachedTime = localStorage.getItem('gh_stats_time');

        // Cache for 1 hour
        if (cached && cachedTime && Date.now() - parseInt(cachedTime) < 3600000) {
          setStats(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);

        if (userRes.ok && reposRes.ok) {
          const user = await userRes.json();
          const repos = await reposRes.json();

          const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

          const newStats = {
            stars: totalStars,
            repos: user.public_repos,
            followers: user.followers
          };

          setStats(newStats);
          localStorage.setItem('gh_stats', JSON.stringify(newStats));
          localStorage.setItem('gh_stats_time', Date.now().toString());
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return <div className="animate-pulse bg-gh-border/20 h-24 rounded-xl max-w-sm mt-8"></div>;
  }

  if (!stats) return null;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 mt-8 bg-gh-bg-secondary p-4 rounded-xl border border-gh-border max-w-2xl">
        <div className="flex flex-col items-center justify-center p-2 bg-gh-bg rounded-lg flex-1">
          <FaStar className="text-yellow-400 mb-1" size={20} />
          <span className="font-bold text-gh-text text-lg">{stats.stars}</span>
          <span className="text-xs text-gh-text-muted">Stars</span>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gh-bg rounded-lg flex-1">
          <FaCodeBranch className="text-gh-blue mb-1" size={20} />
          <span className="font-bold text-gh-text text-lg">{stats.repos}</span>
          <span className="text-xs text-gh-text-muted">Repos</span>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gh-bg rounded-lg flex-1">
          <FaGithub className="text-gh-text mb-1" size={20} />
          <span className="font-bold text-gh-text text-lg">{stats.followers}</span>
          <span className="text-xs text-gh-text-muted">Followers</span>
        </div>
      </div>

      <div className="mt-6 bg-gh-bg-secondary p-6 rounded-xl border border-gh-border max-w-3xl overflow-x-auto hide-scrollbar">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          blockMargin={4}
          blockSize={12}
          fontSize={12}
        />
      </div>
    </div>
  );
}
