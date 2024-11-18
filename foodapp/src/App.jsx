import { useState } from 'react';
import Search from './components/Search';
import { useState } from 'react';
import './App.css';

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className='App'>
      <Nav/>
      <Search foodData = {foodData} setFoodData = {setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList foodData = {foodData}/>  {/* Must be rendered as a prop since it is a child component*/}
        </InnerContainer>
      </Container>
      
    </div>
  )
}

export default App
