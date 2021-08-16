import React from "react";
import { Button } from "react-bootstrap";

const ValidationEmailPage = () => {
  return (
    <div className=" container divValidation mt-5 w-50">
      <div className="text-center mb-3">
        <h3>Valider votre email</h3>
      </div>
      <div className="divForm">
        <form className="mb-3">
          <input type="text" placeholder="Code de validation" />
        </form>
        <Button variant="outline-primary" type="submit"href="/Connexion">
          Valider
        </Button>
      </div>
    </div>
  );
};
export default ValidationEmailPage;
