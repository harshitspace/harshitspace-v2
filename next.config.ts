import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf",
      },
      {
        source: "/github",
        destination: "https://github.com/harshitspace",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/harshitspace",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/harshitspace",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
