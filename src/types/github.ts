export interface GitHubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  location: string;
  blog: string;
}

export interface BattleStats {
  commits: number;
  stars: number;
  pullRequests: number;
  issues: number;
  repositories: number;
}

export interface Player {
  user: GitHubUser;
  stats: BattleStats;
  score: number;
}