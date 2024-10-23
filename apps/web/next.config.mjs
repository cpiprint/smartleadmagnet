import {withSentryConfig} from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
// import {setupDevPlatform} from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
  transpilePackages: ["@smartleadmagnet/ui", "next-mdx-remote"],
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        // Routes this applies to
        source: "/wp-json/(.*)",
        // Headers
        headers: [
          // Allow for specific domains to have access or * for all
          {
            key: "Access-Control-Allow-Origin",
            value: "silver-caribou-278976.hostingersite.com",
            // DOES NOT WORK
            // value: process.env.ALLOWED_ORIGIN,
          },
          // Allows for specific methods accepted
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          // Allows for specific headers accepted (These are a few standard ones)
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog/',
          destination: 'https://silver-caribou-278976.hostingersite.com/blog/',
        },
        {
          source: '/blog/:path*/',
          destination: 'https://silver-caribou-278976.hostingersite.com/blog/:path*/',
        },
        {
          source: "/wp-content/:slug*",
          destination: "https://silver-caribou-278976.hostingersite.com/wp-content/:slug*"
        },
        {
          source: "/wp-includes/:slug*",
          destination: "https://silver-caribou-278976.hostingersite.com/wp-includes/:slug*"
        },
        {
          source: "/wp-json/:slug*",
          destination: "https://silver-caribou-278976.hostingersite.com/wp-json/:slug*"
        },
        {
          source: "/wp-admin/:slug*",
          destination: "https://silver-caribou-278976.hostingersite.com/wp-admin/:slug*"
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/:slug*',
          destination: `https://silver-caribou-278976.hostingersite.com/:slug*`,
        },
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.smartleadmagnet.com",
      },
      {
        protocol: "https",
        hostname: "d3uu14lxe8399z.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "cdn.smartereply.com",
      },
      {
        protocol: "https",
        hostname: "canny.io",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "smartereply.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "daisyui.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "api.producthunt.com",
      },
      {
        protocol: "https",
        hostname: "smartereply.canny.io",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

// if (process.env.NODE_ENV === "development") {
//   await setupDevPlatform();
// }

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: "smartleadmagnet",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
