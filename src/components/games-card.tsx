'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { games } from '@/data/games';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';

const ROTATION_ANGLE = 35; // Reduced for more subtle rotation
const CARD_GAP = 250; // Adjusted for better spacing
const MAX_CARDS_VISIBLE = 3; // Control how many cards are visible at once
const AUTO_PLAY_INTERVAL = 5000;

export default function GamesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);
  const totalCards = games.length;

  const moveToIndex = useCallback((index: number) => {
    // setIsAutoPlaying(false); // Stop autoplay when user interacts
    const wrapped = ((index % totalCards) + totalCards) % totalCards;
    setCurrentIndex(wrapped);
  }, [totalCards]);

  const handlers = useSwipeable({
    onSwipedLeft: () => moveToIndex(currentIndex + 1),
    onSwipedRight: () => moveToIndex(currentIndex - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      moveToIndex(currentIndex + 1);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying, moveToIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') moveToIndex(currentIndex - 1);
      if (e.key === 'ArrowRight') moveToIndex(currentIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, moveToIndex]);

  return (
    <div className="max-w-7xl mx-auto" 
         onMouseEnter={() => setIsAutoPlaying(false)}
         onMouseLeave={() => setIsAutoPlaying(true)}>
      <h2 className="text-6xl font-bold mb-4">Our Games</h2>
      <p className="text-xl text-gray-600 mb-12">Explore our latest creations</p>

      <div className={`relative h-[600px] flex items-center justify-center overflow-hidden`}
           {...handlers}
           role="region"
           aria-label="Games carousel">
        <Button
          variant="ghost"
          size="icon"
          className={`absolute left-[15%] top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white shadow-lg hover:scale-110 ${games.length === 1 ? "hidden" : ""}`}
          onClick={() => moveToIndex(currentIndex - 1)}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className={`absolute right-[15%] top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white shadow-lg hover:scale-110 ${games.length === 1 ? "hidden" : ""}`}
          onClick={() => moveToIndex(currentIndex + 1)}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        <div className="carousel-perspective w-full">
          <div className="carousel-3d">
            {games.map((game, index) => {
              const offset = index - currentIndex;
              const distance = Math.abs(offset);
              const isVisible = distance <= Math.floor(MAX_CARDS_VISIBLE / 2);
              
              // Adjusted scale and z-index calculations
              const scale = 1 - (distance * 0.15);
              const opacity = 1 - (distance * 0.3);
              const zOffset = -Math.abs(offset) * 150; // Increased depth
              const zIndex = isVisible ? totalCards - distance : 0;

              return (
                <div
                  key={index}
                  className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    transform: `
                      translateX(${offset * CARD_GAP}px)
                      translateZ(${zOffset}px)
                      rotateY(${offset * ROTATION_ANGLE}deg)
                      scale(${scale})
                    `,
                    zIndex,
                    opacity: isVisible ? opacity : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  role="group"
                  aria-label={`Game ${index + 1}`}
                  tabIndex={isVisible ? 0 : -1}
                  onClick={() => {
                    moveToIndex(index);
                    setSelectedGame(game);
                  }}
                >
                  <div className="card-content">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transform-gpu">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={game.image}
                          alt={`Game ${index + 1}`}
                          fill
                          className="object-cover transition-opacity duration-300"
                          loading="eager"
                          onLoadingComplete={(img) => img.classList.remove('opacity-0')}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                        <p className="text-gray-600">
                          {game.description}
                        </p>
                        <Button className="mt-4 w-full bg-black hover:bg-black/70">Learn More</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalCards }).map((_, index) => (
            <div key={index} className="relative flex items-center">
            {index === currentIndex ? (
                <div className="relative w-16 h-2 flex items-center">
                <div className="absolute inset-0 bg-black/30 rounded-full" />
                <div 
                  className="absolute inset-0 bg-black rounded-full"
                  style={{
                  animation: `progress ${AUTO_PLAY_INTERVAL}ms linear ${isAutoPlaying ? 'forwards' : 'paused'}`,
                  transformOrigin: 'left'
                  }}
                  onAnimationIteration={() => {
                    moveToIndex(currentIndex + 1);
                  }}
                />
                <style jsx>{`
                  @keyframes progress {
                  from { transform: scaleX(0); }
                  to { transform: scaleX(1); }
                  }
                `}</style>
                </div>
            ) : (
              <button
                className={`w-2 h-2 hover:w-8 rounded-full transition-all duration-300 
                  ${index === currentIndex 
                    ? 'bg-black' 
                    : 'bg-black/30 hover:bg-black/60'
                  }`}
                onClick={() => moveToIndex(index)}
                aria-label={`Go to game ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            )}
          </div>
        ))}


           { /* {Array.from({ length: totalCards }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all hover:w-4 ${
              index === currentIndex ? 'bg-black w-4' : 'bg-black/30 hover:bg-black/60'
              }`}
              onClick={() => moveToIndex(index)}
              aria-label={`Go to game ${index + 1}`}
            /> 
            ))} */}
        </div>
      </div>    

      {/* Add Modal */}
      <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className={`
          fixed z-50 gap-4 p-6 bg-background shadow-lg duration-200
          w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] overflow-y-auto
          top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
          rounded-lg
          md:w-[90vw] md:max-w-2xl md:h-auto
          data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        `}>
          {selectedGame && (
          <>
            <div className="relative aspect-video mb-6">
          <Image
          src={selectedGame.image}
          alt={selectedGame.title}
          fill
          className="object-cover rounded-xl shadow-lg"
          priority
          />
            </div>
            
            <DialogHeader className="space-y-6">
          <div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold mb-2">
            {selectedGame.title}
          </DialogTitle>
          <DialogDescription className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {selectedGame.description}
          </DialogDescription>
          </div>
    
          <div className="flex flex-col mt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-500">
          Genre
            </h3>
            <Badge className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full">
          {selectedGame.genre}
            </Badge>
            </div>
    
            <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-500">
          Platform
            </h3>
            <Badge className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full">
          {selectedGame.platform}
            </Badge>
            </div>
    
            <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-500">
          CCU
            </h3>
            <Badge className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full">
          10K
            </Badge>
            </div>
          </div>
            
          <Button className="w-full text-lg py-4 sm:py-6 bg-black hover:bg-black/90 transition-colors">
            Play Now
          </Button>
          </div>
            </DialogHeader>
          </>
          )}
        </DialogContent>
      </Dialog>  
    </div>
  );
}

