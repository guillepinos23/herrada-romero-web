import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        ink:  '#0b1220',   // navbar / fondo oscuro elegante
        slate:'#0f172a',   // fondo principal
        line: '#1c2435',   // bordes sutiles
        bone: '#e8ecf3',   // texto claro
        accent:'#16a34a',  // verde sobrio para llamadas a la acción
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        soft: '16px',
      },
    },
  },
  plugins: [],
}