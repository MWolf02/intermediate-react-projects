import { useContext } from "react"; // Importing useContext hook from React
import { GlobalContext } from "../../context"; // Importing GlobalContext from context file
import RecipeItem from "../../components/recipe-item"; // Importing RecipeItem component

export default function Home() { // Defining Home functional component
  const { recipeList, loading } = useContext(GlobalContext); // Destructuring recipeList and loading from GlobalContext

  if(loading){ // If data is loading
    return <div>Loading.. Please wait</div>; // Display loading message
  }

  return ( // JSX structure for rendering the Home component
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10"> {/* Container for recipes layout */}
      {recipeList && recipeList.length > 0 // Checking if recipeList is not empty
        ? recipeList.map((item) => <RecipeItem item={item} key={item.id}/>) // Rendering RecipeItem component for each recipe
        : <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">No Recepies found</p> {/* Message for no recipes found */}
          </div>}
    </div>
  );
}
