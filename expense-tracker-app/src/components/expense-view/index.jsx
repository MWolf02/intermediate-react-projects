import { Box, CloseButton, Flex, Heading, Text } from "@chakra-ui/react"; // Importing Chakra UI components
import React from "react"; // Importing React

export default function ExpenseView({ type, data, removeItem }) { // Defining ExpenseView component
  const handleRemoveItem = (id) => { // Function to handle item removal
    removeItem(id); // Call removeItem function with item id
  };

  return ( // JSX structure for rendering ExpenseView component
    <Box // Main container box for expense view
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
      <Flex justifyContent={"space-between"} alignItems={"center"}> {/* Flex container for heading */}
        <Heading
          size={"md"}
          color={type === "expense" ? "red.400" : "blue.400"} // Set heading color based on type
        >
          {type === "income" ? "Income" : "Expense"} {/* Heading content */}
        </Heading>
      </Flex>
      {data.map((item, index) => ( // Mapping through data array to render expense items
        <Flex
          key={item.id}
          bg={type === "expense" ? "red.50" : "blue.50"} // Set background color based on type
          mt={"4"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          borderColor={type === "expense" ? "red.100" : "blue.100"} // Set border color based on type
          p={"4"}
          borderRadius={"8"}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <CloseButton onClick={() => handleRemoveItem(item.id)} /> {/* Close button to remove item */}
            <Text ml="3" fontWeight="bold" color="gray.600">
              {item.description}
            </Text>
          </Flex>
          <Text>$ {item.amount}</Text> {/* Display item amount */}
        </Flex>
      ))}
    </Box>
  );
}
