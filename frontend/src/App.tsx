import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import Signin from "./ui/Signin";
import Signup from "./ui/Signup";
import { CreateBlog } from "./ui/CreateBlog";

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
