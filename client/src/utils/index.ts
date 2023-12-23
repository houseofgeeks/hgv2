import iiitrLogo from "../../public/iiitr_logo.svg";
import slackLogo from "../../public/slack_logo.svg";
import discordLogo from "../../public/discord_logo.svg";
import { HiOutlineHome } from "react-icons/hi2";
import { PiBooks } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import banner1 from "@/../public/profile/projectbanner1.svg";
import banner2 from "@/../public/profile/projectbanner2.svg";
import b1 from "@/../public/profile/blogBanner1.svg";
import b2 from "@/../public/profile/blogBanner2.svg";
import b3 from "@/../public/profile/blogBanner3.svg";

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

const ratingData = [
  {
    name: "Leetcode",
    rating: 1740,
    problemSolved: 350,
    contest: 12,
  },
  {
    name: "Codeforces",
    rating: 1220,
    problemSolved: 144,
    contest: 36,
  },
  {
    name: "Github",
    rating: 1740,
    problemSolved: 350,
    contest: 12,
  },
];

const projectData = [
  {
    img: banner1,
    title: "Gifty | UI/UX Case Study",
    tags: ["Figma", "Miro", "Invision"],
    description:
      "This project is a part of my assignment for the Designwings Bootcamp. Where we’re asked to pick any problem statement and design the solution for the product.",
  },
  {
    img: banner2,
    title: "Dojo | Language Learning App for Kids",
    tags: ["Figma", "G-suite"],
    description:
      "Dojo is a learning platform that aims to gamify the learning experience for kids. The app engages kids in various different games, short animation videos, in listening to some amazing stories and in talking with their friends.",
  },
];

const blogData = [
  {
    img: b1,
    title: "Figma Basic Tools Guide for 2023",
    description:
      "In this blog, I'd cover some basic tools of figma to get started with UI Designer",
  },
  {
    img: b2,
    title: "Learn Adobe Xd in 2023 for absolute beginerrs",
    description:
      "In this blog, I'd cover some basic tools of figma to get started with UI Designer",
  },
  {
    img: b3,
    title: "Adobe illustrator Hidden Features",
    description:
      "In this blog, I'd cover some basic tools of figma to get started with UI Designer",
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
  ratingData,
  projectData, 
  blogData
};
