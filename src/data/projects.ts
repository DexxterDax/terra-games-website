import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  stars: number;
  image?: string | StaticImageData;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Adventure Quest",
    description: "An epic RPG adventure game currently in development",
    status: "In Development",
    stars: 245,
  },
  {
    id: 2,
    title: "Space Explorers",
    description: "Multiplayer space simulation game",
    status: "Beta Testing",
    stars: 189,
  },
]; 