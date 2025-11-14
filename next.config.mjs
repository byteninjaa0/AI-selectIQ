/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  productionBrowserSourceMaps: false, // ❌ Prevents access to .map files




  webpack: (config) => {
    // Ignore Node.js core modules (not available in browser)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
  
};

export default nextConfig;
