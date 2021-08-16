import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReseauSociauxPage from "../Users/ReseauxSociaux";

const ConnexionPage = () => {
  return (
    <div className="container mt-5 w-50 main">
      <div className="text-center">
        <h1>Connectez-vous</h1>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre nom" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Se souvenir de moi" />
          <Link to="/ValidationPass"> Mot de passe oublié ?</Link>
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Se connecter.
        </Button>
      </Form>
      <h4 className="text-center">Utiliser les réseaux sociaux</h4>
      <div className="reseauSociauxCnx">
        <ReseauSociauxPage />
      </div>
    </div>
  );
};
export default ConnexionPage;
