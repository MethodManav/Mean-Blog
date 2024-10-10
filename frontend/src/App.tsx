import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Signin from "./component/Signin";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
