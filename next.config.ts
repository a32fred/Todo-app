/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Gera uma versão estática do site
  distDir: "out", // Pasta de saída para exportação
  images: {
    unoptimized: true, // Necessário para GitHub Pages
  },
  basePath: "/Todo-app", // Defina o nome do repositório
  assetPrefix: "/Todo-app/",
};

export default nextConfig;
