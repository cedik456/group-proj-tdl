import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import Inbox from "./pages/Inbox";
import Done from "./pages/Done";
import Test from "./pages/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/weekly" element={<Weekly />}></Route>
      <Route path="/inbox" element={<Inbox />}></Route>
      <Route path="/done" element={<Done />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  );
}

export default App;
