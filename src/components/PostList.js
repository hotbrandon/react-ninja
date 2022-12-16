import useFetch from "./useFetch";

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
            <div key={post.id}>
              <p>{post.id}</p>
              <p>{post.title}</p>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
