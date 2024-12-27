import axios from 'axios';
import type { GitHubUser, BattleStats } from '../types/github';

const BASE_URL = 'https://api.github.com';

export async function fetchUserData(username: string): Promise<GitHubUser> {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
}

export async function fetchUserStats(username: string): Promise<BattleStats> {
  // In a real app, you'd need to make multiple API calls to get all these stats
  // This is a simplified version for demo purposes
  const [repos, events] = await Promise.all([
    axios.get(`${BASE_URL}/users/${username}/repos`),
    axios.get(`${BASE_URL}/users/${username}/events`)
  ]);

  const stats: BattleStats = {
    commits: events.data.filter((event: any) => event.type === 'PushEvent').length,
    stars: repos.data.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0),
    pullRequests: events.data.filter((event: any) => event.type === 'PullRequestEvent').length,
    issues: events.data.filter((event: any) => event.type === 'IssuesEvent').length,
    repositories: repos.data.length
  };

  return stats;
}