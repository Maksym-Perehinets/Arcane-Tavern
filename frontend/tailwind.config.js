/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      colors: {
        'funny-purple': '#2D223A',
      },
      backgroundImage: {
        'spell-table': "url('/BackspellTb.png')",
        'home-page': " url(https://dvoxsotka.s3.amazonaws.com/arcane-tavern/homePageBG.png);",
        'characters-page': "url('/bg-characters.png');",
        'spell-page': "url(https://dvoxsotka.s3.amazonaws.com/arcane-tavern/spellPageBG.png);",
        'test-home-page': " url('/test-home-page-bg.webp');",
        'test-spell-page': "url('/test-spells-page-bg.webp')"
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
   
  },
  plugins: [],
}

