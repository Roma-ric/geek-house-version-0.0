import "../css/Composant.css";
import { useState } from "react";

var achat_en_attente = [

];

function Panier() {
    const [panier, setPanier] = useState([]);
    return(
        <div className="panier">
            <h3> Panier </h3> 
            <div className="achat_en_attente">

            </div>
        </div>
    );
}

export default Panier;