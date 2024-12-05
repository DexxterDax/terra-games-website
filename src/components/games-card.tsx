import { games } from "@/data/games";
import { motion } from "framer-motion";
import { Users, Star, NotebookPenIcon } from "lucide-react";
import Image from "next/image";
import gameBanner from "@/images/game-banner.jpg"
import { Button } from "./ui/button";
import Link from "next/link";
import { Icon } from "./ui/icon";
import { siRoblox } from "simple-icons";

const GamesSection = () => {
    return (
      <div className="max-w-7xl mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-6xl font-bold mb-4">Our Games</h2>
        <p className="text-xl font-light">Explore our latest creations</p>
      </motion.div>
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index *0.2 }}
            whileHover={{scale: 1.02}}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-900">
              {/* Background Image */}
              <Image
                src={gameBanner}
                alt={game.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-300 mb-4">{game.description}</p>
                  
                  {/* Stats */}
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-5 h-5" />
                      <span>{game.players}+ players</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>{game.rating}/5</span>
                    </div>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button asChild className="hover:scale-105 transition-transform">
                      <Link href={game.playLink}>
                      <Icon icon={siRoblox}/>Play Now
                      </Link>
                    </Button>

                    <Button variant={"secondary"} className="text-white hover:scale-105 transition-transform" asChild>
                      <Link href={game.learnMoreLink}>
                      <NotebookPenIcon/> View Our Blog
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
  
              {/* Game Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  game.status === 'Live' ? 'bg-green-500/90' : 'bg-orange-500/90'
                } text-white`}>
                  {game.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    );
  };
  

export default GamesSection