'use client';

import { teamMembers } from '@/data/team';
import EngineerCard from '@/components/engineer-card';
import GamesSection from '@/components/games-card';
import { Noise } from '../components/ui/noise';
import { Button } from '@/components/ui/button';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] relative">
      {/* Add noise overlay */}
      <Noise />
      
      {/* Navigation */}
      <nav className="px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">TerraDream</span>
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="px-4 py-2 rounded-full hover:bg-black/5">Work</a>
            <a href="#" className="px-4 py-2 rounded-full bg-black text-white">Studio</a>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-black/5">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-4 sm:px-8 py-12 sm:py-24">
        <div className="max-w-7xl mx-auto relative">
          {/* Gradient blob - adjust size for mobile */}
          <div className="absolute -right-10 sm:-right-20 top-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold max-w-4xl leading-tight">
            <span className="block sm:inline">TURNING{" "}</span>
            <span className="relative inline-block group">
              <div className="relative inline-flex">
                {'DREAMS'.split('').map((char, i) => (
                  <div 
                    key={`dreams-${i}`}
                    className="relative inline-block"
                    style={{
                      animationName: 'float',
                      animationDuration: '2s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite',
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <span className="animate-gradient bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto]">
                      {char}
                    </span>
                  </div>
                ))}
              </div>
              <span className="absolute -inset-x-2 inset-y-3 bg-orange-500/20 blur-xl -z-10 animate-pulse"></span>
            </span>
            {" "}
            <span className="block sm:inline">INTO{" "}</span>
            <span className="relative inline-block group">
              <div className="relative inline-flex">
                {'GAMES'.split('').map((char, i) => (
                  <div 
                    key={`games-${i}`}
                    className="relative inline-block"
                    style={{
                      animationName: 'float',
                      animationDuration: '2s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite',
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <span className="animate-gradient bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto]">
                      {char}
                    </span>
                  </div>
                ))}
              </div>
              <span className="absolute -inset-x-2 inset-y-3 bg-orange-500/20 blur-xl -z-10 animate-pulse"></span>
            </span>
          </h1>

          
          {/* Content grid - stack on mobile */}
          <div className="mt-12 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden order-2 lg:order-1">
            <div className="absolute -left-10 sm:-left-20 top-0 w-70 sm:w-96 h-70 sm:h-96 bg-green-300 rounded-full blur-3xl opacity-10"></div>
              <div className="w-full h-full bg-gray-200 relative">
                {/* Add your game banner image here */}
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-xl sm:text-2xl">
                We craft immersive gaming experiences that push the boundaries of creativity and innovation on the Roblox platform.
              </p>
              <Button className="w-full h-15 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-black/90 hover:scale-105 transition">
               View Our Work
              </Button>
            </div>
          </div>
        </div>
      </main>

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