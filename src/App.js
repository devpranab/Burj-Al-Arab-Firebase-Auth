import {
  BrowserRouter as Router, Routes
} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;