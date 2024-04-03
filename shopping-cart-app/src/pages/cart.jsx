import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from react
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import CartTile from "../components/cart-tile"; // Importing CartTile component

export default function Cart() {
  // Defining Cart functional component
  const [totalCart, setTotalCart] = useState(0); // Initializing state variable for totalCart
  const { cart } = useSelector((state) => state); // Getting cart state from redux store

  useEffect(() => {
    // useEffect hook to update totalCart whenever cart changes
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0)); // Calculating totalCart based on cart items' prices
  }, [cart]);

  console.log(cart, totalCart); // Logging cart and totalCart

  return (
    // JSX structure for rendering the Cart component
    <div className="flex justify-center">
      {" "}
      {/* Container for cart content */}
      {cart && cart.length ? ( // Conditional rendering based on whether cart is empty
        <>
          {" "}
          {/* Fragment shorthand */}
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            {" "}
            {/* Container for cart items */}
            <div className="flex flex-col justify-center items-center p-3">
              {" "}
              {/* Container for CartTile components */}
              {cart.map(
                (
                  cartItem // Mapping through cart items and rendering CartTile for each
                ) => (
                  <CartTile key={cartItem.id} cartItem={cartItem} /> // Passing cartItem prop to CartTile component
                )
              )}
            </div>
          </div>
          <div className="w-[300px]">
            {" "}
            {/* Container for cart summary */}
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              {" "}
              {/* Container for cart summary details */}
              <h1 className="font-bold text-lg text-blue-600">
                Your Cart Summary
              </h1>{" "}
              {/* Header for cart summary */}
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>{" "}
                {/* Total number of items in cart */}
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>{" "}
                {/* Total amount of items in cart */}
                <span>: ${totalCart.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-80vh flex flex-col items-center justify-center">
          {" "}
          {/* Container for empty cart message */}
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>{" "}
          {/* Message for empty cart */}
          <Link to="/">
            {" "}
            {/* Link to shop page */}
            <button className="bg-black text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>{" "}
            {/* Button to navigate to shop page */}
          </Link>
        </div>
      )}
    </div>
  );
}
