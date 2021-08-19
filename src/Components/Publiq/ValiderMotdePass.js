import React from "react";
import { Button } from "react-bootstrap";

const ValiderPassPage = () => {
  return (
    <div className=" container divValidation ">
      <div className="text-center mb-3">
      <div className=" bg-custom border border-primary rounded-pill">
        <h3>Mot de passe oublié</h3>
        </div>
      </div>
      <div className="divForm">
        <form className="mb-3">
          <label htmlFor="">EMAIL</label>
          <input type="text" placeholder="" />
        </form>
        <Button variant="outline-primary" type="submit"href="/Instruction">
          M'envoyer les instructions
        </Button>
      </div>
    </div>
  );
};
export default ValiderPassPage;
