import { Link } from "react-router-dom"; // Importing Link component from react-router-dom

export default function RecipeItem({ item }) { // Defining RecipeItem functional component with item prop
  return ( // JSX structure for rendering the RecipeItem component
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white"> {/* Container for recipe item */}
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl "> {/* Container for recipe item image */}
        <img src={item?.image_url} alt="recipe item" className="block w-full" /> {/* Rendering recipe item image */}
      </div>
      <div> {/* Container for recipe item details */}
        <span className="text-sm text-cyan-700 font-medium"> {/* Publisher of the recipe */}
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black"> {/* Title of the recipe */}
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`} // Link to recipe details page
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:shadow-orange-200 active:scale-95" // Styling for link
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
