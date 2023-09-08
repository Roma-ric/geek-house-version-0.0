import "../css/Composant.css";
import { useState } from "react";
import Menu from "../composants/Menu";
import Equipement from "./Equipement";
import produits from "./listProduit";



function Boutique() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="boutique">
            <div className="menu_alignement" >
                <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div> 
            <div className="produits" >
                {
                    produits.map((element, index) => <Equipement photo={element.photo} info={element.info} prix={element.prix} />)
                }
            </div>
        </div> 
    );
}

export default Boutique;