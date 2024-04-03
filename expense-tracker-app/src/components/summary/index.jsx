import { Box, Flex, Heading, Text } from "@chakra-ui/react"; // Importing Chakra UI components
import TransactionForm from "../add-transactions"; // Importing TransactionForm component
import TransactionChartSummary from "../chart"; // Importing TransactionChartSummary component

export default function Summary({ // Defining Summary component
  onClose,
  isOpen,
  totalExpense,
  totalIncome,
}) {
  return (
    <Box // Main container for summary
      p="6"
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
    >
      <Flex // Flex container for content alignment
        w="full"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex // Flex container for balance and total income/expense
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"} color={"gray.600"}> {/* Balance heading */}
            Balance is $ {totalIncome - totalExpense} {/* Displaying balance */}
          </Heading>
          <Flex // Flex container for total income
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ {totalIncome}</Heading> {/* Displaying total income */}
              <Text color={"gray.600"}>Total Income</Text> {/* Label for total income */}
            </Flex>
          </Flex>
          <Flex // Flex container for total expense
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ {totalExpense}</Heading> {/* Displaying total expense */}
              <Text color={"gray.600"}>Total Expense</Text> {/* Label for total expense */}
            </Flex>
          </Flex>
        </Flex>
        <Box // Box for chart display
          flex={1}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          width={"300px"}
          height={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <TransactionChartSummary expense={totalExpense} income={totalIncome} /> {/* Rendering TransactionChartSummary component */}
        </Box>
      </Flex>
      <TransactionForm onClose={onClose} isOpen={isOpen} /> {/* Rendering TransactionForm component */}
    </Box>
  );
}
