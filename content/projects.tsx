import { TECH } from "content/tech-stack";
import ImageSimulation from "../public/images/projects/imagemSimulacao.jpg";
import HelpDesk from "../public/images/projects/helpdesk.png";
import GameSecretNumber from "../public/images/projects/jogo-numero-secreto.png";
import BikeCraft from "../public/images/projects/bikecraft.png";
import RhSystem from "../public/images/projects/RHSystem.png";
import SitePortfolio from "../public/images/projects/siteportfolio.png";
import CrudJava from "../public/images/projects/crudJava.png";
import managementSystem from "../public/images/projects/managementSystem.png";

export const PROJECTS = [
  {
    name: "Projects.managementSystem.name",
    type: ["type.aws", "type.Spring", "type.Java", "type.mysql", "type.react", "type.tailwind"],
    tech: [TECH.aws, TECH.springboot, TECH.java, TECH.sql, TECH.react, TECH.shadcn, TECH.javascript],
    description:"Projects.managementSystem.description",
    featuredImage: managementSystem,
    year: "2024",
    url: "http://systemmanagementedson.s3-website.us-east-2.amazonaws.com",
    repository: "https://github.com/edson-araujo/systemManagement-frontend",
  },
  {
    name: "Projects.SitePortfolio.name",
    type: ["type.tailwind", "type.typescript", "type.next", "type.react"],
    tech: [TECH.typescript, TECH.nextjs, TECH.tailwindcss, TECH.react, TECH.i18next],
    description:"Projects.SitePortfolio.description",
    featuredImage: SitePortfolio,
    year: "2024",
    url: "https://www.edsonaraujo.tech",
    repository: "https://github.com/edson-araujo/website-edsonaraujo",
  },
  {
    name: "Projects.RhSystem.name",
    type: ["type.Java", "type.Spring","type.bootstrap", "type.mysql"],
    tech: [TECH.java, TECH.springboot, TECH.javascript, TECH.bootstrap, TECH.mysql],
    year: "2022",
    repository: "https://github.com/edson-araujo/sistemaRH",
    description:"Projects.RhSystem.description",
    featuredImage: RhSystem,
  },
  {
    name: "Projects.HelpDesk.name",
    type: ["type.Java", "type.Spring", "type.typescript", "type.mysql"],
    tech: [TECH.java, TECH.springboot, TECH.vercel, TECH.typescript],
    year: "2022",
    repository: "https://github.com/edson-araujo/HelpDesk-backend",
    url: "https://help-desk-front-end.vercel.app/login",
    description:"Projects.HelpDesk.description",
    featuredImage: HelpDesk,
  },
  {
    name: "Projects.CrudJava.name",
    type: ["type.Java", "type.javascript", "type.mysql"],
    tech: [TECH.java, TECH.mysql, TECH.javascript],
    year: "2022",
    repository: "https://github.com/edson-araujo/CRUD-Exames",
    description:"Projects.CrudJava.description",
    featuredImage: CrudJava,
  },
  {
    name: "Projects.GameSecretNumber.name",
    type: ["type.javascript"],
    tech: [TECH.javascript, TECH.css_3, TECH.html_5],
    year: "2021",
    url: "https://jogo-numero-secreto-blue-nine.vercel.app/",
    repository: "https://github.com/edson-araujo/jogo-numero-secreto",
    description:"Projects.GameSecretNumber.description",
    featuredImage: GameSecretNumber,
  },
  {
    name: "Projects.BikeCraft.name",
    type: ["type.javascript"],
    tech: [TECH.javascript, TECH.css_3, TECH.html_5],
    repository: "https://github.com/edson-araujo/projeto-bikcraft-master",
    year: "2020",
    description:"Projects.BikeCraft.description",
    featuredImage: BikeCraft,
  }
];
