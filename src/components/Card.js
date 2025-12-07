import { Heading, HStack, Image, Text, VStack, Badge, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, liveLink, sourceLink, tags }) => {
  return (
    <VStack
      color="white"
      backgroundColor="rgba(0, 255, 136, 0.03)"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="rgba(0, 255, 136, 0.2)"
      overflow="hidden"
      _hover={{
        borderColor: "rgba(0, 255, 136, 0.5)",
        transform: "translateY(-8px)",
        boxShadow: "0 12px 30px rgba(0, 255, 136, 0.2)"
      }}
      transition="all 0.3s"
      h="100%"
    >
      <Box position="relative" w="100%" overflow="hidden">
        <Image
          src={imageSrc}
          alt={title}
          height='250px'
          width='100%'
          objectFit="cover"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
        />
      </Box>
      <VStack spacing={4} p={6} alignItems="flex-start" flex="1" w="100%">
        <Heading as="h3" size="md" color='white'>
          {title}
        </Heading>

        {tags && (
          <HStack spacing={2} flexWrap="wrap">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                colorScheme="cyan"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="md"
              >
                {tag}
              </Badge>
            ))}
          </HStack>
        )}

        <Text color="gray.300" fontSize="md" flex="1">
          {description}
        </Text>

        <HStack spacing={4} pt={2} w="100%">
          {liveLink && (
            <a
              href={liveLink}
              target='_blank'
              rel='noopener noreferrer'
              style={{
                color: '#00ccff',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} size="sm"/>
              Live Demo
            </a>
          )}
          <a
            href={sourceLink}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: '#00ff88',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <FontAwesomeIcon icon={faCode} size="sm"/>
            Source Code
          </a>
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
