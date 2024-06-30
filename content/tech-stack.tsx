import { FaAws } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { ImUpload } from "react-icons/im";
import { IoLogoSass, IoLogoVercel } from "react-icons/io5";
import { MdDesktopMac } from "react-icons/md";

import AwsAmplify from "public/icons/tech-logos/aws_amplify.svg";
import AwsLambda from "public/icons/tech-logos/aws_lambda.svg";
import Axios from "public/icons/tech-logos/axios.svg";
import Emmet from "public/icons/tech-logos/emmet.svg";
import HeadlessUi from "public/icons/tech-logos/headlessui.svg";
import Jsdom from "public/icons/tech-logos/jsdom.svg";
import Mdx from "public/icons/tech-logos/mdx.svg";
import PlanetScale from "public/icons/tech-logos/planetscale.svg";
import Preact from "public/icons/tech-logos/preact.svg";
import Prisma from "public/icons/tech-logos/prisma.svg";
import ReactQuery from "public/icons/tech-logos/react_query.svg";
import Remix from "public/icons/tech-logos/remix.svg";
import Sendgrid from "public/icons/tech-logos/sendgrid.svg";
import Stylelint from "public/icons/tech-logos/stylelint.svg";
import Swc from "public/icons/tech-logos/swc.svg";
import Takealot from "public/icons/tech-logos/takealot.svg";
import Trpc from "public/icons/tech-logos/trpc.svg";
import Turborepo from "public/icons/tech-logos/turborepo.svg";
import Vend from "public/icons/tech-logos/vend_pos.svg";
import NextJs from "public/icons/tech-logos/nextjs.svg";
import Express from "public/icons/tech-logos/express.svg";
import Liquid from "public/icons/tech-logos/liquid.svg";
import { SiBootstrap, SiI18Next, SiShadcnui } from "react-icons/si";

type IconProps = React.HTMLAttributes<SVGElement>;

export const TECH = {
  shadcn: {
    name: "Shadcn/Ui",
    Icon: ({ className }: IconProps) => <SiShadcnui className={className} />,
  },
  i18next: {
    name: "i18next",
    Icon: ({ className }: IconProps) => <SiI18Next className={className} />,
  },
  mockito: {
    name: "Mockito"
  },
  typescript: {
    name: "TypeScript",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  vercel: {
    name: "Vercel",
    Icon: ({ className }: IconProps) => <IoLogoVercel className={className} />,
  },
  netlify: {
    name: "Netlify",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  sass: {
    name: "Sass",
    Icon: ({ className }: IconProps) => <IoLogoSass className={className} />,
  },
  liquid: {
    name: "Liquid",
    Icon: ({ className }: IconProps) => <Liquid className={className} />,
  },
  nextjs: {
    name: "Next.js",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  markdown: {
    name: "Markdown",
    Icon: ({ className }: IconProps) => <Mdx className={className} />,
  },
  mdx: {
    name: "Mdx",
    Icon: ({ className }: IconProps) => <Mdx className={className} />,
  },
  graphql: {
    name: "GraphQL",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  reactjs: {
    name: "React.js",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  tailwind: {
    name: "TailwindCSS",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  prisma: {
    name: "Prisma",
    Icon: ({ className }: IconProps) => <Prisma className={className} />,
  },
  planetscale: {
    name: "PlanetScale",
    Icon: ({ className }: IconProps) => <PlanetScale className={className} />,
  },
  trpc: {
    name: "Trpc",
    Icon: ({ className }: IconProps) => <Trpc className={className} />,
  },
  aws: {
    name: "AWS",
    Icon: ({ className }: IconProps) => <FaAws className={className} />,
  },
  aws_amplify: {
    name: "Aws Amplify",
    Icon: ({ className }: IconProps) => <AwsAmplify className={className} />,
  },
  aws_lambda: {
    name: "Aws Lambda",
    Icon: ({ className }: IconProps) => <AwsLambda className={className} />,
  },
  axios: {
    name: "Axios",
    Icon: ({ className }: IconProps) => <Axios className={className} />,
  },
  chrome: {
    name: "Chrome",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  css_3: {
    name: "CSS",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  emmet: {
    name: "Emmet",
    Icon: ({ className }: IconProps) => <Emmet className={className} />,
  },
  eslint: {
    name: "Eslint",
    Icon: ({ className }: IconProps) => <Stylelint className={className} />,
  },
  facebook: {
    name: "Facebook",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  figma: {
    name: "Figma",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  sketch: {
    name: "Sketch",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  firebase: {
    name: "Firebase",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  framer: {
    name: "Framer",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  git: {
    name: "Git",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  github: {
    name: "Github",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  headlessui: {
    name: "Headless Ui",
    Icon: ({ className }: IconProps) => <HeadlessUi className={className} />,
  },
  html_5: {
    name: "HTML",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  intellij_idea: {
    name: "Intellij Idea",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  ionic: {
    name: "Ionic",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  javascript: {
    name: "JavaScript",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  jest: {
    name: "Jest",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  jsdom: {
    name: "Jsdom",
    Icon: ({ className }: IconProps) => <Jsdom className={className} />,
  },
  mysql: {
    name: "MySQL",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  nodejs: {
    name: "Node.js",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  express: {
    name: "Express",
    Icon: ({ className }: IconProps) => <Express className={className} />,
  },
  preact: {
    name: "Preact",
    Icon: ({ className }: IconProps) => <Preact className={className} />,
  },
  prettier: {
    name: "Prettier",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  react: {
    name: "React.js",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  dev_tools: {
    name: "Dev Tools",
    Icon: ({ className }: IconProps) => <MdDesktopMac className={className} />,
  },
  react_query: {
    name: "React Query",
    Icon: ({ className }: IconProps) => <ReactQuery className={className} />,
  },
  redis: {
    name: "Redis",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  remix: {
    name: "Remix",
    Icon: ({ className }: IconProps) => <Remix className={className} />,
  },
  sendgrid: {
    name: "SendGrid",
    Icon: ({ className }: IconProps) => <Sendgrid className={className} />,
  },
  stylelint: {
    name: "Stylelint",
    Icon: ({ className }: IconProps) => <Stylelint className={className} />,
  },
  swc: {
    name: "SWC",
    Icon: ({ className }: IconProps) => <Swc className={className} />,
  },
  tailwindcss: {
    name: "Tailwindcss",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  takealot: {
    name: "Takealot",
    Icon: ({ className }: IconProps) => <Takealot className={className} />,
  },
  turborepo: {
    name: "Turborepo",
    Icon: ({ className }: IconProps) => <Turborepo className={className} />,
  },
  webpack: {
    name: "Webpack",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  yarn: {
    name: "Yarn",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  npm: {
    name: "NPM",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  sql: {
    name: "SQL",
    Icon: ({ className }: IconProps) => <AiOutlineConsoleSql className={className} />,
  },
  ruby: {
    name: "Ruby",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  php: {
    name: "PHP",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  illustrator: {
    name: "Illustrator",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  photoshop: {
    name: "Photoshop",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  postman: {
    name: "Postman",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  erply: {
    Icon: null,
    name: "Erply POS",
  },
  dear: {
    Icon: null,
    name: "Dear POS",
  },
  micros: {
    Icon: null,
    name: "Micros POS",
  },
  wordpress: {
    name: "WordPress",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  ftp: {
    name: "Ftp",
    Icon: ({ className }: IconProps) => <ImUpload className={className} />,
  },
  meta: {
    name: "Meta Ads & Facebook Business suite",
    Icon: ({ className }: IconProps) => <ImUpload className={className} />,
  },
  google: {
    name: "Google Ads, Merchant & Analytics",
    Icon: ({ className }: IconProps) => <ImUpload className={className} />,
  },
  instagram: {
    name: "Instagram",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  omnisend: {
    name: "Omnisend Email Marketing",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  asana: {
    name: "Asana",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  soapui: {
    name: "SoapUi",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  msTeams: {
    name: "Microsoft Teams",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  zoom: {
    name: "Zoom",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  slack: {
    name: "Slack",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  java: {
    name: "Java",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  springboot: {
    name: "Spring",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  laravel: {
    name: "Laravel",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  junit: {
    name: "JUnit",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  eclipse: {
    name: "Eclipse Idea",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  bootstrap: {
    name: "Bootstrap",
    Icon: ({ className }: IconProps) => <SiBootstrap className={className} />,
  },
} as const;
