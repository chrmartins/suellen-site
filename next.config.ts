import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizações de imagem para assets locais
  images: {
    localPatterns: [
      {
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
