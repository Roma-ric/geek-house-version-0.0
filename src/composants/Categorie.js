import "../css/Composant.css";

function Categorie(props) {
    return(<a href={props.lien} > 
                {/* 
                  card
                        card-img-top
                        card-body
                            card-title
                            card-text
                */}
                <div class="card m-1" style={{width: "18rem"}}>
                    <img class="card-img-bottom" src={props.photo} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title"> {props.categorie} </h5>
                        <a href="" class="btn btn-primary"> Voir plus </a>
                    </div>
                </div>
           </a>);
}

export default Categorie;