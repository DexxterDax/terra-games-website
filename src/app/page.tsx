'use client';

import { teamMembers } from '@/data/team';
import EngineerCard from '@/components/engineer-card';
import GamesSection from '@/components/games-card';
import { Noise } from '../components/ui/noise';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import dreaming from "../../public/images/Dreaming.png"
import { useEffect, useRef } from 'react';

const AnimatedText = ({ text, id }: { text: string, id: string }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current?.classList.add('is-visible');
        } else {
          containerRef.current?.classList.remove('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span className="relative inline-block group" ref={containerRef}>
      <div className="relative inline-flex">
        {text.split('').map((char, i) => (
          <span 
            key={`${id}-${i}`}
            className="char-animate animate-gradient bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto]"
            style={{ '--char-index': i } as React.CSSProperties}
          >
            {char}
          </span>
        ))}
      </div>
      <span className="absolute -inset-x-2 inset-y-3 bg-orange-500/20 blur-xl -z-10 animate-pulse"></span>
    </span>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Add noise overlay */}
      <Noise />
      {/* Hero Section */}
      <main className="px-4 sm:px-8 py-12 sm:py-24">
        <div className="max-w-7xl mx-auto relative">
          {/* Gradient blob - adjusted for better mobile appearance */}
          <div className="absolute -right-4 sm:-right-20 top-0 w-48 sm:w-96 h-48 sm:h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold max-w-4xl leading-[1.2] sm:leading-tight">
            <span className="block mb-2 sm:mb-0 sm:inline">TURNING{" "}</span>
            <AnimatedText text="DREAMS" id="dreams" />
            {" "}
            <span className="block my-2 sm:my-0 sm:inline">INTO{" "}</span>
            <AnimatedText text="GAMES" id="games" />
          </h1>

          {/* Content grid - fixed image sizing */}
          <div className="mt-8 sm:mt-24 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
            <div className="absolute -left-4 sm:-left-20 top-0 w-48 sm:w-96 h-48 sm:h-96 bg-green-300 rounded-full blur-3xl opacity-10"></div>
            <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image 
                src="/images/Painting.png" 
                alt="gC" 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl max-w-[42ch]">
                We craft immersive gaming experiences that push the boundaries of creativity and innovation on the Roblox platform.
              </p>
              <Button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 hover:scale-105 transition text-base sm:text-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </main>


            {/* About Us Section */}
            <section className="relative py-32 px-8 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative aspect-[4/3]">
              <Image
                src={dreaming}
                alt="About TerraDream Games"
                className="object-cover"
                priority
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" /> */}
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">
                About Us
              </h2>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed">
                  Our goal is to create the most innovative, interactive, and fun-to-play experiences on the Roblox platform.
                </p>
                <p className="text-xl leading-relaxed">
                  Join us on this exciting adventure as we explore uncharted territories, push the limits of creativity, and redefine the gaming experience on Roblox.
                </p>
                <Button 
                  className="hover:scale-105 bg-slate-800 ansition-transform"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Projects Grid */}
      <section className="px-8 py-24 bg-[#F5F5F3]">
        <GamesSection />
      </section>

      {/* Team Section  bg-[#0A0A0B]*/}
      <section className="px-8 py-32 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-400 mb-16">Meet the engineers behind the magic</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <EngineerCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}