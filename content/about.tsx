// @ts-ignore
import me from "../public/images/about/me.jpeg";
import swiminnigPool from "../public/images/about/swiminnig-pool.jpg";
import bar from "../public/images/about/bar.jpg";
import casamento from "../public/images/about/casamento.jpg";

export const ABOUT = {
  stats: [
    {
      statistic: `${
        new Date(Date.now() - new Date("2002-02-28T01:30:00").getTime()).getFullYear() - 1970
      }`,
      tooltip: `${Math.round(
        (Date.now() - new Date("2002-02-28T01:30:00").getTime()) / 1000
      )} seconds`,
      caption: "Anos",
    },
    {
      statistic: "3+",
      tooltip: "Primeira linha de código em 2020",
      caption: "Experiência",
    },
    {
      statistic: "1000",
      tooltip: "30 GitHub Stars",
      caption: "Commits",
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
      alt: "Foto para as redes socias",
    },
    {
      src: swiminnigPool,
      alt: "Dia de piscina",
    },
    {
      src: bar,
      alt: "Apreciando um bom restaurante",
    },
    {
      src: casamento,
      alt: "Casando os amigos",
    }
  ],
};
