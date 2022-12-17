import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("form submitted");
    const post = { title, content, author };
    if (author === "") {
      alert("please select an author");
      return;
    }
    console.log(post);
    fetch("http://192.168.124.70:8000/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitting(false);
          return res.json();
        } else {
          throw Error("failed creating a new post");
        }
      })
      .then((data) => {
        console.log(data);
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
      });
  };
  return (
    <div className="create-form">
      <h3>Create New Post</h3>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>content</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="">--- select author ---</option>
          <option value="amy">amy</option>
          <option value="jack">jack</option>
          <option value="tony">tony</option>
        </select>
        {!submitting && <button>save post</button>}
        {submitting && <button disabled>saving post...</button>}
      </form>
    </div>
  );
};

export default CreatePost;
