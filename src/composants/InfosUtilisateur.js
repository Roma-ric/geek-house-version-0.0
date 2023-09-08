import "../css/Composant.css";
import { useState } from "react";
import PhotoProfil from "./Photo_Profil";
import Boutton from "./Boutton";
import LinkCategorie from "./LinkCategorie";
import Option from "./Option";

var option = [
    "Voir mon historique d'achat",
    "Modifier mes informations personnelles" ,
    "Gérer mes adresses de livraison",
    "Gérer mes modes de paiement ",
    "Gérer ma liste de souhaits ",
    "Voir et gérer les évaluations et les commentaires laissés sur les produits",
    "Accéder aux offres spéciales et aux promotions personnalisées",
];

function InfosUtilisateur() {
    const [mot_de_passe, setMot_de_passe] = useState("************");
    return(
        <div> 
            <div className="infosUtilisateur">
                <PhotoProfil />
                <div className="infos_user">
                    <LinkCategorie nom={"AKODJENOU"}/>
                    <LinkCategorie nom={"Romaric"}/>
                    <LinkCategorie nom={"07-09-2003"}/>
                    <LinkCategorie nom={"romaricakodjenou54@gmail.com"}/>
                    <LinkCategorie nom={"+22966474345"}/>
                    <div className="mot_de_passe">
                        <LinkCategorie nom={mot_de_passe}/>
                        <button className="btn profil_user" onClick={() => setMot_de_passe("@In&te%llo1")}> <span class="material-symbols-outlined"> visibility </span> </button> 
                        <button className="btn profil_user" onClick={() => setMot_de_passe("***********")}> <span class="material-symbols-outlined"> visibility_off </span> </button> 
                    </div>
                </div>
            </div>
            <br/>
                {option.map((element, index) => <Option option={element}/>)}    
        </div>
    );
}

export default InfosUtilisateur;