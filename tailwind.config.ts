import type { Config } from 'tailwindcss'

const config: Config = {
  // Arquivos que podem ter classes do tailwind a gente configura aqui
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
      colors: {
        violet: {
          25: '#fcfaff',
        },
      },
      border: {
        borderWidth: {
          6: '6px',
        },
      },
    },
  },
  plugins: [],
}
export default config
