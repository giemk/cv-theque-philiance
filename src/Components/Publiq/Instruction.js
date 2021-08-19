import React from "react";
import { Button } from "react-bootstrap";
import ValiderPassPage from "./ValiderMotdePass";


const InstructionPage = () => {
  return (
    <div className=" container divValidation">
      <div className="text-center mb-3">
      <div className=" bg-custom border border-primary rounded-pill">
        <h3>Réinitialiser mot de passe</h3>
        </div>
      </div>
      <div className="divForm">
      <form className="mb-3">
          <label htmlFor="">nouveau mot de passe</label>
          <input type="text" placeholder="" />
        </form>
        <form className="mb-3">
          <label htmlFor="">confirmer mot de passe</label>
          <input type="text" placeholder="" />
        </form>

        <Button variant="outline-primary" type="submit"href="/Connexion">
          Envoyer
        </Button>
      </div>
    </div>
  );
};
export default InstructionPage;
