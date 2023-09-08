import "../css/Composant.css";

function LinkCategorie(props) {
    return(
        <button className=" btn btn-secondary rounded linkCategorie"> {props.nom} </button>
    );
}

export default LinkCategorie;