import BlogList from "./BlogList";
import useFetch from "./useFetch";

//******** Home Component */
const Home = () => {
  const { data: blogs, error, isLoading } = useFetch(
    "http://localhost:5000/blogs"
  );



  //***** Return*/
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
