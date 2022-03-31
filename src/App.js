import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import Navbar from "./Components/Shared/Navbar/Navbar";
import AllUser from "./Components/AllUser/AllUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home></Home>} >
          </Route>
          <Route path="/adduser" element={<AddUser></AddUser>}></Route>
          <Route path="/alluser" element={<AllUser></AllUser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
