import React, { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

const Search = ({ foodData, setfoodData }) => {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      console.log(data);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className="my-5 mx-auto w-1/2 relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 text-[#393e46] rounded-lg px-4 py-2 text-xl focus:outline-none  w-[100%] "
        type="text"
      />
    </div>
  );
};

export default Search;
