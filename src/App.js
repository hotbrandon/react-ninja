import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Post from "./components/Post";
import { Route, Routes } from "react-router";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
