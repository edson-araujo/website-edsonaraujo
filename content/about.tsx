// @ts-ignore
import me from "../public/images/about/me.jpeg";
import bar from "../public/images/about/bar.jpg";
import wedding from "../public/images/about/casamento.jpg";
import smile from "../public/images/about/euSorrindo.jpg";
import festaJunina from "../public/images/about/festaJunina.jpg";

export const ABOUT = {
  stats: [
    {
      statistic: `${
        new Date(Date.now() - new Date("2002-02-28T01:30:00").getTime()).getFullYear() - 1970
      }`,
      tooltip: "",
      caption: "year",
    },
    {
      statistic: "3+",
      tooltip: "experienceTooltip",
      caption: "experience",
    },
    {
      statistic: "1000",
      tooltip: "commitsTooltip",
      caption: "commits",
    },
  ],
  description: (
    <>
      <p>
        Eu sou desenvolvedor Web em Santos, São Paulo - Brasil. Meu foco durante anos foi desenvolvimento Full Stack
        <strong> Java</strong> com Spring e <strong>React </strong>. Mas atualmente atuo em projetos com <strong>Next.js </strong>
        e <strong>TailwindCSS </strong> para criar experiências de usuários unicas.
      </p>
      <p>
      Passei a maior parte da minha vida profundamente interessado em tecnologia e comida, continuamente construindo coisas com ambos. 
      Na adolescência, eu era um típico nerd de computador, passando a maior parte do tempo mexendo com o computador,  
      Modificando jogos e descobrindo coisas. Mexendo com hardware, montando computadores. Desenvolvendo sites com o Wordpress. 
      E é claro, jogando jogos.
      </p>
      <p>A maior parte disso ainda é verdade hoje em dia.</p>
    </>
  ),
  images: [
    {
      src: me,
      alt: "images.me",
    },
    {
      src: festaJunina,
      alt: "images.festaJunina",
    },
    {
      src: bar,
      alt: "images.bar",
    },
    {
      src: wedding,
      alt: "images.wedding",
    },
    {
      src: smile,
      alt: "images.smile",
    }
  ],
};
