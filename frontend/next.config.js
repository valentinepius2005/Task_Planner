module.exports = {
    // Enable React Strict Mode (recommended for development)
    reactStrictMode: true,
  
    // Custom Webpack configuration
    webpack(config, { isServer }) {
      // Example: Add custom Webpack settings if needed
      // You can also conditionally apply config settings based on whether it's a server-side or client-side build
      if (!isServer) {
        // Client-side only settings can go here (e.g., polyfills)
      }
      return config;
    },
  
    // Environment variables for both client and server-side
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Accessible on both client and server
      NEXT_PUBLIC_JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET, // Exposed to client-side code
    },
  
    // Image optimization configuration (optional)
    images: {
      domains: ['example.com', 'cdn.example.com'], // Add external image domains if needed
    },
  
    // Redirects configuration (optional)
    async redirects() {
      return [
        {
          source: '/old-route',
          destination: '/new-route',
          permanent: true, // 301 redirect (permanent)
        },
      ];
    },
  
    // Rewrites configuration (optional, for API routing, etc.)
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/api/:path*', // Example API proxy
        },
      ];
    },
  
    // Custom build output directory (optional)
    distDir: 'build', // Custom build output directory (default is .next)
  
    // Additional configuration for static export (optional)
    // Uncomment this if you're using `next export` to generate a static site
    // exportTrailingSlash: true,
  };
  
