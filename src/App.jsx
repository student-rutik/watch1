import React from 'react';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import './App.css';
import AdminHome from "./pages/admin/AdminHome";
import CreateShoe from "./pages/admin/CreateShoe";
import Homepage from "./pages/UI/Homepage";
import Collection from "./pages/UI/Collection";
import Cart from "./pages/UI/Cart";

import ReadShoeAd from "./pages/admin/ReadShoeAd";
import UpdateShoeAd from "./pages/admin/UpdateShoeAd";
import DeleteShoeAd from "./pages/admin/DeleteShoeAd";

function App() {
  

  return (
    <Router>
         <Routes>
          <Route path="/admin" element={<AdminHome/>}></Route>
          <Route path="/admin/shoes/create" element={<CreateShoe/>}></Route>
          <Route path="/admin/shoes/details/:id" element={<ReadShoeAd/>}></Route>
          <Route path="/admin/shoes/update/:id" element={<UpdateShoeAd/>}></Route>
          <Route path="/admin/shoes/delete/:id" element={<DeleteShoeAd/>}></Route>
          
          
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/Collection" element={<Collection/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
         </Routes>
    </Router>
  )
}

export default App
