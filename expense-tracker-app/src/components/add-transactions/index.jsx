import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react"; // Importing Chakra UI components
import { useContext } from "react"; // Importing useContext hook from React
import { GlobalContext } from "../../context"; // Importing GlobalContext from context file
import { v4 as uuidv4 } from "uuid"; // Importing UUID

export default function TransactionForm({ onClose, isOpen }) { // Defining TransactionForm functional component
  const {
    formData,
    setFormData,
    value,
    setValue,
    allTransactions,
    setAllTransactions,
  } = useContext(GlobalContext); // Destructuring context values from GlobalContext

  function handleFormChange(event) { // Function to handle form input changes
    setFormData({
      ...formData,
      [event.target.name]: event.target.value, // Update formData state with new input value
    });
  }

  function handleSubmit(event) { // Function to handle form submission
    event.preventDefault(); // Prevent default form submission behavior
    const newId = uuidv4(); // Generate a new UUID
    const type = formData.type || "expense"; // Set the type to "expense" if formData.type is not set
    const newTransaction = {
      id: newId,
      description: formData.description,
      amount: parseFloat(formData.amount), // Ensure amount is converted to a number
      type: type,
    };
    setAllTransactions([...allTransactions, newTransaction]); // Add new transaction to allTransactions array
    onClose(); // Close the modal
  }

  return ( // JSX structure for rendering the TransactionForm component
    <Modal isOpen={isOpen} onClose={onClose}> {/* Modal for transaction form */}
      <form onSubmit={handleSubmit}> {/* Form for adding a new transaction */}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader> {/* Header for modal */}
          <ModalCloseButton /> {/* Close button for modal */}
          <ModalBody> {/* Body of modal */}
            <FormControl>
              <FormLabel>Enter Description</FormLabel> {/* Label for description input */}
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
                onChange={handleFormChange} // Handle description input change
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={"5"}>Enter Amount</FormLabel> {/* Label for amount input */}
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange} // Handle amount input change
              />
            </FormControl>
            <RadioGroup mt="5" value={value} onChange={setValue}> {/* Radio group for transaction type */}
              <Radio
                checked={formData.type === "income"}
                value="income"
                colorScheme="blue"
                name="type"
                onChange={handleFormChange} // Handle radio input change
              >
                Income
              </Radio>
              <Radio
                ml={"3"}
                checked={formData.type === "expense"}
                value="expense"
                colorScheme="red"
                name="type"
                onChange={handleFormChange} // Handle radio input change
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter> {/* Footer of modal */}
            <Button mr={"4"} onClick={onClose}> {/* Cancel button */}
              Cancel
            </Button>
            <Button type="submit">Add</Button> {/* Add button */}
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
