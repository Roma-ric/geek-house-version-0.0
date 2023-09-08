import "../css/Composant.css";

function Boutton(props) {
    return (<a href={props.lien}> 
                <button className="btn btnInscri pl-5 pr-5 mr-2 rounded"> {props.texte} </button>
            </a>);
}

export default Boutton;