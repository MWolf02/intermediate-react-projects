import React, { useEffect, useState } from "react"; // Importing React library
import { Circles } from "react-loader-spinner"; // Importing Circles loader component from react-loader-spinner
import ProductTile from "../components/product-tile"; // Importing ProductTile component

export default function Home() { // Defining Home functional component
  const [products, setProducts] = useState([]); // Initializing state variable for products
  const [loading, setLoading] = useState(false); // Initializing state variable for loading state

  async function fetchListOfProducts() { // Function to fetch list of products asynchronously
    try {
      setLoading(true); // Set loading state to true
      const res = await fetch("https://fakestoreapi.com/products"); // Fetching list of products from fakestoreapi
      const data = await res.json(); // Parsing response JSON
      if (data) { // If data is fetched successfully
        setLoading(false); // Set loading state to false
        setProducts(data); // Set products in state
      }
    } catch (error) {
      console.log(error); // Log any errors
      setLoading(false); // Set loading state to false
    }
  }

  useEffect(() => { // useEffect hook to fetch list of products on component mount
    fetchListOfProducts();
  }, []);

  return ( // JSX structure for rendering the Home component
    <div className="min-h-screen bg-gray-100"> {/* Container for home content */}
      {loading ? ( // Conditional rendering based on loading state
        <div className="flex justify-center items-center h-screen"> {/* Container for loader */}
          <Circles
            height={80} // Height of the loader
            width={80} // Width of the loader
            color="#4F46E5" // Color of the loader
            visible={true} // Visibility of the loader
          />
        </div>
      ) : (
        <div className="container mx-auto py-8"> {/* Container for products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Grid layout for products */}
            {products.map((product) => ( // Mapping through products and rendering ProductTile for each
              <ProductTile key={product.id} product={product} /> // Passing product prop to ProductTile component
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
