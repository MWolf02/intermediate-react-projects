import { useContext } from "react"; // Importing useContext hook from React
import { NavLink } from "react-router-dom"; // Importing NavLink component from react-router-dom
import { GlobalContext } from "../../context"; // Importing GlobalContext from context file

export default function Navbar() { // Defining Navbar functional component
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext); // Destructuring searchParam, setSearchParam, and handleSubmit from GlobalContext

  console.log(searchParam); // Logging searchParam

  return ( // JSX structure for rendering the Navbar component
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0"> {/* Container for navigation */}
      <h2 className="text-2xl font-semibold"> {/* Heading for app title */}
        <NavLink to={"/"}>InspiredCooking</NavLink> {/* Link to home page */}
      </h2>
      <form onSubmit={handleSubmit}> {/* Form for searching items */}
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)} // Handling input change to update searchParam state
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-orange-100 focus:shadow-orange-200" // Styling for search input
        />
      </form>
      <ul className="flex gap-5"> {/* List of navigation links */}
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300" // Styling for navigation link
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300" // Styling for navigation link
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
