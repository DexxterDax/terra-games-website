'use client';

import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog-card";
import { motion } from "framer-motion";
import { Noise } from "@/components/ui/noise";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] relative">
      <Noise />
      
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-4">Game Development Blog</h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest news and developments from our games
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 