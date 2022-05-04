
import './App.css';
import { Routes,Route } from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import Notes from './components/notes/Notes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/notes" element={<Notes/>}/>
      {/* <Route exact path="/home" element={<Home/>}/> */}
    </Routes>
    
  );
}

export default App;
