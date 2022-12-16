import { useState } from "react";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <h1>The Pythonist Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/create">New Blog</a>
        {loggedIn ? (
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        ) : (
          <a href="#" onClick={handleLogin}>
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
