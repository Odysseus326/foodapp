import { useState } from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Container from "./components/container";
import InnerContainer from "./components/InnerContainer";
import FoodList from "./components/FoodList";
import FoodDetails from './components/FoodDetails';

import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} /> {/* Must be rendered as a prop since it is a child component*/}
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
