import cloud from './cloud.png';
import football from './football.png'
import gifs from './gifs.png'
import hotel from './hotel.png'

export const hero_description="I am a full stack developer with a passion for creating scalable and efficient web applications. With a robust technical stack that includes ReactJS, NodeJS, Spring Boot, MongoDB, and MySQL, I excel in both front-end and back-end development.With a keen eye for detail and a commitment to excellence, I focus on delivering innovative solutions that not only meet but exceed client expectations. My goal is to provide exceptional user experiences through intuitive and responsive design, seamless functionality, and reliable performance. I can tackle complex challenges and deliver high-quality results in every project I undertake.";
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const PROJECTS = [
    {
      title: "Cloud Broker Website",
      image: cloud,
      link: 'https://660c1746a0e0f10008ef5e49--cloud-brooker.netlify.app/landing',
      description:
        "A platform where cloud providers list services, and customers can filter and purchase based on their needs. Features include service filtering, user authentication, and a streamlined user interface.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Fun football Game",
      link: 'https://6606b6c9f55c270008ac2328--1kgoalchallenge.netlify.app/',
      image: football,
      description:
        "A fun, interactive game that tests players' football knowledge with timed questions and score tracking.",
      technologies: ["HTML", "Redux", "React", "Tailwind CSS"],
    },
    {
      title: "Hotel booking Application Website",
      image: hotel,
      link: 'https://65f82d643123f0000867a940--aiaabnb.netlify.app/',
      description:
        "An application for searching, filtering, and booking hotels. Features include real-time availability, room details, and secure payment integration for a seamless booking experience.",
      technologies: ["HTML", "CSS", "React", "Bootstrap", "NodeJs", "MongoDB"],
    },
    {
      title: "Gifify",
      image: gifs,
      link: 'https://669a515a70a3843cc7bb4aa1--unlimitedfun.netlify.app/',
      description:
        "A GIF and sticker browsing app that lets users explore a vast library of GIFs and stickers across categories. Features include quick search, trending collections, and easy sharing options. ",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
  ];