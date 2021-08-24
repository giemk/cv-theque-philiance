import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReseauxSociauxPage from "../Users/ReseauxSociaux";
import GoogleBtn from "../Users/GoogleBtn";
import FacebookBtn from "../Users/FacebookBtn";
import TwitterBtn from "../Users/TwitterBtn";
import GithubBtn from "../Users/GithubBtn";

const ConnexionPage = () => {
  return (
    <div className="main container mt-3 w-50">
      <div className="text-center bg-custom border border-primary rounded-pill mb-3">
        <h1>Connectez-vous</h1>
      </div>

      <div className="border border-primary rounded">
      <Form>
        <Form.Group className="m-3">
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre nom" />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Check type="checkbox" label="Se souvenir de moi" />
          <Link to="/ValidationPass"> Mot de passe oublié ?</Link>
        </Form.Group>
        <Button variant="outline-primary m-3" type="submit"href="/Profil">
          Se connecter
        </Button>
      </Form>
      </div>

      <h4 className="text-center">Utiliser les réseaux sociaux</h4>

      <div className="main reseauSociauxCnx border border-primary rounded ">
      <h5 className="text-center mt-4">Se connecter avec </h5>

      <div className="row w-50">

        <div className="google">
      <GoogleBtn />
      </div>
        <div className="twitter">
      <TwitterBtn />
      </div>
        <div className="facebook">
      <FacebookBtn />
      </div>
        <div className="github">
      <GithubBtn />
      </div>

      <ReseauxSociauxPage />
      </div> 

      </div>
    </div>
  );
};
export default ConnexionPage;
