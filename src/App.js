import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Book from "./components/Home/Book/Book";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/book/:bedType" element={<Book />}/>
      </Routes>
    </Router>
  );
}

export default App;
//  npm config set legacy-peer-deps true