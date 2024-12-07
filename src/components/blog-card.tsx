import { BlogPost } from "@/data/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Tag } from "lucide-react";

type Props = {
  post: BlogPost;
  index: number;
};

export function BlogCard({ post, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
    >
      <div className="relative aspect-video">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4">{post.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-500"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          href={`/games/${post.id}`}
          className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
} 