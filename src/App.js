import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductsDisplay from "./components/ProductsDisplay";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";
import NoPage from "./components/NoPage";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="productsdisplay" element={<ProductsDisplay />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn/>}/>
          <Route path="createaccount" element={<CreateAccount/>}/>
          <Route path="*" element={<NoPage/>}/>
          <Route path="shoppingcart" element={<ShoppingCart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;