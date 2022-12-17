import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, loading } = useFetch(
    "http://192.168.124.70:8000/posts/" + id
  );

  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);

    fetch("http://192.168.124.70:8000/posts/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setDeleting(false);
          return res.json();
        } else {
          throw Error("failed deleting post " + id);
        }
      })
      .then((data) => {
        console.log(data);
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
        setDeleting(false);
      });
  };

  useEffect(() => {
    console.log("in useEffect, id=" + id);
    if (isNaN(id)) {
      navigate("/404");
    }
  }, [id]);
  return (
    <div>
      {loading && `loading post id ${id}...`}
      {error && <div>error</div>}
      {data && (
        <div className="post">
          <h3>{data.title}</h3>
          <p className="content">{data.content}</p>
          <p className="author">- {data.author}</p>
          <p>- {data.created_at}</p>
          <p className="delete">
            {deleting && (
              <button onClick={handleDelete}>deleting post...</button>
            )}
            {!deleting && <button onClick={handleDelete}>delete</button>}
          </p>
        </div>
      )}
    </div>
  );
};

export default Post;
