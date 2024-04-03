import { useContext, useEffect } from "react"; // Importing useContext and useEffect hooks from React
import { useParams } from "react-router-dom"; // Importing useParams hook from react-router-dom
import { GlobalContext } from "../../context"; // Importing GlobalContext from context file

export default function Details() { // Defining Details functional component
  const { id } = useParams(); // Extracting id parameter from URL using useParams hook
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext); // Destructuring context values from GlobalContext

  useEffect(() => { // useEffect hook for fetching recipe details on component mount
    async function getRecipeDetails() { // Function to fetch recipe details
      const response = await fetch( // Fetching recipe details from API
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json(); // Parsing response JSON
      console.log(data); // Logging recipe details data
      if (data?.data) { // If recipe details data is available
        setRecipeDetailsData(data?.data); // Setting recipe details data in context state
      }
    }

    getRecipeDetails(); // Calling getRecipeDetails function
  }, []); // Empty dependency array to run effect only once on component mount

  return ( // JSX structure for rendering the Details component
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10"> {/* Container for details layout */}
      <div className="order-2 lg:order-1"> {/* Set order-2 for small screens and order-1 for large screens */}
        <div className="h-96 overflow-hidden rounded-xl group"> {/* Container for recipe image */}
          <img
            src={recipeDetailsData?.recipe?.image_url} // Recipe image URL
            alt="Recipe Details Image"
            className="w-full h-full object-cover block" // Styling for recipe image
          />
        </div>
      </div>
      <div className="order-1 lg:order-2"> {/* Set order-1 for small screens and order-2 for large screens */}
        <div className="flex flex-col gap-3"> {/* Container for recipe details */}
          <span className="text-sm text-cyan-700 font-medium"> {/* Publisher of the recipe */}
            {recipeDetailsData?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black"> {/* Title of the recipe */}
            {recipeDetailsData?.recipe?.title}
          </h3>
        </div>
        <div> {/* Container for favorite button */}
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)} // Handling favorite button click
            className="text-sm p-3 mt-5 mb-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:shadow-orange-200 active:scale-95" // Styling for favorite button
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex( // Checking if recipe is already in favorites
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div> {/* Container for ingredients list */}
          <span className="text-2xl font-semibold text-black"> {/* Heading for ingredients list */}
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3"> {/* List of ingredients */}
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => ( // Mapping through ingredients
              <li key={index}> {/* Rendering each ingredient */}
                <span>
                  <strong>{ingredient.quantity} {" "} {ingredient.unit}</strong> {/* Quantity and unit of the ingredient */}
                </span>
                {" "}
                <span>{ingredient.description}</span> {/* Description of the ingredient */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
