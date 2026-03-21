/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable toggling via a class
  theme: {
    extend: {
      colors: {
        // Main brand colors
        brand: {
          primary: '#6366F1',   // Indigo-500
          accent: '#EC4899',    // Pink-500
          online: '#22C55E',    // Green-500 for status
        },
        // Semantic UI colors
        chat: {
          // Backgrounds
          bg: {
            light: '#FFFFFF',
            dark: '#0F172A',    // Slate-950
          },
          // Message Bubbles
          bubble: {
            send: '#6366F1',    // Your messages
            receive: {
              light: '#F1F5F9', // Slate-100
              dark: '#1E293B',  // Slate-800
            }
          },
          // Text colors
          text: {
            main: {
              light: '#1E293B',
              dark: '#F8FAFC',
            },
            muted: {
              light: '#64748B', // Timestamps/Details
              dark: '#94A3B8',
            }
          }
        }
      },
      borderRadius: {
        'chat': '1.25rem', // Soft, modern rounded corners for bubbles
      }
    },
  },
  plugins: [],
}