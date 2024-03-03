import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import NavigationBar from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Router>
        <NavigationBar /> 
        <Routes>
          <Route path="/work" element={<Portfolio />} />
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
