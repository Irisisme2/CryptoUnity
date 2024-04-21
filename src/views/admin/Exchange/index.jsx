import { Box, Button, Flex, Grid, Heading, Link, SimpleGrid, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Asset from "./Asset"; // Komponent reprezentujący pojedyncze aktywo

const Dashboard = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  // Przykładowe dane aktywów
  const assets = [
    { id: 1, name: "Bitcoin", symbol: "BTC", price: "$50,000", change: "+5%" },
    { id: 2, name: "Ethereum", symbol: "ETH", price: "$2,500", change: "+3%" },
    { id: 3, name: "Litecoin", symbol: "LTC", price: "$300", change: "-2%" },
    // Dodaj więcej aktywów według potrzeb
  ];

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Flex
            mt="45px"
            mb="20px"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            align={{ base: "start", md: "center" }}
          >
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
              Trending Assets
            </Text>
            <Flex
              align="center"
              me="20px"
              ms={{ base: "24px", md: "0px" }}
              mt={{ base: "20px", md: "0px" }}
            >
              <Link
                color={textColorBrand}
                fontWeight="500"
                me={{ base: "34px", md: "44px" }}
                to="#crypto"
              >
                Crypto
              </Link>
              <Link
                color={textColorBrand}
                fontWeight="500"
                me={{ base: "34px", md: "44px" }}
                to="#stocks"
              >
                Stocks
              </Link>
              <Link
                color={textColorBrand}
                fontWeight="500"
                me={{ base: "34px", md: "44px" }}
                to="#commodities"
              >
                Commodities
              </Link>
              <Link color={textColorBrand} fontWeight="500" to="#forex">
                Forex
              </Link>
            </Flex>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
            {assets.map((asset) => (
              <Asset
                key={asset.id}
                name={asset.name}
                symbol={asset.symbol}
                price={asset.price}
                change={asset.change}
              />
            ))}
          </SimpleGrid>
          {/* Recently Added */}
          <Text
            mt="45px"
            mb="36px"
            color={textColor}
            fontSize="2xl"
            ms="24px"
            fontWeight="700"
          >
            Recently Added
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap="20px"
            mb={{ base: "20px", xl: "0px" }}
          >
            {/* Placeholder for recently added assets */}
          </SimpleGrid>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
};

export default Dashboard;
