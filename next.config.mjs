import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    deviceSizes: [320, 460, 540, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [
      "assets.vercel.com",
      "avatars1.githubusercontent.com",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "pbs.twimg.com",
      "images-na.ssl-images-amazon.com",
      "m.media-amazon.com",
      "creatorspace.imgix.net",
      "hotmart.s3.amazonaws.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // require("./scripts/create-components-export-index");
    }
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        tls: false,
        net: false,
        http: false,
        https: false,
        cardinal: false,
      };
    }

    // Configurar @svgr/webpack para arquivos SVG
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve('public/icons/tech-logos'),
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });

    return config;
  },
  experimental: {
    externalDir: true,
    // Remova 'images' daqui
  },
};

export default withNextIntl(nextConfig);
