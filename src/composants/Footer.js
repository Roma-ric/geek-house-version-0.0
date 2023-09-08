import "../css/Composant.css";
import facebook from "../images/facebook.png";
import whatsapp from "../images/whatsapp.png";

function Footer() {
    return(<div className="footer">
                <div className="partie1">
                    <h6> LIENS UTILES</h6>
                    <ul style={{listStyle: "none"}}>
                        <a href={""}> <li> À propos </li></a>
                        <a href={""}> <li> Services </li></a>
                        <a href={""}> <li> Contacts </li></a> 
                    </ul>
                </div>
                <div className="partie2">
                    <h6> MAIL </h6>
                    <input name="mail" type="mail" className="rounded" placeholder="" />
                    <br />
                    <button className="btn btn-outline-light p-2 "> Recevoir </button>
                </div>
                <div className="partie3">
                    <h6> CONTACTS </h6>
                    <p> Porto-Novo, Bénin , BP 1038 , Rue 177  </p>
                    <ul className="reseaux_sociaux" style={{listStyle: "none"}}>
                        <li> <a href=""> <img className="logo" src={facebook} alt="logo" /> </a> </li>
                        <li> <a href=""> <img className="logo" src={whatsapp} alt="logo" /> </a> </li>
                    </ul>
                </div>
           </div>);
}

export default Footer;