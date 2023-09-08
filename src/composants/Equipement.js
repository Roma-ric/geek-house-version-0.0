import "../css/Composant.css";


function Equipement(props) {
    return(
        <div class="card" style={{width: "18rem"}}>
            <img class="card-img-bottom" src={props.photo} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title"> {props.info} <br />  <span className="text-warning"> {props.prix} </span>  </h5>
                <a href="" class="btn btn-outline-success"> Ajouter au panier  </a>
            </div>
        </div>
    );
}

export default Equipement;