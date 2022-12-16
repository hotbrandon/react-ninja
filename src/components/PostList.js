import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetching posts!");
    fetch("http://192.168.124.70:8000/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("failed to fetch posts!");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(`delete post id ${id}!`);
    let all_posts = posts.filter((post) => post.id !== id);
    setPosts(all_posts);
  };

  return (
    <div>
      <h3>Posts</h3>
      <div>
        {error && <div>{error}</div>}
        {isLoading && "loading posts..."}
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.id}</p>
              <p>{post.title}</p>
              <p>{post.content}</p>
              <p>
                <button onClick={() => handleDelete(post.id)}>delete</button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
