import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isGitHubPagesBuild =
  process.env.ASTRO_DEPLOY_TARGET === "github-pages";

export default defineConfig({
  site: "https://vdedeycker.github.io",
  base: isGitHubPagesBuild ? "/ACBB-v2" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
