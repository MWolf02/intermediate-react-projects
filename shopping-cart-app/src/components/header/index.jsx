import React from "react"; // Importing React library
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom

export default function Header() { // Defining Header functional component
  return ( // JSX structure for rendering the Header component
    <header className="bg-blue-600 text-white py-4"> {/* Styling for header */}
      <div className="container mx-auto flex items-center justify-between"> {/* Container for header content */}
        <Link to="/"> {/* Link to home page */}
          <h1 className="text-2xl font-bold tracking-wide">React Redux Shopping Cart</h1> {/* Header title */}
        </Link>
        <nav> {/* Navigation menu */}
          <ul className="flex space-x-4"> {/* List of navigation links */}
            <li>
              <Link to="/">Home</Link> {/* Link to home page */}
            </li>
            <li>
              <Link to="/cart">Cart</Link> {/* Link to cart page */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
