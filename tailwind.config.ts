import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#0a0a0a',
  			foreground: '#ffffff',
  			primary: {
  				DEFAULT: '#F97316',
  				foreground: '#ffffff',
  			},
  			card: {
  				DEFAULT: '#111111',
  				foreground: '#ffffff',
  			},
  			border: '#1a1a1a',
  		}
  	},
  	animation: {
  		gradient: 'gradient 8s linear infinite',
  		'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
  		float: 'float 3s ease-in-out infinite',
  		noise: 'noise .5s steps(1) infinite',
  	},
  	keyframes: {
  		gradient: {
  			'0%, 100%': { backgroundPosition: '0% 50%' },
  			'50%': { backgroundPosition: '100% 50%' },
  		},
  		'text-shimmer': {
  			'0%': { transform: 'skewX(-12deg) translateX(-100%)' },
  			'100%': { transform: 'skewX(-12deg) translateX(100%)' }
  		},
  		float: {
  			'0%, 100%': { 
  				transform: 'translateY(0px)',
  			},
  			'50%': { 
  				transform: 'translateY(-20px)',
  			},
  		},
  		noise: {
  			'0%, 100%': { transform: 'translate(0, 0)' },
  			'10%': { transform: 'translate(-5%, -5%)' },
  			'20%': { transform: 'translate(-10%, 5%)' },
  			'30%': { transform: 'translate(5%, -10%)' },
  			'40%': { transform: 'translate(-5%, 15%)' },
  			'50%': { transform: 'translate(-10%, 5%)' },
  			'60%': { transform: 'translate(15%, 0)' },
  			'70%': { transform: 'translate(0, 10%)' },
  			'80%': { transform: 'translate(-15%, 0)' },
  			'90%': { transform: 'translate(10%, 5%)' },
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
