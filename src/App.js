import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="Products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn/>}/>
          <Route path="createaccount" element={<CreateAccount/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;