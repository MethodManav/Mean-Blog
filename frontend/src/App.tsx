import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import { CreateBlog } from "./component/CreateBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
