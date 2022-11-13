import Index from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PlaceToStay from "./pages/PlaceToStay/PlaceToStay";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/placetostay"} element={<PlaceToStay />} />
      </Routes>
    </div>
  );
}

export default App;
