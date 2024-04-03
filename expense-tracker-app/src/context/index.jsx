import { createContext, useState } from "react"; // Importing createContext and useState hooks from React

export const GlobalContext = createContext(null); // Creating a context named GlobalContext

export default function GlobalState({ children }) { // Defining GlobalState component
  const [formData, setFormData] = useState({ // State for form data
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("expense"); // State for value
  const [totalExpense, setTotalExpense] = useState(0); // State for totalExpense
  const [totalIncome, setTotalIncome] = useState(0); // State for totalIncome
  const [allTransactions, setAllTransactions] = useState([]); // State for allTransactions

  function handleFormSubmit(currentFormData) { // Function to handle form submission
    if (!currentFormData.description || !currentFormData.amount) return; // Return if description or amount is empty

    setAllTransactions([ // Update allTransactions with new transaction
      ...allTransactions,
      { ...currentFormData, id: Date.now() }, // Add current form data with unique id
    ]);
  }

  console.log(allTransactions); // Log allTransactions

  return (
    <GlobalContext.Provider // Providing values to context
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        value,
        setValue,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children} {/* Rendering children components */}
    </GlobalContext.Provider>
  );
}
