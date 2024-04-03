import { createContext, useState } from "react"; // Importing createContext and useState hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom

export const GlobalContext = createContext(null); // Creating a context object

export default function GlobalState({ children }) { // Defining GlobalState functional component
  const [searchParam, setSearchParam] = useState(""); // State for search parameter
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [recipeList, setRecipeList] = useState([]); // State for list of recipes
  const [recipeDetailsData, setRecipeDetailsData] = useState(null); // State for recipe details data
  const [favoritesList, setFavoritesList] = useState([]); // State for list of favorite recipes

  const navigate = useNavigate(); // Hook for navigation

  const apiURL = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`; // API URL for fetching recipes

  async function handleSubmit(event) { // Function to handle form submission
    event.preventDefault(); // Preventing default form submission behavior
    try {
      const res = await fetch(apiURL); // Fetching recipes data from API

      const data = await res.json(); // Parsing response JSON
      if (data?.data?.recipes) { // If recipes data is available
        setRecipeList(data?.data?.recipes); // Setting recipes list state
        setLoading(false); // Setting loading state to false
        setSearchParam(""); // Resetting search parameter state
        navigate("/"); // Navigating back to home page
      }
    } catch (e) { // Catching any errors
      console.log(e); // Logging errors
      setLoading(false); // Setting loading state to false
      setSearchParam(""); // Resetting search parameter state
    }
  }

  function handleAddToFavorite(getCurrentItem) { // Function to handle adding a recipe to favorites
    console.log(getCurrentItem); // Logging the current item
    let cpyFavoritesList = [...favoritesList]; // Creating a copy of favorites list
    const index = cpyFavoritesList.findIndex( // Finding the index of the current item in favorites list
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) { // If the item is not already in favorites
      cpyFavoritesList.push(getCurrentItem); // Add the item to favorites list
    } else { // If the item is already in favorites
      cpyFavoritesList.splice(index); // Remove the item from favorites list
    }

    setFavoritesList(cpyFavoritesList); // Updating the favorites list state
  }

  console.log(favoritesList, "favoritesList"); // Logging the favorites list

  return ( // JSX structure for rendering the GlobalState component
    <GlobalContext.Provider
      value={{ // Providing context values
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children} {/* Rendering child components */}
    </GlobalContext.Provider>
  );
}
