import "./Faq.css";

function Faq() {
  return (
    <div className="faq_content">
      <section className="faq_img">
        <h1>Des Questions ?</h1>
      </section>
      <section className="faq_section_main_content">
        <section className="faq_searchbar">
          <div class="flexbox">
            <div class="search">
              <div>
                <input
                  type="text"
                  placeholder="Posez votre question.... "
                  required
                />
              </div>
            </div>
          </div>
        </section>
        <section className="faq_content2">
          <div className="faq_content_div">
            <h2>FAQ - Utilisation de l'outil emmaus</h2>

            <h3>
              Q: Comment fonctionne l'estimation de matériel informatique ?
            </h3>
            <p>
              Notre estimation de matériel informatique est basée sur plusieurs
              facteurs tels que la marque, le modèle, l'âge, l'état général et
              les spécifications techniques du produit.
            </p>

            <h3>Q: Quels types de produits puis-je estimer ?</h3>
            <p>
              Vous pouvez estimer des ordinateurs portables, des tablettes et
              des téléphones mobiles.
            </p>

            <h3>Q: Comment puis-je obtenir une estimation précise ?</h3>
            <p>
              Pour obtenir une estimation précise, veuillez fournir autant de
              détails que possible sur le produit, y compris sa marque, son
              modèle, son état physique et son fonctionnement.
            </p>

            <h3>Q: Combien de temps faut-il pour obtenir une estimation ?</h3>
            <p>
              Une fois que vous avez soumis les détails du produit, nous vous
              fournirons une estimation dans les 24 heures ouvrables.
            </p>

            <h3>Q: Quelles sont les options de paiement disponibles ?</h3>
            <p>
              Nous offrons des options de paiement par virement bancaire ou par
              chèque.
            </p>

            <h3>Q: Puis-je estimer plusieurs produits à la fois ?</h3>
            <p>
              Oui, vous pouvez estimer plusieurs produits en utilisant notre
              formulaire d'estimation en ligne.
            </p>

            <h3>
              Q: Quelle est la politique de confidentialité de vos données ?
            </h3>
            <p>
              Nous prenons la confidentialité de vos données très au sérieux.
              Toutes les informations que vous fournissez sont traitées de
              manière sécurisée et confidentielle conformément à notre politique
              de confidentialité.
            </p>

            <h3>Q: Comment puis-je contacter le support client ?</h3>
            <p>
              Vous pouvez contacter notre équipe de support client en utilisant
              le formulaire de contact sur notre site Web ou en appelant notre
              numéro de support dédié.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Faq;
