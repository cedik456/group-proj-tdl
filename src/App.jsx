import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/weekly" element={<Weekly />}></Route>
    </Routes>
  );
}

export default App;
