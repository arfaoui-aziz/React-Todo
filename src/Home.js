import BlogList from "./BlogList";
import { useState, useEffect } from "react";

//******** Home Component */
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("aziz");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use Effect running");
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  //***** Return*/
  return (
    <div className="home">
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="Mario's Blogs"
          handleDelete={handleDelete}
        />
      )}
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
