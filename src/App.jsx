import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerConatiner";
import RecipeDetail from "./components/RecipeDetail";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search foodData={foodData} setfoodData={setfoodData} />
              <Container>
                <InnerContainer>
                  <FoodList setFoodId={setFoodId} foodData={foodData} />
                </InnerContainer>
              </Container>
            </>
          }
        />

        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
};

export default App;
