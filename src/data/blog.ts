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
    title: "Adventure Quest Development Update - March 2024",
    description: "Latest updates on our upcoming RPG adventure game",
    content: "We're excited to share the latest developments in Adventure Quest...",
    author: "Javaughn Miller",
    date: "2024-03-15",
    image: "/images/game-banner.jpg",
    gameId: 1,
    tags: ["Development", "RPG", "Update"]
  },
  {
    id: 2,
    title: "Space Explorers Beta Testing Announcement",
    description: "Join us in testing the next frontier of space exploration",
    content: "The beta testing phase for Space Explorers is about to begin...",
    author: "Seth",
    date: "2024-03-10",
    image: "/images/game-banner.jpg",
    gameId: 2,
    tags: ["Beta", "Testing", "Space"]
  }
]; 