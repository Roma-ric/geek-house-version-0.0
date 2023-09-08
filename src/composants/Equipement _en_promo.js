import "../css/Composant.css";

function Equipement_en_promo(props) {
    return(
        <div class="card" style={{width: "18rem", marginBottom: "10px"}}>
            <span class="btn btn-success rounded-0"> {props.pourcentage_promo} </span>
            <img class="card-img-bottom" src={props.photo} alt="Card cap"/>
            <div class="card-body">
                <h5 class="card-title"> {props.info} <br /> <span style={{textDecoration: "line-through"}} className="text-secondary"> {props.ancien_prix} </span> &nbsp; <span className="text-warning"> {props.prix} </span>  </h5>
                <a href="" class="btn btn-outline-success"> Ajouter au panier  </a>
            </div>
        </div>
    );
}

export default Equipement_en_promo;