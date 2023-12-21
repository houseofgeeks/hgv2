import iiitrLogo from "../../public/iiitr_logo.svg";
import slackLogo from "../../public/slack_logo.svg";
import discordLogo from "../../public/discord_logo.svg";
import { HiOutlineHome } from "react-icons/hi2";
import { PiBooks } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";

const navItems = [
  {
    name: "Home",
    value: "",
    link: "/",
    Icon: HiOutlineHome,
  },
  {
    name: "Resources",
    value: "resources",
    link: "/resources",
    Icon: PiBooks,
  },
  {
    name: "Projects",
    value: "projects",
    link: "/projects",
    Icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "About",
    value: "about",
    link: "/about",
    Icon: BiMessageSquareDetail,
  },
];

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

const WingData = [
  {
    id: "1",
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: "2",
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: "3",
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: "4",
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: "5",
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: "6",
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
];

const feeds = [
  {
    id: 1,
    feedDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. ",
    upVotes: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    feedDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
    upVotes: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    feedDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
    upVotes: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    feedDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
    upVotes: [1, 2, 3, 4, 5],
  },
];

const details = [
  {
    id: 1,
    announcementDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem",
  },
  {
    id: 2,
    announcementDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
  {
    id: 3,
    announcementDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem",
  },
  {
    id: 4,
    announcementDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
  {
    id: 5,
    announcementDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
  {
    id: 6,
    announcementDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
];

const ProjectsData = [
  {
    id: 1,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 3,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 4,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 5,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 6,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
];

export {
  footer,
  footerButtons,
  navItems,
  WingData,
  details,
  feeds,
  ProjectsData,
};
