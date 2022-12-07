import {useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setblogs] = useState([
    { id:1, title: "python 101", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", author: "brandon"},
    { id:2, title: "python 102", body: "Aspernatur alias, fugiat rerum debitis quos, quasi ducimus minima magnam quaerat laudantium quibusdam ullam.", author: "bob"},
    { id:3, title: "python 103", body: "Neque eveniet, illo quo iusto dignissimos dolor dolorum.", author: "jack"},
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs}/>
      
    </div>
  );
};

export default Home;
