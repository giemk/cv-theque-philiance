import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import InfoPersoRecruteurPage from "./InfoPersoRecruteur";
import InfoProfessRecruteurPage from "./InfoProfessRecruteur";
import InfoConnexPage from "../Users/InfoConnexion";
import SuppComptePage from "../Users/SupprimerCompte";
import ReseauSociauxPage from "../Users/ReseauxSociaux";
import GoogleBtn from "../Users/GoogleBtn";
import FacebookBtn from "../Users/FacebookBtn";
import TwitterBtn from "../Users/TwitterBtn";
import GithubBtn from "../Users/GithubBtn";

const ProfilEntreprisePage = () => {
  const [date] = useState(new Date());
  // const [show, setShow] = useState(false);

  console.log(date.toLocaleDateString());
  return (
    <main className="container main border border-primary rounded">
      <div>
        <Row className="d-flex align-items-center">
          <Col xs={6} md={2}>
            <Image src="https://picsum.photos/100" roundedCircle />
          </Col>
          <Col>
          <div className="text-center bg-custom border border-primary rounded-pill mb-3">
        <h1>Profil Entreprise</h1>
        </div>
          </Col>
        </Row>
      </div>
      <hr />
      <section id="sectionID">
        <div id="profilDiv1">
          <InfoPersoRecruteurPage />
          <InfoProfessRecruteurPage />
          <InfoConnexPage />
          <SuppComptePage />
        </div>
        <div id="profilDiv2" className="container border border-primary rounded">
          <h4 className="text-center">Réseaux sociaux</h4>
          <p>
            Reliez votre compte à un réseau social pour l'utiliser comme moyen
            de connexion
          </p>
          <GoogleBtn />
          <TwitterBtn />
          <FacebookBtn />
          <GithubBtn />
        </div>
      </section>
    </main>
  );
};
export default ProfilEntreprisePage;
