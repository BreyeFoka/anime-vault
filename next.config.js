/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Only the hosts the app actually loads images from, so the image
    // optimizer can't be used to fetch and resize arbitrary URLs.
    remotePatterns: [
      { protocol: "https", hostname: "shikimori.one" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
};

module.exports = nextConfig;
