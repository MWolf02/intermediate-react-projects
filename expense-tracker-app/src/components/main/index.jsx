import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react"; // Importing Chakra UI components
import Summary from "../summary"; // Importing Summary component
import ExpenseView from "../expense-view"; // Importing ExpenseView component
import { useContext, useEffect } from "react"; // Importing useContext and useEffect hooks from React
import { GlobalContext } from "../../context"; // Importing GlobalContext

export default function Main() { // Defining Main component
  const { isOpen, onOpen, onClose } = useDisclosure(); // Hooks for modal open/close state
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions,
    setAllTransactions
  } = useContext(GlobalContext); // Destructuring context values

  useEffect(() => { // Effect to load transactions data from local storage
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setAllTransactions(storedTransactions); // Set initial transactions state from local storage
    }
  }, []); // Run this effect once on mount

  useEffect(() => { // Effect to save transactions data to local storage whenever it's updated
    localStorage.setItem("transactions", JSON.stringify(allTransactions));
  }, [allTransactions]);

  const removeItem = (id) => { // Function to remove item from transactions
    const updatedTransactions = allTransactions.filter(
      (item) => item.id !== id
    );
    setAllTransactions(updatedTransactions); // Update transactions state
  };

  useEffect(() => { // Effect to calculate total income and expense
    let income = 1000; // Default income value
    let expense = 500; // Default expense value

    allTransactions.forEach((item) => { // Iterate through transactions
      item.type === "income" // Check transaction type
        ? (income = income + parseFloat(item.amount)) // Update income if transaction is income
        : (expense = expense + parseFloat(item.amount)); // Update expense if transaction is expense
    });

    setTotalExpense(expense); // Update total expense
    setTotalIncome(income); // Update total income
  }, [allTransactions]); // Run this effect whenever transactions change

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}> {/* Main container */}
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}> {/* Header */}
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker {/* Title */}
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}> {/* Button to open modal */}
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary // Summary component to display total income and expense
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Flex // Container for expense views
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView // Component to display expense transactions
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"}
          removeItem={removeItem}
        />
        <ExpenseView // Component to display income transactions
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
          removeItem={removeItem}
        />
      </Flex>
    </Flex>
  );
}
