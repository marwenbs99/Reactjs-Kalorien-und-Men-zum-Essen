import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const buttonCalcule = {
        backgroundColor: '#028bfc',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        color: '#fff'
    };
        const logout = () => {
        localStorage.removeItem("login");
        
        window.location.reload(false);
        

    }
    const [login, setLogin] = useState("");
    
         
      
    const hydrateStateWithLocalStorage = () => {
                if (localStorage.hasOwnProperty("login")) {
                    let value = localStorage.getItem("login");
                    try{
                        value = JSON.parse(value);
                        setLogin(value)
                    }catch(e){
                        setLogin("");
                    }
                }
                }
                useEffect(()=>{
                    hydrateStateWithLocalStorage();
                },[localStorage.getItem("login")]);
       
        

  
    
    return (

        <nav className="navbar">
            <div>
                <Link className="logo"  to="/"> be fiiiiit </Link>
            </div>
            <ul className="liens">
                <li>
                    <Link to="/" className="lien">Acceuill</Link>
                </li>
                <li>
                    <Link  style={buttonCalcule} to="/Calorie" className="lien">Mon Calorie</Link>
                </li>
                <li>
                    {console.log("login",login)}
                   {login.userLogin ? (
                       <Link to="/#" onClick={logout}  style={buttonCalcule}  className="lien">Se deconnecter</Link>
                   ): (
                    <Link  style={buttonCalcule} to="/login" className="lien">Se connecter</Link>
                   )} 
                   
                </li>
            </ul>
        </nav>
       

        );

};

export default Navbar;