import { useContext } from "react"; // Importing useContext hook from React
import RecipeItem from "../../components/recipe-item"; // Importing RecipeItem component
import { GlobalContext } from "../../context"; // Importing GlobalContext from context file

export default function Favorites() { // Defining Favorites functional component
  const { favoritesList } = useContext(GlobalContext); // Destructuring favoritesList from GlobalContext

  return ( // JSX structure for rendering the Favorites component
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10"> {/* Container for favorites layout */}
      {favoritesList && favoritesList.length > 0 ? ( // Checking if favoritesList is not empty
        favoritesList.map((item) => <RecipeItem item={item} />) // Rendering RecipeItem component for each favorite item
      ) : ( // If favoritesList is empty
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold"> {/* Message for empty favorites list */}
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
