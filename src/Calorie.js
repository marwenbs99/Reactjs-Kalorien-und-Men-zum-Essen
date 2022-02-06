import {Link} from 'react-router-dom';
import { useState } from "react";
import RapportCalorie from "./RapportCalorie";


const Calorie = () => {
    const [sexe, setSexe] = useState("");
    const [age, setAge] = useState("");
    const [mesure, setMesure] = useState("");
    const [poid, setPoid] = useState("");
    const [activiter, setActiviter] = useState("");
    const [affichageTest, setAffichageTest] = useState(true);



    const myObj = {
        sexe: 'Femme',
        age: 29,
        mesure: 161,
        poid: 50,
        activiter:1

        
        }



   const HandelRapport = () => {
       setAffichageTest(false);
   }
    return ( 

<section className="test">

{affichageTest && <div>
    <form onSubmit={HandelRapport}>
<h1 >Calcul des calories journalières</h1>
<p >Pour effectuer un calcul exact, nous avons besoin de quelques infos basiques de votre part.</p>

<div className="test1">



        <div className="imges">
        <h2 >Quel est votre sexe ?</h2>
            <div>
                <img  src="https://assets.yazio.com/frontend/images/icons.svg#icon-male"  />
                 <img  src="https://assets.yazio.com/frontend/images/icons.svg#icon-female" />
            </div>
            <div className="imagetitre">
                <h3 className="homme">Un Homme</h3>
  
                <h3 className="h3marg">Une Femme</h3>
            </div>
            <div className="imagetitre" >
  <input type="radio" id="Homme" name="drone" onChange={(e)=> setSexe(e.target.value)} value="Homme" required/>
  <input className="radiocss" type="radio" onChange={(e)=> setSexe(e.target.value)} id="Femme" name="drone" value="Femme" required/>
  
</div>
            
        </div>





<div className="imges">
<h2 class="">Quel âge avez-vous ?</h2>

    <div className="div2design">
                
                  <input type='text' onChange={(e)=> setAge(e.target.value)} className="inputtextstyle" required></input>
                  
            
                   <h2 >Ans</h2>
                   
                 
                  
                 
    </div>
</div>

</div>

<div className="test1">

        <div className="imges">

            <h2 class="">Combien mesurez-vous ?</h2>
            <div className="div2design">
                  
                  <input type='text' onChange={(e)=> setMesure(e.target.value)} className="inputtextstyle"  required></input>
                  
            
                   <h2 >Cm</h2>
                   
                 
                  
                 
    </div>

        </div>


        <div className="imges">

        <h2 class="">Combien pesez-vous ?</h2>
            <div className="div2design">
                  
                  <input type='text' onChange={(e)=> setPoid(e.target.value)} className="inputtextstyle"  required></input>
                  
            
                   <h2 >Kg</h2>
                   
                 
                  
                 
    </div>
        </div>

</div>


<div className="Activiter">


<h2>Évaluez votre activité journalière</h2>
<div>
<img className="icon" src="https://assets.yazio.com/frontend/images/calculator/icon-sitting-on-chair.svg" ></img>
<img className="icon" src="https://assets.yazio.com/frontend/images/calculator/icon-stand-up.svg" ></img>
<img className="icon" src="https://assets.yazio.com/frontend/images/calculator/icon-walking.svg" ></img>
<img className="icon" src="https://assets.yazio.com/frontend/images/calculator/icon-manual-handling.svg" ></img>
</div>
<div>
    <input  className="" type="radio" id="activiter" name="activiter" value="1" onChange={(e)=> setActiviter(e.target.value)} required/>
    <input className="radiocss1" type="radio" id="Femme" name="activiter" value="2" onChange={(e)=> setActiviter(e.target.value)} required/>
    <input className="radiocss1" type="radio" id="Femme" name="activiter" value="3"onChange={(e)=> setActiviter(e.target.value)} required/>
    <input className="radiocss1" type="radio" id="Femme" name="activiter" value="4"onChange={(e)=> setActiviter(e.target.value)} required/>
</div>
<div className="test1">
    <h4>Peu actif</h4>
    <h4 className="etat">Moy. actif</h4>
    <h4 className="etat1">Actif</h4>
    <h4 className="etat">Très actif</h4>
</div>


</div>
{/* <Link to={"/rapportCalorie/"+myObj}> calcule test </Link> */}

<button  type="submit" className="Calculer"  >Calculer</button>
</form>
</div>}

{!affichageTest && <RapportCalorie activiter={activiter} age={age} sexe={sexe} poid={poid} mesure={mesure}  /> }
</section>




     );
}
 
export default Calorie;