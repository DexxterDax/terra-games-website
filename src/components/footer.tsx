import Link from 'next/link';
import { 
  siGithub, 
  siX, 
  siLinkedin, 
  siDiscord,
  siRoblox,
  siYoutube
} from 'simple-icons';
import {Icon}  from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">TerraDream Games</span>
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          </div>
            <p className="text-gray-400 text-sm">
              Crafting immersive gaming experiences on the Roblox platform.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/TerraDreamGames" 
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <Icon icon={siGithub} />
              </a>
              <a 
                href="https://twitter.com/TerraDreamGames" 
                className="text-gray-400 hover:text-white transition"
                aria-label="X (Twitter)"
              >
                <Icon icon={siX} />
              </a>
              <a 
                href="https://linkedin.com/TerraDreamGames" 
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Icon icon={siLinkedin} />
              </a>
              <a 
                href="https://discord.gg/7UfUdyfexn" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Discord"
              >
                <Icon icon={siDiscord} />
              </a>
              <a 
                href="https://www.roblox.com/communities/33589661/TerraDream-Games" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Roblox"
              >
                <Icon icon={siRoblox} />
              </a>
              <a 
                href="https://youtube.com" 
                className="text-gray-400 hover:text-white transition"
                aria-label="YouTube"
              >
                <Icon icon={siYoutube} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/games" className="text-gray-400 hover:text-white transition">
                  Our Games
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white"
                  aria-label="Subscribe"
                >
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TerraDream Games. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 