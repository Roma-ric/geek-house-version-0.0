import  "../css/App.css";
import  "../css/Composant.css";
import "./main.d810cf0ae7f39f28f336.css";
import categorie from "../composants/listCategorie";
import produits_en_promotion from "../composants/listProduitEnPromo";
import Header from "../composants/Header";
import DivImage from "../composants/Div_Image";
import Categorie from "../composants/Categorie";
import Footer from "../composants/Footer";
import Boutique from "../composants/Boutique";
import ProfilUtilisateur from "../composants/ProfilUtilisateur";
import EquipementEnPromo from "../composants/Equipement _en_promo";


function App() {
  return (
    <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
      <div id="haut"> </div>
        <Header nbPromo={produits_en_promotion.length}/>
        {/* ---------- ACCEUIL ---------- */}
        <DivImage texte={"Bienvenue sur notre application web de vente d'équipements informatiques ! Que vous soyez à la recherche d'un nouvel ordinateur, de composants de haute qualité ou des derniers accessoires technologiques, vous êtes au bon endroit. Notre boutique en ligne propose une large sélection de produits provenant des marques les plus réputées de l'industrie informatique."}/>
        {/* <!-- Inscription --> */}
        <div class="modal fade" id="boiteInscription" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"> Inscription </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  ...
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal"> Annuler </button>
                  <button type="button" class="btn btn-primary"> S'inscrire </button>
              </div>
              </div>
          </div>
        </div>
        {/* 
            #carouselExampleSlidesOnly .carousel d|carousel
                  #carousel-inner
                        #carousel-item active
                        #carousel-item 
        */}
        {/* ---------- CATEGORIE ---------- */}
        <h3 id="Categorie" className="border rounded p-3 btn-outline-dark"> Catégories </h3>
        <div className="categories">
          {
              categorie.map((element, index) => (<Categorie photo={element.photo} categorie={element.nom} />))
          }
        </div>
        
        {/* ---------- EN PROMOTION ---------- */}
        <h3 id="Promo" className="border rounded p-3 btn-outline-dark"> En promotion 🎊 </h3>
        <div className="categories">
          {
              produits_en_promotion.map((element, index) => <EquipementEnPromo pourcentage_promo={element.pourcentage_promo} photo={element.photo} ancien_prix={element["ancien-prix"]} info={element.info} prix={element.prix} />)
          }
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ---------- BOUTIQUE ---------- */}
        <h3 id="Articles" className="border rounded p-3 btn-outline-dark"> Articles </h3>
        <Boutique />
        {/* ---------- PROFIL UTILISATEUR ---------- */}
        <h3 id="Profil" className="border rounded p-3 btn-outline-dark"> Profil Utilisateur </h3>
        <ProfilUtilisateur />
        <Footer /> 
        {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
    </div> 
  );
}


export default App;
