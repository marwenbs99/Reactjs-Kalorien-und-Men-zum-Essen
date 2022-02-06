import { green } from "@material-ui/core/colors";
import { useState } from "react";

const RapportCalorie = (props) => {
  const [monTest, setMonTest] = useState(true);
  const poidideal = (props.mesure -100)-(props.mesure-150)/2
  const calorieObjectif = () =>{
    if (props.poid>poidideal) {
      if (props.sexe=="Femme") {
        return (parseInt((10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)-(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)*0.15))
      }
      return (parseInt((10*props.poid + 6.25*props.mesure - 5*props.age+5+props.activiter*100)-(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)*0.15))
    }
    if (props.sexe=="Homme") {
      return parseInt ((10*props.poid + 6.25*props.mesure - 5*props.age+5+props.activiter*100)+(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)*0.15)
    }
    return (parseInt ((10*props.poid + 6.25*props.mesure - 5*props.age+5+props.activiter*100)+(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)*0.15))
  }
  const styledecouleur = {
    color: '#228B22'
  }
  const styledecouleur1 = {
    color: '#DC143C'
  }
  const styledecouleur2 = {
    color: '#FF8C00'
  }

  const HandelMenu = () => {
    setMonTest(true);
}

  const HandelRapport=()=>{
    if (props.sexe==="Femme") {
      return (props.mesure -100)-(props.mesure-150)/2
    }
    return props.mesure-100-((props.mesure-150)/4)
  }
    return ( 
      <div className="">
       {calorieObjectif()}
       <form onSubmit={HandelMenu}>
        <div className="test1">

          <div className="poids">
          {(HandelRapport()<props.poid) && <h2 style={styledecouleur}>Perdre du poids</h2> }
          {(HandelRapport()>props.poid) && <h2 style={styledecouleur1}>Perdre du poids</h2> }
          
          <img class="icon-svg" src="https://assets.yazio.com/frontend/images/calculator/icon-negative-dynamic.svg" alt="Perdre du poids" type="image/svg+xml"></img>
          <h4>Consomation calorique par jour</h4>
          {props.sexe==="Femme" &&
          <h2> { parseInt((10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)-(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)*0.15)} Kcal</h2>
          }
           {props.sexe==="Homme" &&
          <h2> { parseInt((10*props.poid + 6.25*props.mesure - 5*props.age+5+props.activiter*100)-(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)*0.15)} Kcal</h2>
          }
          <p>Ce niveau de consommation de calories quotidien vous permettra de perdre entre 0,5 et 1 kg par semaine.</p>
          <button  type="submit" className="Menu">Menu</button>

          </div>
          <div className="poids">
          {(HandelRapport()>props.poid) && <h2 style={styledecouleur2}>Stabiliser son poids</h2> }
          {(HandelRapport()<props.poid) && <h2 style={styledecouleur2}>Stabiliser son poids</h2> }
          {(HandelRapport()===props.poid) && <h2 style={styledecouleur}>Stabiliser son poids</h2> }
          
          <img class="icon-svg" src="https://assets.yazio.com/frontend/images/calculator/icon-neutral-dynamic.svg" alt="Stabiliser son poids" type="image/svg+xml"></img>
          <h4>Consomation calorique par jour</h4>
          {props.sexe==="Femme" &&
          <h2> { parseInt(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100) } Kcal</h2>
          }
          {props.sexe==="Homme" &&
          <h2> { parseInt(10*props.poid + 6.25*props.mesure - 5*props.age+5+props.activiter*100) } Kcal</h2>
          }
          <p>Ce niveau de consommation de calories quotidien vous permettra de stabiliser votre poids actuel.</p>
          <button  type="submit" className="Menu">Menu</button>

          </div>
          
          <div className="poids">
          {(HandelRapport()>props.poid) && <h2 style={styledecouleur}>Prendre du poids</h2> }
          {(HandelRapport()<props.poid) && <h2 style={styledecouleur1}>Prendre du poids</h2> }
          
          <img class="icon-svg" src="https://assets.yazio.com/frontend/images/calculator/icon-positive-dynamic.svg" alt="Prendre du poids" type="image/svg+xml"></img>
          <h4>Consomation calorique par jour</h4>
          {props.sexe==="Femme" &&
          <h2> {parseInt ((10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)+(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)*0.15)} Kcal</h2>
          }
          {props.sexe==="Homme" &&
          <h2> {parseInt ((10*props.poid + 6.25*props.mesure - 5*props.age+5+props.activiter*100)+(10*props.poid + 6.25*props.mesure - 5*props.age-161+props.activiter*100)*0.15)} Kcal</h2>
          }
          <p>Ce niveau de consommation de calories quotidien vous permettra de prendre entre 0,5 et 1 kg par semaine.</p>
          <button  type="submit" className="Menu">Menu</button>

          </div>
        
        </div>
        </form>
        {monTest &&
        
        <div className="">
        <p className="menustyle">Menu du Jour</p>
          <div className="test3">
            <div className="menu">
            <p className="menustyle">Petit-déjeuner</p>
            <h5>Oeuf : X2 180 Kcal </h5> 
            <h5>Fromage blanc : {parseInt(((((parseInt(calorieObjectif()*0.3))-329)*0.3)/98)*100)} Gr { parseInt((parseInt(calorieObjectif()*0.3)-329)*0.3)} Kcal</h5>
            <h5>pain complet : {parseInt(((((parseInt(calorieObjectif()*0.3))-329)*0.7)/247)*100)} Gr { parseInt((parseInt(calorieObjectif()*0.3)-329)*0.7)} Kcal</h5>
            <h5>jus d'orange : 0,33L 149 Kcal</h5>
            <h5>Total Cal : {parseInt(calorieObjectif()*0.3)} Kcal </h5>
            </div>
            <div className="menu">
            <p className="menustyle">déjeuner</p>
            <h5>riz blanc :</h5> 
            <h5>blanc de poulet :</h5>
            <h5>légumes :</h5>
            <h5>banane :</h5>
            <h5>Total Cal :{parseInt(calorieObjectif()*0.4)} Kcal</h5>
            </div>
            <div className="menu">
            <p className="menustyle">Diner</p>
            <h5>saumon grillé :</h5> 
            <h5>patates douces :</h5>
            <h5>légumes :</h5>
            <h5>yaourt :</h5>
            <h5>Total Cal :{parseInt(calorieObjectif()*0.3)} Kcal</h5>

            </div>
           

          </div>

        </div>
        }
        </div>
     );
}
 
export default RapportCalorie;