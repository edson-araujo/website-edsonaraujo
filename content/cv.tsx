import { TECH } from "./tech-stack";
import { Link } from "components/link";

export const CV = {
  name: "cv.name",
  title: "cv.title",
  primary_stack: [TECH.typescript, TECH.react, TECH.java, TECH.tailwindcss, TECH.springboot],
  address: "cv.address",
  email: "cv.email",
  website: "",
  mobile: {
    href: `tel:+551398847-3945`,
    number: "cv.mobile",
  },
  intro: 'cv.intro',
  education: [
    {
      dateFrom: "2017-02-01",
      dateTo: "2019-01-12",
      city: "cv.education_1.city",
      country: "cv.education_1.country",
      institution: "cv.education_1.institution",
      certificate: "cv.education_1.certificate",
      level: "cv.education_1.level",
      type: ["sections.adm", "sections.relevant", "sections.all"],
    },
    {
      dateFrom: "2018-06-01",
      dateTo: "2019-12-01",
      city: "cv.education_2.city",
      country: "cv.education_2.country",
      institution: "cv.education_2.institution",
      certificate: "cv.education_2.certificate",
      level: "cv.education_2.level",
      type: ["sections.adm", "sections.all"],
    },
    {
      dateFrom: "01-06-2022",
      dateTo: "01-06-2026",
      city: "cv.education_3.city",
      country: "cv.education_3.country",
      institution: "cv.education_3.institution",
      certificate: "cv.education_3.certificate",
      level: "cv.education_3.level",
      type: ["sections.relevant", "sections.techDev", "sections.all"],
    },
  ],
  experience: [
    {
      dateFrom: "01-02-2018",
      dateTo: "01-5-2021",
      city: "cv.experience_1.city",
      country: "cv.experience_1.country",
      company: "cv.experience_1.company",
      title: "cv.experience_1.title",
      type: ["sections.adm", "sections.all"],
      responsibilities: [
        {
          content: "cv.experience_1.responsibility_1",
          type: ["sections.adm", "sections.all"],
        },
        {
          content: "cv.experience_1.responsibility_2",
          type: ["sections.adm", "sections.all"],
        },
        {
          content: "cv.experience_1.responsibility_3",
          type: ["sections.adm", "sections.all"],
        },
        {
          content: "cv.experience_1.responsibility_4",
          type: ["sections.adm", "sections.all"],
        },
      ],
    },
    {
      dateFrom: "06-01-2021",
      dateTo: "05-01-2022",
      city: "cv.experience_2.city",
      country: "cv.experience_2.country",
      company: "cv.experience_2.company",
      title: "cv.experience_2.title",
      type: [
        "sections.adm",
        "sections.techDev",
        "sections.relevant",
        "sections.techDev",
        "sections.all"],
      responsibilities: [
        {
          content: "cv.experience_2.responsibility_1",
          type: ["sections.adm", "sections.relevant", "sections.techDev"],
        },
        {
          content: "cv.experience_2.responsibility_2",
          type: ["sections.adm", "sections.all"],
        },
        {
          content: "cv.experience_2.responsibility_3",
          type: ["sections.adm", "sections.relevant", "sections.techDev", "sections.all"],
        },
        {
          content: "cv.experience_2.responsibility_4",
          type: ["sections.adm", "sections.all"],
        },
      ],
    },
    {
      dateFrom: "06-01-2022",
      dateTo: "",
      city: "cv.experience_3.city",
      country: "cv.experience_3.country",
      company: "cv.experience_3.company",
      title: "cv.experience_3.title",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
      responsibilities: [
        {
          content: "cv.experience_3.responsibility_1",
          type: ["sections.techDev", "sections.relevant", "sections.all"],
        },
        {
          content: "cv.experience_3.responsibility_2",
          type: ["sections.relevant", "sections.techDev", "sections.all"],
        },
        {
          content: "cv.experience_3.responsibility_3",
          type: ["sections.techDev", "sections.relevant", "sections.all"],
        },
        {
          content: "cv.experience_3.responsibility_4",
          type: ["sections.techDev", "sections.relevant", "sections.all"],
        }
      ],
    },
  ],
  capabilities: {
    languages: [
      {
        name: "cv.capabilities_languages_1",
        Icon: null,
      },
      {
        name: "cv.capabilities_languages_2",
        Icon: null,
      },
      {
        name: "cv.capabilities_languages_3",
        Icon: null,
      },
    ],
    programmingLanguages: [
      TECH.java,
      TECH.javascript,
      TECH.typescript,
      TECH.html_5,
      TECH.css_3,
      TECH.sass,
      TECH.sql,
      TECH.php,
      TECH.markdown,
    ],
    librariesFrameworks: [
      TECH.react,
      TECH.springboot,
      TECH.junit,
      TECH.laravel,
      TECH.tailwindcss,
      TECH.nextjs,
      TECH.jest,
      TECH.nodejs,
      TECH.mockito
    ],
    serviceProviders: [
      TECH.vercel,
      TECH.aws,
      TECH.github,
    ],
    marketing: [TECH.vercel, TECH.aws, TECH.github],
    dataProviders: [TECH.wordpress],
    tools: [
      TECH.intellij_idea,
      TECH.eclipse,
      TECH.git,
      TECH.npm,
      TECH.illustrator,
      TECH.photoshop,
      TECH.figma,
      TECH.postman,
      TECH.ftp,
      TECH.dev_tools,
    ],
  },
  certifications: [
    {
      date: "2023",
      name: "Alura - Certificação Java",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2023",
      name: "Alura - Desenvolva aplicações Web com JavaScript",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2023",
      name: "Alura - SQL com MySQL: manipule e consulte dados",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2024",
      name: "Digital Innovation One Inc - Aceleração Avanade Spring Boot",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2024",
      name: "Digital Innovation One Inc - Java AI Powered",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2022",
      name: "Origamid - JavaScript Completo ES6+",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2022",
      name: "Origamid - React Completo",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2024",
      name: "Digital Innovation One Inc - Formação TypeScript Full stack Developer",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2021",
      name: "Origamid - CSS com SASS",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
    {
      date: "2021",
      name: "Origamid - UI Design Avançado",
      type: ["sections.techDev", "sections.relevant", "sections.all"],
    },
  ],
  other: [
    {
      name: "Cape Wine Academy - Wine Certificate",
    },
    {
      name: "First Aid Course - Level one",
    },
    {
      name: "ICDL - International Computer Drivers License",
    },
    {
      name: "Cardio Pulmonary Resuscitation Certificate",
    },
    {
      name: "Crowd Management & Passenger Service Safety Certificate",
    },
    {
      name: "Artful Food Competition - 1st price",
    },
  ],
  references: [
    {
      author: "cv.references_1.author",
      title: "cv.references_1.title",
      company: "cv.references_1.company",
      reference: "cv.references_1.reference",
    },
    {
      author: "cv.references_2.author",
      title: "cv.references_2.title",
      company: "cv.references_2.company",
      reference: "cv.references_2.reference",
    },
  ],
  personal: "cv.intro",
};
