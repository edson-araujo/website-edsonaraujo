export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  background?: string;
  hoverBackground?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  link?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "GridItems.gridItem_1.title",
    icon: "linkedin",
    username: "@edson-alves-araujo",
    description:
      "GridItems.gridItem_1.description",
    color: "#0e76a8",
    buttonTitle: "GridItems.gridItem_1.buttonTitle",
    buttonLink: "https://www.linkedin.com/in/edson-alves-araujo/",
    buttonSecondaryText: "461",
    background: "d:bg-primary-700/10 bg-primary-700/10",
    hoverBackground: "hover:bg-primary-700/20 hover:d:bg-primary-700/20",
  },
  {
    layout: "1x2",
    type: "social",
    title: "GridItems.gridItem_2.title",
    icon: "instagram",
    username: "@eu_edsonaraujo",
    description: "GridItems.gridItem_2.description",
    buttonTitle: "GridItems.gridItem_2.buttonTitle",
    buttonLink: "https://twitter.com/eu_edsonaraujo",
    buttonSecondaryText: "3997",
    color: "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)",
    hoverBackground: "hover:d:bg-gray-900 hover:bg-neutral-50",
    background: "d:bg-gray-900/10 bg-gray-200/10",
  },
  {
    layout: "1x2",
    type: "social",
    title: "GridItems.gridItem_3.title",
    icon: "github",
    username: "@edsonaraujo",
    description: "GridItems.gridItem_3.description",
    buttonTitle: "GridItems.gridItem_3.buttonTitle",
    buttonSecondaryText: "3",
    buttonLink: "https://github.com/edson-araujo",
    color: "#070707",
    background: "d:bg-gray-400/10 bg-gray-400/10",
    hoverBackground: "hover:bg-gray-400/20 hover:d:bg-gray-400/40",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "GridItems.gridItem_9.title",
    icon: "spotify",
    link: "open.spotify.com",
    image:
      "https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzdmZTRhODJhMDhjNGYwZGVjYmVkZGJjNg==.jpeg?width=600&height=600",
    buttonTitle: "Follow",
    buttonSecondaryText: "3",
    buttonLink: "https://open.spotify.com/intl-pt/track/2o9LAypwGH4ctV0i9boo6d?si=db16941d9152485c",
    background: "d:bg-green-500/10 bg-green-500/10",
    hoverBackground: "hover:bg-green-500/20 hover:d:bg-green-500/20",
    color: "#1ED760",
  },
  {
    layout: "2x2",
    type: "social",
    title: "GridItems.gridItem_4.title",
    icon: "twitter",
    username: "@eu_edsonaraujo",
    description: "GridItems.gridItem_4.description",
    buttonTitle: "GridItems.gridItem_4.buttonTitle",
    buttonLink: "https://twitter.com/eu_edsonaraujo",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
    hoverBackground: "hover:dark:bg-gray-900 hover:bg-neutral-50",
    background: "d:bg-gray-900/10 bg-gray-200/10",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "GridItems.gridItem_5.title",
    icon: "amazon",
    promotion: "",
    oldPrice: "$109,00",
    price: "$78,90",
    buttonLink: "https://amzn.to/3wxgzg7",
    hoverBackground: "hover:dark:bg-gray-900 hover:bg-neutral-50",
    background: "d:bg-gray-900/10 bg-gray-200/10",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "GridItems.gridItem_6.title",
    icon: "amazon",
    promotion: "",
    oldPrice: "$200,00",
    price: "$142,00",
    buttonLink: "https://amzn.to/3yf9dhR",
    hoverBackground: "hover:dark:bg-gray-900 hover:bg-neutral-50",
    background: "d:bg-gray-900/10 bg-gray-200/10",
  },
  {
    layout: "2x1",
    type: "project",
    title: "GridItems.gridItem_7.title",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/edson-araujo/website-edsonaraujo",
    stars: 2,
    hoverBackground: "hover:dark:bg-gray-900 hover:bg-neutral-50",
    background: "d:bg-gray-900/10 bg-gray-200/10",
  },
  {
    layout: "2x2",
    type: "social",
    title: "GridItems.gridItem_8.title",
    username: "Danki Code",
    description: "GridItems.gridItem_8.description",
    icon: "dankiCode",
    buttonTitle: "GridItems.gridItem_8.buttonTitle",
    buttonSecondaryText: "R$28,94",
    buttonLink: "https://go.hotmart.com/O90701923D",
    hoverBackground: "hover:dark:bg-gray-900 hover:bg-neutral-50",
    background: "d:bg-gray-900/10 bg-gray-200/10",
  },
];

export const siteConfig = {
  creator: "Edson Araújo",
  title: "Desenvolvedor & Criador de conteúdo",
  bio: "bio",
  location: "Santos, SP - Brasil",
  locationLink: "https://maps.app.goo.gl/pCMcxCaxhi8XjGaH7",
  email: "batuhanbilginn@gmail.com",
  items: GridItems,
} as const;
