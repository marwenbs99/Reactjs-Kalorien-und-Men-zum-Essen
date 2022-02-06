import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import axiox from "axios";

const Register = () => {
    
    const [poid, setPoid] = useState("");
    const [genre, setGenre] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[error, setError] = useState("");
    let history = useHistory();
    
    
    const register = (e) => {
        
       e.preventDefault();     
       axiox.post("http://localhost:5000/api/auth/register",{
       email,
       password,
       poid,
       genre,
       age

    }).then((response) => {
        
        localStorage.setItem("login",JSON.stringify({
            userLogin: true,
            token: response.data.access_token
        })
        );
        setError("");
        setEmail("");
        setPassword("");
        setAge("");
        setGenre("");
        setPoid("");
        history.push("/");
        
    }).catch(error => setError(error.response.data.message));
    }
    

    return ( 
        <div className="Login">


            {error && <p style={{color: "red"}}>{error}</p>}



             <form onSubmit={register} className="form">
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


            <label htmlFor="Nom">Poids actuelle</label>
             <input 
            type="text" 
            className="form-control" 
            id="poid"
            value={poid}
            onChange={(e)=> setPoid(e.target.value)}
            required />


            <label htmlFor="Nom">Age</label>
            <select 
            required 
            className="form-control"
            id="age" 
            value={age} 
            onChange={ (e)=> setAge(e.target.value) }>
            <option value=""></option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>

            </select>


            <label htmlFor="Nom">Genre</label>
            <select 
            required 
            className="form-control"
            id="genre" 
            value={genre} 
            onChange={ (e)=> setGenre(e.target.value) }>
            <option value=""></option>
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
            </select>

            
           
            
            
            
             </div>
             <button  type="submit" className="btn-create">S'inscrire</button>
             <Link   to="/" className="lien">Nouveau ? Creer un Compte!</Link>
             </form>

        </div>
     );
}
 
export default Register;