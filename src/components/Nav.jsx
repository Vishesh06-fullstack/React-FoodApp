import { Link } from "react-router-dom";



export default function Nav() {
   

  return (
    <div className="font-bold text-3xl p-10 text-[#393e46] shadow-md bg-white dark:bg-gray-900 dark:text-white flex justify-between items-center">
      <Link to={"/"}>
        <h2>FoodApp 🍔</h2>
      </Link>

    
    </div>
  );
}
