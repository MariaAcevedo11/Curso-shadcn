import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns : [
      {
        protocol: 'http', //Si fuera security https
        hostname: 'github.com' //Para permitir imagenes que vengan de github
      }
    ]
   }
};

export default nextConfig;
