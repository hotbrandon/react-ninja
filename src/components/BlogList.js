const BlogList = ({blogs}) => {

    return ( 
        <div className="blog-list">
            <h2>All Blogs</h2>
        { blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p>author: {blog.author}</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;