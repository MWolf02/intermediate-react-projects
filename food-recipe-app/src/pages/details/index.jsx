import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="order-2 lg:order-1">
        {" "}
        {/* Set order-2 for small screens and order-1 for large screens to place it on the left */}
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt="Recipe Details Image"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
      <div className="order-1 lg:order-2">
        {" "}
        {/* Set order-1 for small screens and order-2 for large screens to place it on the right */}
        <div className="flex flex-col gap-3">
          <span className="text-sm text-cyan-700 font-medium">
            {recipeDetailsData?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {recipeDetailsData?.recipe?.title}
          </h3>
        </div>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="text-sm p-3 mt-5 mb-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:shadow-orange-200 active:scale-95"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span>
                  <strong>{ingredient.quantity} {" "} {ingredient.unit}</strong>
                </span>
                {" "}
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
