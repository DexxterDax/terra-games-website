"use client";

import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='px-8 py-6 bg-white/75 backdrop-blur-md shadow-orange-500'>
            <nav>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="text-2xl font-bold">TerraDream</Link>
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex gap-4">
                        <Button variant="ghost" asChild>
                            <Link href="/work">Work</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/games">Our Games</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/contact">Contact</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/careers">Careers</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-2">
                        <Button variant="ghost" asChild className="w-full">
                            <Link href="/work">Work</Link>
                        </Button>
                        <Button asChild className="w-full">
                            <Link href="/games">Our Games</Link>
                        </Button>
                        <Button variant="ghost" asChild className="w-full">
                            <Link href="/contact">Contact</Link>
                        </Button>
                        <Button variant="ghost" asChild className="w-full">
                            <Link href="/careers">Careers</Link>
                        </Button>
                    </div>
                )}
            </nav>
        </div>
    );
}