/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Colors from your image + Pink accent
        brand: {
          navy: '#1F4591',     // Main Navy Blue
          royal: '#2B6AD0',    // Royal Blue
          cornflower: '#68A4F1', // Light Blue
          dark: '#061E47',     // Deep Background Blue
          pink: '#EC4899',     // Accent Pink
          online: '#22C55E',   // Success Green
        },
        chat: {
          bg: {
            light: '#F8FAFC',  // Very light slate for contrast
            dark: '#061E47',   // Using your Dark Blue for the deep UI
          },
          // Component surfaces (Sidebar, Input areas)
          surface: {
            light: '#FFFFFF',
            dark: '#0F172A',   // Slightly lighter than bg-dark for depth
          },
          bubble: {
            send: '#1F4591',   // Your Navy Blue for sent messages
            receive: {
              light: '#E2E8F0', // Light Gray-Blue
              dark: '#1E293B',  // Slate Blue
            }
          },
          text: {
            main: {
              light: '#0F172A',
              dark: '#F8FAFC',
            },
            muted: {
              light: '#64748B',
              dark: '#94A3B8',
            }
          }
        }
      },
      borderRadius: {
        'chat': '1.25rem',
      }
    },
   theme: {
    // Custom scrollbar styling support
  }
  },
  plugins: [],
}