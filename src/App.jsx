import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import Inbox from "./pages/Inbox";
import Done from "./pages/Done";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/weekly" element={<Weekly />}></Route>
      <Route path="/inbox" element={<Inbox />}></Route>
      <Route path="/done" element={<Done />}></Route>
    </Routes>
  );
}

export default App;
