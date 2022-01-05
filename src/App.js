import './App.css';
import { GroceryList } from './GroceryList';
import image from './men-shoper.jpg';
import imagetwo from './shopping-box.jpg';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={imagetwo} width="200" alt="shopping-box"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={image} width="200" alt="men shopper"/>
      </div>
    </div>
  );
}

export default App;
