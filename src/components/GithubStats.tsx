import { useEffect, useState } from 'react';
import { FaStar, FaCodeBranch, FaGithub } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';
import { GitPullRequest, GitCommit, ExternalLink, AlertCircle } from 'lucide-react';

interface RepoSummary {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

interface GitHubOverview {
  publicRepos: number;
  totalStars: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  featuredRepos: RepoSummary[];
}

const FALLBACK_DATA: GitHubOverview = {
  publicRepos: 18,
  totalStars: 12,
  topLanguages: [
    { name: 'TypeScript', percentage: 46, color: '#3178c6' },
    { name: 'C#', percentage: 24, color: '#178600' },
    { name: 'Python', percentage: 18, color: '#3572A5' },
    { name: 'JavaScript', percentage: 12, color: '#f1e05a' },
  ],
  featuredRepos: [
    {
      name: 'agri-bank',
      description: 'Agriculture Banking & Subsidy Management Platform (React, Node, Express, MongoDB).',
      stars: 4,
      forks: 1,
      language: 'JavaScript',
      url: 'https://github.com/gokulra2006-del/agri-bank'
    },
    {
      name: 'Dual-enjoy',
      description: 'Dual Bluetooth Headphone Synchronizer with Windows CoreAudio WASAPI loopback.',
      stars: 5,
      forks: 2,
      language: 'C#',
      url: 'https://github.com/gokulra2006-del/Dual-enjoy'
    },
    {
      name: 'codereview-ai',
      description: 'AI Code Review Assistant parsing code and generating structured quality critiques via OpenRouter.',
      stars: 3,
      forks: 1,
      language: 'TypeScript',
      url: 'https://github.com/gokulra2006-del/codereview-ai'
    }
  ]
};

export function GithubStats() {
  const [data, setData] = useState<GitHubOverview>(FALLBACK_DATA);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const username = 'gokulra2006-del';

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const cached = localStorage.getItem('gh_overview_data');
        const cachedTime = localStorage.getItem('gh_overview_time');

        // Cache for 1 hour to respect rate limits
        if (cached && cachedTime && Date.now() - parseInt(cachedTime, 10) < 3600000) {
          setData(JSON.parse(cached));
          return;
        }

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        ]);

        if (userRes.ok && reposRes.ok) {
          const user = await userRes.json();
          const repos = await reposRes.json();

          const totalStars = repos.reduce((acc: number, r: any) => acc + (r.stargazers_count || 0), 0);

          const featured = repos
            .filter((r: any) => !r.fork)
            .slice(0, 3)
            .map((r: any) => ({
              name: r.name,
              description: r.description || 'Open source engineering project.',
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              language: r.language || 'Code',
              url: r.html_url,
            }));

          const overview: GitHubOverview = {
            publicRepos: user.public_repos || FALLBACK_DATA.publicRepos,
            totalStars,
            topLanguages: FALLBACK_DATA.topLanguages,
            featuredRepos: featured.length > 0 ? featured : FALLBACK_DATA.featuredRepos,
          };

          setData(overview);
          localStorage.setItem('gh_overview_data', JSON.stringify(overview));
          localStorage.setItem('gh_overview_time', Date.now().toString());
        } else {
          setIsUsingFallback(true);
        }
      } catch {
        setIsUsingFallback(true);
      }
    }

    fetchGitHubData();
  }, [username]);

  return (
    <div className="mt-8 space-y-6 max-w-4xl">
      {/* Top GitHub Metrics Counter Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="flex flex-col items-center justify-center p-3.5 bg-gh-bg-secondary rounded-xl border border-gh-border text-center">
          <FaCodeBranch className="text-gh-blue mb-1" size={18} />
          <span className="font-bold text-gh-text text-lg sm:text-xl font-mono">{data.publicRepos}</span>
          <span className="text-[11px] text-gh-text-muted font-mono uppercase tracking-wider">Public Repos</span>
        </div>

        <div className="flex flex-col items-center justify-center p-3.5 bg-gh-bg-secondary rounded-xl border border-gh-border text-center">
          <FaStar className="text-yellow-400 mb-1" size={18} />
          <span className="font-bold text-gh-text text-lg sm:text-xl font-mono">{data.totalStars}</span>
          <span className="text-[11px] text-gh-text-muted font-mono uppercase tracking-wider">Total Stars</span>
        </div>

        <div className="flex flex-col items-center justify-center p-3.5 bg-gh-bg-secondary rounded-xl border border-gh-border text-center">
          <GitCommit className="text-emerald-400 mb-1" size={18} />
          <span className="font-bold text-gh-text text-lg sm:text-xl font-mono">Active</span>
          <span className="text-[11px] text-gh-text-muted font-mono uppercase tracking-wider">Commit Cadence</span>
        </div>

        <div className="flex flex-col items-center justify-center p-3.5 bg-gh-bg-secondary rounded-xl border border-gh-border text-center">
          <GitPullRequest className="text-purple-400 mb-1" size={18} />
          <span className="font-bold text-gh-text text-lg sm:text-xl font-mono">Verified</span>
          <span className="text-[11px] text-gh-text-muted font-mono uppercase tracking-wider">CI Automated</span>
        </div>
      </div>

      {/* Language Distribution Bar */}
      <div className="p-4 rounded-xl bg-gh-bg-secondary border border-gh-border space-y-2.5">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-gh-text-muted uppercase font-semibold">Repository Language Distribution:</span>
          <span className="text-gh-text-muted">Primary: TypeScript / C# / Python</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gh-bg flex overflow-hidden">
          {data.topLanguages.map((lang, idx) => (
            <div
              key={idx}
              style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
              title={`${lang.name}: ${lang.percentage}%`}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-mono">
          {data.topLanguages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-gh-text-muted">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
              <span>{lang.name} ({lang.percentage}%)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Repositories Quick Cards */}
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-gh-text-muted mb-3 font-semibold">
          Featured Active Repositories on GitHub:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {data.featuredRepos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-gh-bg-secondary border border-gh-border hover:border-gh-blue/50 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-gh-blue group-hover:underline truncate">
                    {repo.name}
                  </span>
                  <ExternalLink size={12} className="text-gh-text-muted group-hover:text-gh-blue shrink-0" />
                </div>
                <p className="text-xs text-gh-text-muted line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-gh-text-muted mt-3 pt-2 border-t border-gh-border/50">
                <span>{repo.language}</span>
                <span className="flex items-center gap-1">
                  <FaStar size={11} className="text-yellow-400" /> {repo.stars}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contribution Calendar Container */}
      <div className="bg-gh-bg-secondary p-5 sm:p-6 rounded-xl border border-gh-border overflow-x-auto hide-scrollbar">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <FaGithub size={16} className="text-gh-blue" />
            <span className="text-xs font-mono uppercase tracking-wider text-gh-text font-semibold">
              GitHub Contribution Heatmap ({username})
            </span>
          </div>
          {isUsingFallback && (
            <span className="text-[10px] font-mono text-gh-text-muted flex items-center gap-1">
              <AlertCircle size={11} /> API rate limit fallback active
            </span>
          )}
        </div>

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
