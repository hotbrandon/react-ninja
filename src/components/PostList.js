import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const PostList = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("http://192.168.124.70:8000/posts");

  return (
    <div>
      <h3>Posts</h3>
      <div>
        {error && <div>{error}</div>}
        {isLoading && "loading posts..."}
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h4>
                {post.id} <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h4>
              <p>{post.content}</p>
              <p className="author">- {post.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
