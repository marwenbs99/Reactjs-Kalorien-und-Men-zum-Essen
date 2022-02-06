import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const CommentDetail = () => {
    const history = useHistory();
    const { id } = useParams();
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/'+id);
    const HandleDelete = () => {
      
        fetch('http://localhost:8000/blogs/'+id ,{
           method: 'DELETE' 
        }).then(()=> {
            history.push('/');
            console.log('Commentaire supprimer !!');
        })
    }
    return ( 
        <div className="">
            {isLoading  && <div>En cour de traitement ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="blog">
                    <h2 className="blog-titre">{blog.title}</h2>
                    <small className="blog-publication-date">publier le: {blog.date}</small>
                    <p className="blog-body">{blog.body}</p>
                    <p className="blog-author">Publier par: {blog.author}</p>
                    <button onClick={HandleDelete}>supprimer</button>
                </div>
            )}
        </div>
        
     );
}
 
export default CommentDetail;