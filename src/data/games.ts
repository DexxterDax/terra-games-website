export type Game = {
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
  platform: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Punching Simulator",
    description: "Step into the ring and unleash your fury in Punching Simulator! 🥊💥 Train your fists of steel, get stronger, and rise through the ranks to dominate other players!",
    image: "/images/games/game-banner.jpg",
    status: "Live",
    players: 50000,
    rating: 4.8,
    playLink: "https://roblox.com/games/your-game-id",
    learnMoreLink: "/games/adventure-quest",
    features: ["Open World", "Multiplayer", "RPG Elements"],
    genre: "Adventure RPG",
    platform: "PC, Mobile"
  },


];