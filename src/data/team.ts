export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  specialty: string;
  github: string;
  x: string;
  discord: string;
  linkedin: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Javaughn Miller",
    role: "Founder & CEO",
    image: "/images/voidbanner.png",
    specialty: "Software Engineering",
    github: "https://github.com/DexxterDax",
    linkedin: "https://linkedin.com/in/javaughn-miller",
    x: "https://x.com/DexxterDax",
    discord: "https://discord.com/users/746369863156498493",
    bio: "10+ years of game development experience specializing in multiplayer systems",
  },
  {
    id: 2,
    name: "Seth",
    role: "Co-Founder & \nChief Operating Officer",
    image: "/images/voidbanner.png",
    specialty: "Game Technical Design",
    github: "https://github.com/xptea",
    linkedin: "https://linkedin.com",
    x: "https://x.com/VoidsWork",
    discord: "https://discord.com/users/1139185365597573180",
    bio: "Graphics programming expert with a focus on optimization",
  },
]; 