import { useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Container from "./components/container";
import InnerContainer from "./components/InnerContainer";
import FoodList from "./components/FoodList";
import FoodDetails from "./components/FoodDetails";

import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  return (
    <div className="App">
      <Nav />
      <Search setFoodData={setFoodData} />
      {console.log("From app" + foodData)}
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />{" "}
          {/* Must be rendered as a prop since it is a child component*/}
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
