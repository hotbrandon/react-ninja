import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("fetching posts!");
    fetch("http://192.168.124.70:8000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleDelete = (id) => {
    console.log(`delete post id ${id}!`);
    let all_posts = posts.filter((post) => post.id !== id);
    setPosts(all_posts);
  };

  return (
    <div>
      <h3>Posts</h3>
      <table>
        <tbody>
          {isLoading && "loading posts..."}
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <button onClick={() => handleDelete(post.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
