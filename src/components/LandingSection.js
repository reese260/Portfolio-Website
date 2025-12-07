
import React from "react";
import { Avatar, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Reese!";
const bio1 = "Smart Contract Security Researcher & Full-Stack Developer";
const bio2 = "I specialize in finding critical vulnerabilities in DeFi protocols and blockchain applications. With multiple high-severity findings across platforms like CodeHawks and Sherlock, I help secure millions of dollars in protocols. I also build decentralized applications and full-stack solutions, combining security expertise with development skills.";

const imageSrc = {
  getImageSrc: () => require("../images/citizen.jpg")
}

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#0a0e1a"
  >
    <Flex alignItems="center" justifyContent="center">
      <VStack spacing={5} maxW="800px" textAlign="center">
        <Avatar src={imageSrc.getImageSrc()} size='2xl' />
        <Heading as="h6" size="lg" paddingTop='20px'>
          {greeting}
        </Heading>
        <Text fontSize='2xl' fontWeight="bold" bgGradient="linear(to-r, #00ff88, #00ccff)" bgClip="text">
          {bio1}
        </Text>
        <Text fontSize='lg'>{bio2}</Text>
      </VStack>
    </Flex>
  </FullScreenSection>
);

export default LandingSection;