import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddUser from "./Components/AddUser/AddUser";
import Navbar from "./Components/Shared/Navbar/Navbar";
import AllUser from "./Components/AllUser/AllUser";
import UpdateUser from "./Components/UpdateUser/UpdateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<AllUser></AllUser>} >
          </Route>
          <Route path="/adduser" element={<AddUser></AddUser>}></Route>
          <Route path="/updateuser/:id" element={<UpdateUser></UpdateUser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
