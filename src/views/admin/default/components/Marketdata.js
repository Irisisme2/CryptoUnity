// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import { IoArrowUpCircleSharp, IoArrowDownCircleSharp } from "react-icons/io5";
// Assets
import { marketData } from "variables/marketData";

export default function MarketNews(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");

  return (
    <Card justifyContent="center" align="center" direction="column" w="100%" {...rest}>
      <Flex justify="space-between" ps="20px" pe="20px" pt="5px" w="100%">
        <Text
          color={textColor}
          fontSize="lg"
          textAlign="start"
          fontWeight="600"
          lineHeight="100%">
          Market News
        </Text>
      </Flex>
      <Flex flexDirection="column" w="100%" mt="20px" mb="20px">
        {marketData.map((item, index) => (
          <Flex key={index} align="center" justify="space-between" w="100%" py="8px">
            <Text color={textColorSecondary} fontSize="md" fontWeight="500">
              {item.currency}
            </Text>
            <Flex align="center">
              <Text color={item.change > 0 ? "green.500" : "red.500"} fontSize="md" fontWeight="500" me="4px">
                {item.price}
              </Text>
              {item.change > 0 ? (
                <Icon as={IoArrowUpCircleSharp} color="green.500" fontSize="lg" />
              ) : (
                <Icon as={IoArrowDownCircleSharp} color="red.500" fontSize="lg" />
              )}
              <Text color={item.change > 0 ? "green.500" : "red.500"} fontSize="sm" fontWeight="500" ml="4px">
                {item.change}%
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}
