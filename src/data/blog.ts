export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  image: string;
  gameId: number;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Punching Simulator Update - September 2024",
    description: "Our latest update brings new features and improvements to Punching Simulator.",
    content: "We're excited to share the latest developments in Punching Simulator...",
    author: "Javaughn Miller",
    date: "9/15/24",
    image: "/images/game-banner.jpg",
    gameId: 1,
    tags: ["Development", "Simulation", "Incremental Simulator", "Update"]
  },
]; 