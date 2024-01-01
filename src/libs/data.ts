import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import blogsImg from '/blogs.webp'
import dashboardImg from '/dashboard.webp'
import marketPlaceImg from '/marketPlace.webp'
import devFinder from '/devfinder.webp'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const

export const projectsData = [
  {
    title: 'React Dashboard',
    description:
      'A dynamic and user-friendly web dashboard with data visualization using charts. It has features like pagination, filter and sorting.',
    tags: ['React', 'React Query', 'Supabase', 'Styled Components', 'Rechart'],
    imageUrl: dashboardImg,
    link: 'https://dashboardify-react.vercel.app/dashboard',
  },
  {
    title: 'House Marketplace',
    description:
      'Seamlessly connect buyers and sellers with this modern web platform. Explore stunning listings powered by Firebase, and a sleek user interface crafted with Tailwind.',
    tags: ['React', 'Firebase', 'Tailwind', 'React Leaflet', 'Geocoding Api'],
    imageUrl: marketPlaceImg,
    link: 'https://house-marketlace.netlify.app',
  },
  {
    title: 'React Blog',
    description:
      'Explore a user-friendly blog built using Redux and TypeScript. This project offers CURD operations and utilized dummy API to provide dynamic content.',
    tags: ['React', 'Redux', 'Typescript', 'Tailwind'],
    imageUrl: blogsImg,
    link: 'https://react-redux-with-typescript.netlify.app',
  },
  {
    title: 'Dev Finder',
    description:
      'This web application leverages the GitHub API to help you explore developers profile, repositories, and contributions, all presented with an intuitive and stylish user interface designed with Tailwind CSS.',
    tags: ['React', 'Github Api', 'Tailwind'],
    imageUrl: devFinder,
    link: 'https://devsfinder.netlify.app',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Tailwind',
  'Redux',
  'Rechart',
  'Firebase',
  'Framer Motion',
  'Prisma',
  'MongoDB',
] as const
