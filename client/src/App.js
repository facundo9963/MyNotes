
import './App.css';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route exact path="/home" element={<Home/>}/>
    </Routes>
    
  );
}

export default App;
