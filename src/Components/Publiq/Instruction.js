import React from "react";
import { Button } from "react-bootstrap";


const InstructionPage = () => {
  return (
    <div className=" container divValidation">
      <div className="text-center mb-3">
        <h3>Réinitiliser mot de passe</h3>
      </div>
      <div className="divForm">
        <form className="mb-3">
          <label htmlFor="">nouveau mot de passe</label>
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
