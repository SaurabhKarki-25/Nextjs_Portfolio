import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { ReactNode } from "react";

// 🔹 Contact Details
export interface ContactDetail {
  id: number;
  icon: ReactNode;
  info: string;
  link: string;
}

export const contactDetails: ContactDetail[] = [
  {
    id: 1,
    icon: <IoIosMail />,
    info: "mr.hariprasdjoshi@gmail.com",
    link: "mailto:mr.hariprasdjoshi@gmail.com",
  },
  {
    id: 2,
    icon: <BsFillTelephoneFill />,
    info: "9634090498, 7906519104",
    link: "tel:+9634090498",
  },
  {
    id: 3,
    icon: <IoLocationSharp />,
    info: "Dehradun, India",
    link: "https://goo.gl/maps/pvYsfgd7Kv9RYVut9",
  },
  {
    id: 4,
    icon: <GrLinkedin />,
    info: "linkedin.com/in/harijoshi123",
    link: "https://www.linkedin.com/in/harijoshi123/",
  },
  {
    id: 5,
    icon: <FaGithub />,
    info: "github.com/harijoshi12",
    link: "https://github.com/harijoshi12",
  },
  {
    id: 6,
    icon: <CgWebsite />,
    info: "harijoshi.info",
    link: "https://www.harijoshi.info/",
  },
];

// 🔹 Tech Skills
export interface TechSkill {
  id: number;
  title: string;
  level: number;
}

export const techSkills: TechSkill[] = [
  { id: 1, title: "React", level: 8 },
  { id: 2, title: "React Native", level: 7 },
  { id: 3, title: "Next.js", level: 7 },
  { id: 4, title: "SASS", level: 7 },
  { id: 7, title: "Git & Github", level: 6 },
  { id: 8, title: "Node.js", level: 7 },
  { id: 9, title: "Mongodb", level: 6 },
  { id: 10, title: "Express.js", level: 7 },
  { id: 11, title: "Django", level: 8 },
  { id: 13, title: "DSA", level: 7 },
  { id: 14, title: "Blockchain Development", level: 6 },
  { id: 16, title: "Linux", level: 6 },
  { id: 15, title: "Wordpress Development", level: 6 },
  { id: 23, title: "Figma", level: 5 },
];

// 🔹 Programming Languages
export interface ProgLang {
  id: number;
  title: string;
  level: number;
}

export const progLangs: ProgLang[] = [
  { id: 1, title: "Html/Css", level: 9 },
  { id: 2, title: "JavaScript", level: 9 },
  { id: 3, title: "Python", level: 8 },
  { id: 6, title: "Java", level: 8 },
  { id: 4, title: "SQL", level: 8 },
  { id: 5, title: "C++", level: 7 },
  { id: 10, title: "TypeScript", level: 7 },
  { id: 7, title: "GoLang", level: 6 },
  { id: 8, title: "Solidity", level: 6 },
];

// 🔹 Languages
export interface Language {
  id: number;
  title: string;
  level: string;
}

export const langs: Language[] = [
  { id: 1, title: "Hindi", level: "Native or Bilingual Proficiency" },
  { id: 2, title: "English", level: "Professional Working Proficiency" },
];

// 🔹 Education
export interface Education {
  id: number;
  title: string;
  institute: string;
  time: string;
  place: string;
  cgpa: string;
}

export const education: Education[] = [
  {
    id: 1,
    title: "Mechanical Engineering",
    institute: "Govt. Polytechnic Nainital",
    time: "2012-2015",
    place: "Nainital, Uttarakhand, India",
    cgpa: "67%",
  },
];

// 🔹 Projects
export interface Project {
  id: number;
  title: string;
  tech: string;
  desc: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    tech: "React, Firebase",
    desc: "Lorem ipsum dolor sit, amet consectetur  corrupti officiis eaque.",
  },
  {
    id: 2,
    title: "Resume Maker",
    tech: "React, Firebase",
    desc: "Lorem ipsum dolor sit, amet consectetur  corrupti officiis eaque.",
  },
  {
    id: 4,
    title: "Social Networking Website",
    tech: "MERN stack",
    desc: "Lorem ipsum dolor sit, amet consectetur  corrupti officiis eaque.",
  },
  {
    id: 5,
    title: "Blockchain Project",
    tech: "Etherium, Solidity",
    desc: "Lorem ipsum dolor sit, amet consectetur  corrupti officiis eaque.",
  },
];

// 🔹 Journey
export interface Journey {
  id: number;
  time: string;
  jobTitle: string;
  companyName: string;
  desc: string;
}

export const myJourneyData: Journey[] = [
  {
    id: 3,
    time: "2020-present",
    jobTitle: "Self-Taught Developer",
    companyName: "Freelancer",
    desc: "i learned coding from 0 to intermediate & advance level by watching tutorials, reading books & taking some paid courses",
  },
  {
    id: 2,
    time: "2017-2020",
    jobTitle: "Teacher",
    companyName: "Hari Coaching Classes",
    desc: "Opened my own coaching institute where i taught Physics & Maths to B.Sc. students",
  },
  {
    id: 1,
    time: "2016-2017",
    jobTitle: "Mechanical Engineer",
    companyName: "keihnfie",
    desc: "worked as CNC programer & operator",
  },
];

// 🔹 Interests
export interface Interest {
  id: number;
  title: string;
}

export const interests: Interest[] = [
  { id: 2, title: "Solving Puzzles" },
  { id: 5, title: "Listning Audio Books" },
  { id: 3, title: "Reading Science & Technology related Articles" },
  { id: 4, title: "Watching Ted Talks & Documentries" },
  { id: 6, title: "Exercising" },
  { id: 7, title: "Learning New Skills" },
];