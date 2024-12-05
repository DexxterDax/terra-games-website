export interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'Live' | 'In Development' | 'Beta';
  players: number;
  rating: number;
  playLink: string;
  learnMoreLink: string;
  features?: string[];
  genre?: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Adventure Quest",
    description: "Embark on an epic journey through a vast open world filled with challenges and mysteries.",
    image: "/games/adventure-quest.jpg", // Add your game image
    status: "Live",
    players: 50000,
    rating: 4.8,
    playLink: "https://roblox.com/games/your-game-id",
    learnMoreLink: "/games/adventure-quest",
    features: ["Open World", "Multiplayer", "RPG Elements"],
    genre: "Adventure RPG"
  },
  {
    id: 2,
    title: "Space Explorers",
    description: "Navigate through the cosmos, build your space station, and discover new galaxies.",
    image: "/games/space-explorers.jpg", // Add your game image
    status: "In Development",
    players: 25000,
    rating: 4.5,
    playLink: "https://roblox.com/games/your-game-id",
    learnMoreLink: "/games/space-explorers",
    features: ["Space Simulation", "Base Building", "Exploration"],
    genre: "Simulation"
  },
  // Add more games...
]; 