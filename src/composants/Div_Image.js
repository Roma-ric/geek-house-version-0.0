import "../css/Composant.css";

function DivImage(props) {
    return (<div className="div_image">
                <p> {props.texte} </p>
                <div className="inscription">
                    <button data-toggle="modal" data-target="#boiteInscription" className="btn btn-outline-light p-3 mt-3 "> S'incrire maintenant </button>
                </div>
            </div>);
}

export default DivImage;