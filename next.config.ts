import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'qecdgcembntsxibynlip.supabase.co',
    },
  ],
},
};
export default nextConfig;
