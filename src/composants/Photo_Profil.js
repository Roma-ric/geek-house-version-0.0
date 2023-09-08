import "../css/Composant.css";
import DivImage from "./Div_Image";

function PhotoProfil() {
    return(
        <div className="photoProfil">
            <div className="photoUser">
                
            </div>
            <form method="" className="recupPhoto">
                <input name="file" className="file" type="file"  /> <br />
                <input name="submit" className="submit" type="submit" />
            </form>
        </div>
    );
}

export default PhotoProfil;