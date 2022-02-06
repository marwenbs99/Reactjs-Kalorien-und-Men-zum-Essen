import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import axiox from "axios";

const Login = () => {
    
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[error, setError] = useState("");
    let history = useHistory();
    
    
    const HandleLogin = (e) => {
        
       e.preventDefault();     
       axiox.post("http://localhost:5000/api/auth/login",{
        email,
       password
       
    }).then((response) => {
        
        localStorage.setItem("login",JSON.stringify({
            userLogin: true,
            token: response.data.access_token
        })
        );
        setError("");
        setEmail("");
        setPassword("");
        history.push("/");
        
    }).catch(error => setError(error.response.data.message));
    }
    

    return ( 
        <div className="Login">
            {error && <p style={{color: "red"}}>{error}</p>}
             <form onSubmit={HandleLogin} className="form">
             <div className="form-group">
            
             <label htmlFor="Nom">Nom du compte</label>
             <input 
            type="text" 
            className="form-control" 
            id="nom"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required />
            <label htmlFor="Password">Mot de passe</label>
             <input 
            type="Password" 
           
            className="form-control" 
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required />
             </div>

             <button  type="submit" className="btn-create">Login</button>
             <Link   to="/register" className="lien">Nouveau ? Creer un Compte!</Link>
             </form>

        </div>
     );
}
 
export default Login;