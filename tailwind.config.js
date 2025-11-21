module.exports = {
  content: [
    "./src/**/*.{html,js}", // adapte selon ton projet
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#3B82F6",
        accent: "#10B981",
        neutral: "#F3F4F6",
        "neutral-dark": "#111827",
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        md: '0.375rem',
        lg: '0.5rem',
      }
    },
  },
  plugins: [
    require('daisyui'),
    // d'autres plugins si besoin
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}