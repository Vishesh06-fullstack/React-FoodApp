import FoodItem from "./Fooditem";

export default function FoodList({foodData ,  setFoodId}) {
    return <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center" >
         {foodData.map((food) => (
         <FoodItem setFoodId = {setFoodId} key={food.id} food = {food} />
            ))}
    </div>
}