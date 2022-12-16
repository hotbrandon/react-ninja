import { useState } from "react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const handleClick = () => {
    console.log("ouch!");
    const str = new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/-/g, "/")
      .replace("T", " ");
    setCurrentTime(str);
  };

  const handleParamsClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className="home">
      <h2>homepage - {currentTime}</h2>
      <div className="content">
        <button onClick={handleClick}>click me</button>
        <button
          onClick={(e) => {
            handleParamsClick(e);
          }}
        >
          click me with params
        </button>
      </div>
    </div>
  );
};

export default Home;
