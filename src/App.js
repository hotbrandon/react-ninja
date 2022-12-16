import NavBar from "./components/NavBar";
import Home from "./components/Home";
import PostList from "./components/PostList";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/oracle" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
