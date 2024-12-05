import { TeamMember } from "@/data/team";
import { motion } from "framer-motion";
import gameBanner from "@/images/game-banner.jpg"
import Image from "next/image";
import { Icon } from "./ui/icon";
import { siGithub, siLinkedin } from "simple-icons";

type Props = {
    member: TeamMember;
    index: number
}

function EngineerCard({member, index}: Props) {
    return <motion.div
    key={member.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-900">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={gameBanner}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="transform transition-transform duration-300 group-hover:translate-y-[-1rem]">
          <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
          <p className="text-gray-300 mb-4">{member.role}</p>
          
          {/* Social Links */}
          <div className="flex gap-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <a 
              href={member.github}
              className="text-white hover:text-orange-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={siGithub} className="w-6 h-6"/>
            </a>
            <a 
              href={member.linkedin}
              className="text-white hover:text-orange-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={siLinkedin} className="w-6 h-6"/>
            </a>
          </div>
        </div>
        
        {/* Specialty Tag */}
        <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-orange-500/90 rounded-full text-sm text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {member.specialty}
        </div>
      </div>
    </div>
  </motion.div>
}

export default EngineerCard