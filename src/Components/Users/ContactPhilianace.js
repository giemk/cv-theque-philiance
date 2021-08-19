import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';


const ContactPage = () => {
  return (
    <main className="main">
      <div className="text-center bg-custom mb-4 border border-primary rounded-pill">
        <h1>Contact</h1>
      </div>

      <section className="row  border border-primary rounded">
        <div className=" col m-5 ">
          <div>
            <h3>Adresse :</h3>
            <p>Philiance</p>
            <p>Parc Elysée</p>
            <p>37 rue Michel Ange </p>
            <p>91080 Courcouronnes </p>
            <p>Tèl : 01 69 47 45 90</p>
            <p>
              Email :
              <a href="mailto:contact-ildefrance@philiance.com">
                contact-iledefrance@philiance.com
              </a>
            </p>
          </div>
          <div>
            <h3>Ouverture de l'accueil téléphonique :</h3>
            <p> du lundi au vendredi de 8h45 à 18h00</p>
            <p>Tèl : 01 69 47 45 90</p>
          </div>
        </div>
        <div className="col m-5 ">
          <h3>Carte</h3>
          {/* <img src="images/philiancePNG.PNG" id="photo" width="500"  onClick="document.getElementById('photo').style.width='300px';"/> */}
          <img className="imageMap" src="images/philiancePNG.PNG" alt="" />
        </div>
      </section>
    </main>
  );
};
export default ContactPage;
