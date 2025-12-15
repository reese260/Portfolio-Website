import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faTwitter,
    url: "https://x.com/Greese26",
  },
  {
    icon: faGithub,
    url: "https://github.com/reesephillips",
  },
  {
    icon: faEnvelope,
    url: "mailto: Cryptogrease8@gmail.com",
  },
];

const Header = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="rgba(10, 14, 26, 0.95)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(0, 255, 136, 0.1)"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={10}>
              {socials.map((social, index) => (
                <a key={index} href={social.url} target='_blank'>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="#audits"
                onClick={handleClick("audits")}
                style={{ color: '#00ff88' }}
              >
                Audits
              </a>
              <a
                href="#projects"
                onClick={handleClick("projects")}
              >
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
