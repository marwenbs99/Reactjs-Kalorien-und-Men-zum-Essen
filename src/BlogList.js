import { Link } from "react-router-dom";

const BlogList = (props) => {

   

    return ( 
        <div className="Bloglist">
        {
            props.blogs.map((blog)=> (
               <div className="blog" key ={blog.id}>
                 <Link to={`/detail/${blog.id}`} className="blog-titre">{blog.title}</Link>
                 <small className="blog-publication-date">publier le {blog.date}</small>
                 <p className="blog-author">publier par : {blog.author}</p>
               </div> 
            ))
        }
     </div>
     );
}
 
export default BlogList;