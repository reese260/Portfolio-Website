import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Ether Wager Hub",
    description:
      "Decentralized betting platform built on Ethereum blockchain using Solidity smart contracts. Features automated bet placement, winner selection, and secure fund management.",
    getImageSrc: () => require("../images/bets.jpg"),
    liveLink: 'https://etherwagerhub.com',
    sourceLink: 'https://github.com/reesephillips/Ether-Wager-App',
    tags: ["Solidity", "Web3", "React"]
  },
  {
    title: "On-Chain SVG NFTs",
    description:
      "Fully on-chain generative NFT collection deployed on Ethereum. SVG data and metadata stored directly on blockchain, no IPFS required.",
    getImageSrc: () => require("../images/funnynft.jpg"),
    liveLink: "https://funny-name-nft.vercel.app/",
    sourceLink: 'https://github.com/reesephillips/nft-name-generator',
    tags: ["Solidity", "NFTs", "SVG"]
  },
  {
    title: "Student Management System",
    description:
      "Full-stack CRUD application with Java Spring Boot backend and MySQL database. Features RESTful API architecture and responsive UI.",
    getImageSrc: () => require("../images/ems.jpg"),
    liveLink: "",
    sourceLink: 'https://github.com/reesephillips/Employee-Management-System',
    tags: ["Java", "Spring Boot", "MySQL"]
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1a1f35"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Box>
        <Heading as="h1" id="projects-section" mb={2}>
          Development Projects
        </Heading>
        <Box color="gray.400" fontSize="lg">
          Smart contract development and full-stack applications
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(350px,1fr))"
        gridGap={8}
        w="100%"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            liveLink={project.liveLink}
            sourceLink={project.sourceLink}
            tags={project.tags}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
