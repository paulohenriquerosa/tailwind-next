import type { Config } from "tailwindcss";

const config: Config = {
  // Arquivos que podem ter classes do tailwind a gente configura aqui
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        paulo: "#8257e6",
      },
    },
  },
  plugins: [],
};
export default config;
