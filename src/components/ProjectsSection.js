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
    title: "AI Model Marketplace",
    description:
      "A decentralized blockchain platform that connects three key parties in the AI ecosystem: data providers, model requesters, and compute providers with GPU resources.",
    getImageSrc: () => require("../images/AIModel.png"),
    liveLink: "",
    sourceLink: 'https://github.com/reese260/AI-Model-Marketplace',
    tags: ["Solidity", "ZK Proofs", "Next.js"]
  },
  {
    title: "Polymarket and Kalshi Arbitrage Bot",
    description:
      "A Discord bot that monitors prediction markets on Polymarket and Kalshi, identifies arbitrage opportunities, and sends alerts to your Discord channel.",
    getImageSrc: () => require("../images/ArbBot.png"),
    liveLink: "",
    sourceLink: 'https://github.com/reese260/Poly-Kalshi-Arb',
    tags: ["Python"]
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
