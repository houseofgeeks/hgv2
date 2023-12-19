import iiitrLogo from "../../public/iiitr_logo.svg";
import slackLogo from "../../public/slack_logo.svg";
import discordLogo from "../../public/discord_logo.svg";

const footer = [
  {
    title: "Navigation",
    links: [
      {
        name: "Home",
        link: "/home",
      },
      {
        name: "Resources",
        link: "/resources",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "Blogs",
        link: "/blogs",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com",
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com",
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com",
      },
    ],
  },
];

const footerButtons = [
  {
    name: "IIIT Ranchi Official Website",
    logo: iiitrLogo,
    bg: "bt1",
    link: "https://www.google.com",
  },
  {
    name: "Join our Slack Community",
    logo: slackLogo,
    bg: "bt2",
    link: "https://www.google.com",
  },
  {
    name: "Join our Discord Server",
    logo: discordLogo,
    bg: "bt3",
    link: "https://www.google.com",
  },
];

export {footer, footerButtons};