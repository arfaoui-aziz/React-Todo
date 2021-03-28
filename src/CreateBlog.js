import { useState } from "react";
import { useHistory } from "react-router-dom";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("aziz");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      //   history.go(-1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add Blog </h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="aziz">aziz</option>
          <option value="shaun">shaun</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button>Adding Blog ...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
