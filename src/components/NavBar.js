import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Pythonist Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/create">New Post</Link>
      </div>
    </nav>
  );
};

export default NavBar;
