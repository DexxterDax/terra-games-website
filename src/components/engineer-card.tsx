import { TeamMember } from "@/data/team";
import Image from "next/image";
import { Icon } from "./ui/icon";
import { siDiscord, siGithub, siLinkedin, siX } from "simple-icons";
import { motion } from "framer-motion";

type Props = {
    member: TeamMember;
    index: number
}

function EngineerCard({member, index}: Props) {
    return <motion.div
      className="group relative bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative aspect-[1/1] overflow-hidden rounded-xl bg-gray-900">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        
        {/* Image */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="transform transition-transform duration-300 group-hover:translate-y-[-0.5rem]">
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-sm text-gray-300 mb-3">{member.role}</p>
            
            {/* Social Links */}
            <div className="flex gap-3 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <a 
                href={member.github}
                className="text-white hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={siGithub} className="w-5 h-5"/>
              </a>
              <a 
                href={member.linkedin}
                className="text-white hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={siLinkedin} className="w-5 h-5"/>
              </a>
              <a 
                href={member.x}
                className="text-white hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={siX} className="w-5 h-5"/>
              </a>
              <a 
                href={member.discord}
                className="text-white hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={siDiscord} className="w-5 h-5"/>
              </a>
            </div>
          </div>
          
          {/* Specialty Tag */}
          <div className="absolute top-0 right-0 m-3 px-2 py-0.5 bg-orange-500/90 rounded-full text-xs text-white opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {member.specialty}
          </div>
        </div>
      </div>
    </motion.div>
}

export default EngineerCard