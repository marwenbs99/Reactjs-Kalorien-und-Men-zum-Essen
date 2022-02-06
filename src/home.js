import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import {Link} from 'react-router-dom';
const Home = () => {
  const buttonCalcule = {
    backgroundColor: '#028bfc',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    color: '#fff'
};
  
  const {data : blogs, isLoading, error} = useFetch('http://localhost:8000/blogs?_sort=id&_order=desc')
       
    return (  

       <div className="home">
         {error && <div>{error}</div>}
         {isLoading && <div>En cour de traitement ...</div>}
         <nav className="navbar">
            
            <ul className="liens">
                <li>

                </li>
                <li>
                  
                </li>
                <li>
                  
                </li>
                <li>
                  
                </li>
                <li>
                  
                </li>
                <li>
                  
                </li>
                <li>
                  {!isLoading &&  <Link  style={buttonCalcule} to="/ajouter" className="lien">Ajouter un Commentaire</Link>}
                </li>
            </ul>
        </nav>
       
        { blogs && <BlogList blogs={blogs}  /> }
       </div>
    );
}
 
export default Home;