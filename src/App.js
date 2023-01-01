import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
//  npm config set legacy-peer-deps true