
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landingpage from "./components/Landingpage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
