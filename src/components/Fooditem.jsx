import { Link } from "react-router-dom";

export default function FoodItem({ food , setFoodId }) {
  return (
    <div className="
    w-72 rounded-lg 
    shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
    p-5 m-5 overflow-hidden font-display 
    transition-all duration-300 ease-in-out 
    hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] 
    active:scale-95 active:shadow-[0_4px_8px_rgba(0,0,0,0.12)]
    cursor-pointer
  "
>
   
  
      
      <img  src={food.image} className="max-w-full h-auto" alt="" />

     
      <div className="itemContainer-content mt-3 mb-3  font-item-family text-center text-[16px] font-[600] text-[#393e46] ">
        <p>{food.title}</p>
      </div>

      <div className="flex justify-center items-center text-center">
         <Link
  
          to={`/recipe/${food.id}`}  
          state={food}                
          className="bg-[#29bb89] border-none rounded-lg font-bold cursor-pointer hover:bg-[#17cd8d] text-white px-2 py-2"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}
