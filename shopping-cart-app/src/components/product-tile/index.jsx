import React from "react"; // Importing React library
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector hooks from react-redux
import { addToCart, removeFromCart } from "../../store/slices/cart-slice"; // Importing addToCart and removeFromCart actions from cart-slice

export default function ProductTile({ product }) { // Defining ProductTile functional component with product prop
  const dispatch = useDispatch(); // Initializing dispatch function from react-redux
  const { cart } = useSelector((state) => state); // Getting cart state from redux store

  function handleAddToCart() { // Function to handle adding item to cart
    dispatch(addToCart(product)); // Dispatching addToCart action with product
  }

  function handleRemoveFromCart() { // Function to handle removing item from cart
    dispatch(removeFromCart(product.id)); // Dispatching removeFromCart action with product id
  }

  return ( // JSX structure for rendering the ProductTile component
    <div>
      <div className="group flex flex-col items-center border-2 border-blue-500 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl"> {/* Container for product tile */}
        <div className="h-[180px]"> {/* Container for product image */}
          <img
            src={product?.image} // Rendering product image
            alt={product?.title} // Alt text for image
            className="object-cover h-full w-auto" // Styling for image
          />
        </div>
        <div> {/* Container for product title */}
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">{product?.title}</h1> {/* Rendering product title */}
        </div>
        <div className="flex items-center justify-between w-full mt-5"> {/* Container for buttons and price */}
          <button
            onClick={
              cart.some((item) => item.id === product.id) // Checking if product is already in cart
                ? handleRemoveFromCart // If yes, trigger handleRemoveFromCart function
                : handleAddToCart // If not, trigger handleAddToCart function
            }
            className="bg-black text-white border-2 rounded-lg font-bold p-4" // Styling for button
          >
            {cart.some((item) => item.id === product.id) // Conditional rendering for button text
              ? "Remove from cart"
              : "Add to cart"}
          </button>
          <div>${product?.price}</div> {/* Rendering product price */}
        </div>
      </div>
    </div>
  );
}
