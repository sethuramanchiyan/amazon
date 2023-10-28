
import React from "react";
import './App.css';
// import Register from './Register/Register';
// import Sidebar from "./Sidebar/Sidebar";
import Amazon from './amazon/Amazon';
import Mobile from "./amazon/Mobile";
import Address from "./amazon/Address";
import Dress from "./amazon/Dress";
import Electronics from "./amazon/Electronics";
import Signout from "./amazon/Signout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App()
{
  return(
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Amazon />}/>
              <Route path="Mobile" element={<Mobile />}/>
              <Route path="Address" element={<Address />}/>
              <Route path="Electronics" element={<Electronics />}/>
              <Route path="Dress" element={<Dress />}/>
              <Route path="Signout" element={<Signout />} />
            </Routes>
        </BrowserRouter>
        {/* <Sidebar /> */}
        {/* <Register /> */}
    </div>
  )
}
export default App;

