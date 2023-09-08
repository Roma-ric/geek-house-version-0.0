import "../css/Composant.css";
import Boutton from "./Boutton";
import { useState } from "react";
import geek_house from "../images/geek_house.jpg";



function Header(props) { //texes contenus dans les differents bouttons du milieu header
    const [active, setActive] = useState("search-wrapper");
    return (
            <nav class="app-header header-shadow navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <div className="part1"> 
                    <img className="logo" src={geek_house} alt="logo" />
                    <h6 className="logoName"> Geek house </h6>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="part2">
                    <a href="haut">
                        <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Acceuil  </button>
                    </a>
                    <a href="#Categorie">
                        <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Catégorie  </button>
                    </a>
                    <a href="#Promo">
                        <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Promotion  <span class="badge badge-danger"> {props.nbPromo} </span>  </button>
                    </a>
                    <a href="#Articles">
                        <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Articles </button>
                    </a>
                    <a href="">
                        <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Aides  </button>
                    </a>
                </div>
                    <div class={active} >
                        <div class="input-holder">
                            <input type="text" class="search-input" placeholder="Type to search"/>
                            <button onClick={() => setActive("search-wrapper active")} class="search-icon"><span></span></button>
                        </div>
                        <button onClick={() => setActive("search-wrapper")} class="btn close"> </button>
                    </div>
                </div>
                </div>
            </nav>
            // <header className="header">
                // <div className="part1"> 
                //     <img className="logo" src={geek_house} alt="logo" />
                //     <p className="logoName"> Geek house </p>
                // </div>
                // <div className="part2">
                //     <a href="haut">
                //         <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Acceuil  </button>
                //     </a>
                //     <a href="#Categorie">
                //         <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Catégorie  </button>
                //     </a>
                //     <a href="#Promo">
                //         <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Promotion  <span class="badge badge-danger"> {props.nbPromo} </span>  </button>
                //     </a>
                //     <a href="#Articles">
                //         <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Articles </button>
                //     </a>
                //     <a href="">
                //         <button className="btn btnInscri p-3 pl-5 pr-5 ml-2 rounded"> Aides  </button>
                //     </a>
                // </div>
                // <div class={active} >
                //     <div class="input-holder">
                //         <input type="text" class="search-input" placeholder="Type to search"/>
                //         <button onClick={() => setActive("search-wrapper active")} class="search-icon"><span></span></button>
                //     </div>
                //     <button onClick={() => setActive("search-wrapper")} class="btn close"> </button>
                // </div>
            //     <div className="part3">
                    
            //         <a href="#Panier" className="mr-2">
            //             <button className="btn profil_user"> 
            //                 <span class="material-symbols-outlined"> shopping_cart_checkout </span>
            //             </button>
            //         </a>
            //         <a href="#Profil">
            //             <button className="btn profil_user"> 
            //                 <span class="material-symbols-outlined"> account_circle </span> 
            //             </button>
            //         </a>
    
            //     </div>
            // </header>
    );
}

export default Header;