import { Routes, Route } from "react-router-dom";
import { CreatePost, Home, Login, Projects } from "./pages/index";
import { Navbar } from "./components/index";
import { useState } from "react";
export function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={
        darkMode
          ? "bg-neutral-900 text-white h-screen"
          : "bg-white text-black h-screen"
      }
    >
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
