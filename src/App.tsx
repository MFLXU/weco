import { Routes, Route } from "react-router-dom";
import { About, CreatePost, Home, Login, Projects } from "./pages/index";
import { Navbar } from "./components/index";
import Notice from "./pages/home/Notice";
import { useState } from "react";

export function App() {
  const [notice, setNotice] = useState(false);
  const noticeHandler = () => {
    setTimeout(() => {
      setNotice(true);
    }, 10000);
  };
  noticeHandler();
  return (
    <div>
      {notice ? <Notice /> : null}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
