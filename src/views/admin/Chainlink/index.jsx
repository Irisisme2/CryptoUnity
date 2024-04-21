import { Box, Heading, Text, Button, Flex, Center } from "@chakra-ui/react";

const ChainlinkIntegration = () => {
  // Placeholder data for external data fetched from Chainlink Oracle
  const externalData = [
    { cryptocurrency: "Bitcoin", price: "$50,000" },
    { cryptocurrency: "Ethereum", price: "$3,000" },
    { cryptocurrency: "Ripple", price: "$1.50" },
    { cryptocurrency: "Litecoin", price: "$200" },
    { cryptocurrency: "Cardano", price: "$1.20" },
  ];

  return (
    <Box
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      w="90%"
      maxW="800px"
      mx="auto"
      my="8"
    >
      <Heading as="h2" size="xl" mb="6" textAlign="center" color="blue.600">
        Chainlink Integration
      </Heading>
      {externalData.map((data, index) => (
        <Box key={index} mb="4">
          <Text fontSize="2xl" fontWeight="bold">
            {data.cryptocurrency}: {data.price}
          </Text>
        </Box>
      ))}
      <Center mt="8">
        <Button colorScheme="blue" size="lg">
          Refresh Data
        </Button>
      </Center>
    </Box>
  );
};

export default ChainlinkIntegration;
