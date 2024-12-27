import html2canvas from 'html2canvas';
import type { Player } from '../types/github';

export function generateStatsMarkdown(winner: Player, players: Player[]): string {
  const date = new Date().toLocaleDateString();
  
  let markdown = `# GitHub Battle Royale - Battle Results\n\n`;
  markdown += `Battle Date: ${date}\n\n`;
  
  markdown += `## 🏆 Champion: ${winner.user.login}\n\n`;
  if (winner.user.name) {
    markdown += `Name: ${winner.user.name}\n`;
  }
  
  markdown += '\n### Champion Stats:\n';
  markdown += '```\n';
  markdown += `Commits: ${winner.stats.commits}\n`;
  markdown += `Stars: ${winner.stats.stars}\n`;
  markdown += `Pull Requests: ${winner.stats.pullRequests}\n`;
  markdown += `Issues: ${winner.stats.issues}\n`;
  markdown += `Repositories: ${winner.stats.repositories}\n`;
  markdown += '```\n\n';
  
  markdown += '## All Participants\n\n';
  players.forEach((player) => {
    markdown += `### ${player.user.login}\n`;
    markdown += '```\n';
    markdown += `Commits: ${player.stats.commits}\n`;
    markdown += `Stars: ${player.stats.stars}\n`;
    markdown += `Pull Requests: ${player.stats.pullRequests}\n`;
    markdown += `Issues: ${player.stats.issues}\n`;
    markdown += `Repositories: ${player.stats.repositories}\n`;
    markdown += '```\n\n';
  });
  
  return markdown;
}

export async function downloadStatsAsImage(elementId: string, format: 'png' | 'jpeg' = 'png') {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 2, // For better quality
    });
    
    const dataUrl = canvas.toDataURL(`image/${format}`);
    const link = document.createElement('a');
    link.download = `github-battle-results.${format}`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

export function downloadStats(winner: Player, players: Player[]) {
  const markdown = generateStatsMarkdown(winner, players);
  const blob = new Blob([markdown], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'github-battle-results.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}