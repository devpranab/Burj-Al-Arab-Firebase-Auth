import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Book from "./components/Home/Book/Book";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/book/:bedType" element={<Book />}/>
      <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
//  npm config set legacy-peer-deps true