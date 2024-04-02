import { Box, CloseButton, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function ExpenseView({ type, data, removeItem }) {
  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <Box
      flex={1}
      w="full"
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading
          size={"md"}
          color={type === "expense" ? "red.400" : "blue.400"}
        >
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>
      {data.map((item, index) => (
        <Flex
          key={item.id}
          bg={type === "expense" ? "red.50" : "blue.50"}
          mt={"4"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          borderColor={type === "expense" ? "red.100" : "blue.100"}
          p={"4"}
          borderRadius={"8"}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <CloseButton onClick={() => handleRemoveItem(item.id)} />
            <Text ml="3" fontWeight="bold" color="gray.600">
              {item.description}
            </Text>
          </Flex>
          <Text>$ {item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
}
