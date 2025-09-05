import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`
        );
        setRecipe(res.data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <h1 className="text-center text-3xl text-bold mt-10">Loading...</h1>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-2xl">
    
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

   
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>

     
      <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside text-gray-700">
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>
            {ing.original}
          </li>
        ))}
      </ul>

   
      {recipe.analyzedInstructions &&
      recipe.analyzedInstructions.length > 0 &&
      recipe.analyzedInstructions[0].steps.length > 0 ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Steps:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </div>
      ) : recipe.instructions ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          />
        </div>
      ) : (
        <p className="text-red-500 mt-6">No instructions available.</p>
      )}

      <Link
        to="/"
        className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;
