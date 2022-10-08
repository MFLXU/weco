import { Routes, Route } from "react-router-dom";
import { CreatePost, Home, Login, Projects } from "./pages/index";
import { Navbar, Footer } from "./components/index";
export function App() {
  return (
    <div>
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
