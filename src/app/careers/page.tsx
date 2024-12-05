'use client';

import { motion } from "framer-motion";
import { Briefcase, Users, Star, MapPin } from "lucide-react";
import { Noise } from "@/components/ui/noise";

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

const positions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Game Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our team to create innovative gaming experiences using Roblox Studio and Luau."
  },
  {
    id: 2,
    title: "3D Artist",
    department: "Art",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create stunning 3D assets and environments for our next-generation Roblox games."
  },
  {
    id: 3,
    title: "Game Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Design engaging gameplay mechanics and systems that keep players coming back."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] relative">
      <Noise />
      
      {/* Hero Section */}
      <section className="relative py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl font-bold">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us create the next generation of immersive gaming experiences on the Roblox platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <Users className="w-8 h-8 mx-auto text-orange-500" />
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-gray-400">Team Members</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center space-y-4"
          >
            <Star className="w-8 h-8 mx-auto text-orange-500" />
            <h3 className="text-4xl font-bold">4.8/5</h3>
            <p className="text-gray-400">Employee Rating</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <MapPin className="w-8 h-8 mx-auto text-orange-500" />
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="text-gray-400">Countries</p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Join us in creating amazing experiences</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span>{position.type}</span>
                      <span>{position.experience}</span>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-black/90 transition whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 