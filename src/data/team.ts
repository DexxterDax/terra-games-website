export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  specialty: string;
  github: string;
  linkedin: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Javaughn Miller",
    role: "Founder & CEO",
    image: "/team/placeholder.jpg",
    specialty: "Software Engineering",
    github: "https://github.com/DexxterDax",
    linkedin: "https://linkedin.com/in/javaughn-miller",
    bio: "10+ years of game development experience specializing in multiplayer systems",
  },
  {
    id: 2,
    name: "Seth",
    role: "Co-Founder & \nChief Operating Officer",
    image: "/team/placeholder.jpg",
    specialty: "Game Technical Design",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    bio: "Graphics programming expert with a focus on optimization",
  },
]; 