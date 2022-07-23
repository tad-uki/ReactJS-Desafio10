
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartDisplay from "./Components/Cart/CartDisplay.jsx"
import { CartProvider } from './Context/CartContext';


function App() {

  return (
    <CartProvider> 
      <main> 
        <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartDisplay/>}/>
        </Routes>
        </BrowserRouter>
      </main>
    </CartProvider>
  );
}

export default App;
