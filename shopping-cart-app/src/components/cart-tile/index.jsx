import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import { removeFromCart } from "../../store/slices/cart-slice"; // Importing removeFromCart action creator from cart-slice

export default function CartTile({ cartItem }) { // Defining CartTile functional component with cartItem prop
  const dispatch = useDispatch(); // Initializing dispatch function from react-redux

  function handleRemoveFromCart() { // Function to handle removing item from cart
    dispatch(removeFromCart(cartItem.id)); // Dispatching removeFromCart action with item id
  }

  return ( // JSX structure for rendering the CartTile component
    <>
      <div className="flex items-center p-5 justify-between bg-blue-600 mt-2 mb-2 rounded-xl"> {/* Container for cart item */}
        <div className="flex p-3"> {/* Flex container for item details */}
          <img
            src={cartItem?.image} // Rendering item image
            className="h-28 rounded-lg" // Styling class for image
            alt={cartItem?.title} // Alt text for image
          />
          <div className="ml-10 self-start space-y-5"> {/* Container for item title and price */}
            <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1> {/* Rendering item title */}
            <p className="text-white font-extrabold">${cartItem?.price}</p> {/* Rendering item price */}
          </div>
        </div>
        <div> {/* Container for remove button */}
          <button
            onClick={handleRemoveFromCart} // Triggering handleRemoveFromCart function on button click
            className="bg-black text-white border-2 rounded-lg font-bold p-4" // Styling class for button
          >
            Remove From cart
          </button>
        </div>
      </div>
    </>
  );
}
