import "../css/Composant.css";

function Option(props) {
    return(
        <button className="option linkCategorie"> {props.option} </button>
    );
}

export default Option;