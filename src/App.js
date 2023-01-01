import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Book from "./components/Home/Book/Book";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p>Name : {loggedInUser.name}</p>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/book/:bedType" element={<PrivateRoute><Book /></PrivateRoute>}/>
      <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;