import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Select,
  Stack,
} from "@chakra-ui/react";

const TokenizationModule = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [tokenType, setTokenType] = useState("");

  const handleTokenization = () => {
    // Logic to handle tokenization process
    console.log("Token name:", tokenName);
    console.log("Token symbol:", tokenSymbol);
    console.log("Token supply:", tokenSupply);
    console.log("Token type:", tokenType);
  };

  return (
    <Box p="6" borderWidth="1px" borderRadius="lg">
      <Heading as="h3" size="md" mb="4">
        Tokenization Module
      </Heading>
      <Stack spacing={4}>
        <FormControl id="tokenName">
          <FormLabel>Token Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter token name"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
          />
        </FormControl>
        <FormControl id="tokenSymbol">
          <FormLabel>Token Symbol</FormLabel>
          <Input
            type="text"
            placeholder="Enter token symbol"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
          />
        </FormControl>
        <FormControl id="tokenSupply">
          <FormLabel>Total Token Supply</FormLabel>
          <Input
            type="number"
            placeholder="Enter total token supply"
            value={tokenSupply}
            onChange={(e) => setTokenSupply(e.target.value)}
          />
        </FormControl>
        <FormControl id="tokenType">
          <FormLabel>Token Type</FormLabel>
          <Select
            placeholder="Select token type"
            value={tokenType}
            onChange={(e) => setTokenType(e.target.value)}
          >
            <option value="ERC20">ERC20</option>
            <option value="ERC721">ERC721</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" onClick={handleTokenization}>
          Tokenize
        </Button>
      </Stack>
    </Box>
  );
};

export default TokenizationModule;
