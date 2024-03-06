import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./Pages/Home";
import Aboutus from "./component/Aboutus";
import Products from "./component/Products";
import Services from "./component/Services";
import './App.css';
import Axiosdata from './component/apiaxios';

function App() {
  return (
    <div className="App">
      <Axiosdata />

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Services" element={<Services />}></Route>
      
      </Route>

    </Routes>
    
    </BrowserRouter>
  



    </div>
  );
}

export default App;
