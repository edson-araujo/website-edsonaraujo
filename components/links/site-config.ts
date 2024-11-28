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
    description: "GridItems.gridItem_9.description",
    title: "GridItems.gridItem_9.title",
    icon: "spotify",
    link: "open.spotify.com",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/7/78/J%C3%A3o_-_Supernova.png",
    buttonTitle: "tituloSpotfy",
    buttonSecondaryText: "3",
    buttonLink: "https://open.spotify.com/intl-pt/track/7bkmDZgSLDLhmYjIb8hu0I?si=900d77947f9b4968",
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
  location: "São Paulo - Brasil",
  locationLink: "https://maps.app.goo.gl/pCMcxCaxhi8XjGaH7",
  email: "batuhanbilginn@gmail.com",
  items: GridItems,
} as const;
