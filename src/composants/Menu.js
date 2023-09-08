import "../css/Composant.css";
import LinkCategorie from "../composants/LinkCategorie";
import Panier from "../composants/Panier";
import { useState } from "react";

var  categorie = [
    "Ordinateurs",
    "Périphériques d'entrée et de sortie",
    "Composants internes d'un ordinateur",
    "Réseaux et Connectivité",
    "Stockage de données",
    "Accessoires et périphériques supplémentaires"
];

function Menu(props) {
    return props.isOpen ? 
        <div className="menu">
            <div className="close"> 
                <button className="btn btn-secondary rounded" onClick={() => props.setIsOpen(false)}> 
                    <span class="material-symbols-outlined"> close </span>
                </button>
            </div>
            <h3 > Categorie </h3>
            <div id="Panier"> </div>
            <ul style={{listStyle: "none"}}>
                {categorie.map((element, index) => <li key={index}> <LinkCategorie nom={element} /> </li>)}
            </ul>
            <Panier />
        </div>
        :        
        <button className="openMenu btn btn-secondary rounded" onClick={() => props.setIsOpen(true)} > 
            <span class="material-symbols-outlined"> menu </span> 
        </button>
}

export default Menu;