import { FaInstagram } from "react-icons/fa";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { TbBrandInstagram } from "react-icons/tb";

export const SOCIAL_ACCOUNTS = {
  github: {
    name: "GitHub",
    href: "https://github.com/edson-araujo",
    Icon: ({ className = "" }) => <SiGithub className={className} />,
  },

  twitter: {
    name: "Twitter",
    href: "https://twitter.com/eu_edsonaraujo",
    Icon: ({ className = "" }) => <SiTwitter className={className} />,
  },
  linkedin: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/edson-alves-araujo/",
    Icon: ({ className = "" }) => <SiLinkedin className={className} />,
  },
  instagram: {
    name: "Instagram",
    href: "https://www.instagram.com/eu_edsonaraujo/",
    Icon: ({ className = "" }) => <SiInstagram className={className} />,
  }
};
