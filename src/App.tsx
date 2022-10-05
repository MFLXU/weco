import { Routes, Route } from "react-router-dom";
import { CreatePost, Home, Login, Projects } from "./pages/index";
import { Navbar } from "./components/index";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
