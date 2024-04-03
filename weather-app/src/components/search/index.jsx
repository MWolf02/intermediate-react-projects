import React from "react"; // Importing React library

export default function Search({ search, setSearch, handleSearch }) {
  // Defining Search functional component with props
  return (
    // JSX structure for rendering the Search component
    <div className="search-container">
      {" "}
      {/* Container for search input and button */}
      <input
        type="text"
        className="city-search" // Styling class for input
        placeholder="Enter City Name" // Placeholder text for input field
        name="search" // Name attribute for input field
        value={search} // Value of the input field, controlled by search prop
        onChange={(event) => setSearch(event.target.value)} // Handling onChange event to update search state
        required // Input field is required
      />
      <button className="search-btn" onClick={handleSearch}>
        {" "}
        {/* Button to trigger search */}
        Search Weather
      </button>
    </div>
  );
}
