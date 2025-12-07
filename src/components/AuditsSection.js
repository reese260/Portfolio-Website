import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Badge
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faTrophy, faBug, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const audits = [
  {
    date: "May 2025",
    platform: "Sherlock",
    protocol: "ZKP2P V2",
    details: "H-1",
    payout: "2170 OP",
    rank: "4/75",
    link: null,
    isPrivate: true
  },
  {
    date: "Feb 2025",
    platform: "CodeHawks",
    protocol: "Zaros Part 2",
    details: "H-2, L-1",
    payout: "$557.46",
    rank: "24/85",
    link: "https://codehawks.cyfrin.io/c/2025-01-zaros-part-2"
  },
  {
    date: "Feb 2025",
    platform: "CodeHawks",
    protocol: "RAAC Core",
    details: "H-4, M-4",
    payout: "$179.94",
    rank: "-",
    link: "https://codehawks.cyfrin.io/c/2025-02-raac"
  },
  {
    date: "Jan 2025",
    platform: "CodeHawks",
    protocol: "Ignite",
    details: "L-1",
    payout: "$340.21",
    rank: "23/94",
    link: "https://codehawks.cyfrin.io/c/2025-01-benqi"
  },
  {
    date: "Nov 2024",
    platform: "Sherlock",
    protocol: "Debita Finance V3",
    details: "H-1, M-1",
    payout: "$76.84",
    rank: "34/56",
    link: "https://audits.sherlock.xyz/contests/627?filter=results"
  },
  {
    date: "Oct 2024",
    platform: "CodeHawks",
    protocol: "Dria",
    details: "H-1, M-2",
    payout: "$11.92",
    rank: "64/127",
    link: "https://codehawks.cyfrin.io/c/2024-10-swan-dria"
  },
  {
    date: "Oct 2024",
    platform: "Sherlock",
    protocol: "Axion",
    details: "H-1",
    payout: "$323.43",
    rank: "8th",
    link: "https://audits.sherlock.xyz/contests/552?filter=results"
  },
  {
    date: "Oct 2024",
    platform: "CodeHawks",
    protocol: "Starknet Staking",
    details: "M-1",
    payout: "$349.42",
    rank: "34th",
    link: "https://codehawks.cyfrin.io/c/2024-09-starknet-staking/"
  }
];

const calculateStats = () => {
  const highs = audits.reduce((acc, audit) => {
    const highMatch = audit.details.match(/H-(\d+)/);
    return acc + (highMatch ? parseInt(highMatch[1]) : 0);
  }, 0);

  const mediums = audits.reduce((acc, audit) => {
    const medMatch = audit.details.match(/M-(\d+)/);
    return acc + (medMatch ? parseInt(medMatch[1]) : 0);
  }, 0);

  const lows = audits.reduce((acc, audit) => {
    const lowMatch = audit.details.match(/L-(\d+)/);
    return acc + (lowMatch ? parseInt(lowMatch[1]) : 0);
  }, 0);

  return { highs, mediums, lows, contests: audits.length };
};

const StatCard = ({ icon, title, value, gradient }) => (
  <Box
    bg="rgba(0, 255, 136, 0.05)"
    borderRadius="xl"
    p={6}
    borderWidth="1px"
    borderColor="rgba(0, 255, 136, 0.2)"
    _hover={{
      borderColor: "rgba(0, 255, 136, 0.5)",
      transform: "translateY(-4px)",
      boxShadow: "0 8px 20px rgba(0, 255, 136, 0.15)"
    }}
    transition="all 0.3s"
  >
    <VStack spacing={3}>
      <Box color="#00ff88" fontSize="3xl">
        <FontAwesomeIcon icon={icon} />
      </Box>
      <Text fontSize="sm" color="gray.400" textTransform="uppercase" letterSpacing="wider">
        {title}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" bgGradient={gradient} bgClip="text">
        {value}
      </Text>
    </VStack>
  </Box>
);

const AuditsSection = () => {
  const stats = calculateStats();

  return (
    <FullScreenSection
      backgroundColor="#0a0e1a"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <VStack spacing={8} w="100%" align="flex-start">
        <Box>
          <Heading as="h1" id="audits-section" mb={2}>
            Security Audit Portfolio
          </Heading>
          <Text color="gray.400" fontSize="lg">
            Competitive audit findings across leading platforms
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="100%">
          <StatCard
            icon={faBug}
            title="Total Findings"
            value={stats.highs + stats.mediums + stats.lows}
            gradient="linear(to-r, #00ff88, #00ccff)"
          />
          <StatCard
            icon={faShieldHalved}
            title="High Severity"
            value={stats.highs}
            gradient="linear(to-r, #ff0080, #ff8c00)"
          />
          <StatCard
            icon={faTrophy}
            title="Contests"
            value={stats.contests}
            gradient="linear(to-r, #00ccff, #0080ff)"
          />
          <StatCard
            icon={faDollarSign}
            title="Mediums + Lows"
            value={`${stats.mediums} + ${stats.lows}`}
            gradient="linear(to-r, #00ff88, #00ccff)"
          />
        </SimpleGrid>

        <Box
          w="100%"
          bg="rgba(0, 255, 136, 0.03)"
          borderRadius="xl"
          borderWidth="1px"
          borderColor="rgba(0, 255, 136, 0.2)"
          overflow="hidden"
        >
          <Table variant="simple" colorScheme="whiteAlpha">
            <Thead bg="rgba(0, 255, 136, 0.1)">
              <Tr>
                <Th color="gray.300">Date</Th>
                <Th color="gray.300">Platform</Th>
                <Th color="gray.300">Protocol</Th>
                <Th color="gray.300">Findings</Th>
                <Th color="gray.300">Payout</Th>
                <Th color="gray.300">Rank</Th>
              </Tr>
            </Thead>
            <Tbody>
              {audits.map((audit, index) => (
                <Tr
                  key={index}
                  _hover={{ bg: "rgba(0, 255, 136, 0.05)" }}
                  transition="background 0.2s"
                >
                  <Td color="gray.300">{audit.date}</Td>
                  <Td>
                    <Badge
                      colorScheme={audit.platform === "Sherlock" ? "purple" : "cyan"}
                      fontSize="sm"
                    >
                      {audit.platform}
                    </Badge>
                  </Td>
                  <Td>
                    {audit.link ? (
                      <Link href={audit.link} isExternal color="#00ccff" _hover={{ color: "#00ff88" }}>
                        {audit.protocol}
                      </Link>
                    ) : (
                      <HStack>
                        <Text color="gray.300">{audit.protocol}</Text>
                        {audit.isPrivate && (
                          <Badge colorScheme="orange" fontSize="xs">Private</Badge>
                        )}
                      </HStack>
                    )}
                  </Td>
                  <Td>
                    <HStack spacing={2}>
                      {audit.details.split(', ').map((detail, i) => {
                        const severity = detail.split('-')[0];
                        let colorScheme = "gray";
                        if (severity === 'H') colorScheme = "red";
                        else if (severity === 'M') colorScheme = "orange";
                        else if (severity === 'L') colorScheme = "yellow";

                        return (
                          <Badge key={i} colorScheme={colorScheme} fontSize="xs">
                            {detail}
                          </Badge>
                        );
                      })}
                    </HStack>
                  </Td>
                  <Td color="#00ff88" fontWeight="semibold">{audit.payout}</Td>
                  <Td color="gray.400">{audit.rank}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <HStack spacing={4} pt={4}>
          <Link
            href="https://profiles.cyfrin.io/u/greese"
            isExternal
            color="#00ccff"
            _hover={{ color: "#00ff88" }}
            fontSize="lg"
          >
            CodeHawks Profile →
          </Link>
          <Link
            href="https://audits.sherlock.xyz/watson/Greese"
            isExternal
            color="#00ccff"
            _hover={{ color: "#00ff88" }}
            fontSize="lg"
          >
            Sherlock Profile →
          </Link>
        </HStack>
      </VStack>
    </FullScreenSection>
  );
};

export default AuditsSection;
