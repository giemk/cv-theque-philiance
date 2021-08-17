import React from "react";
import { Button,Image} from "react-bootstrap";

const ReseauSociauxPage = () => {
  return (
    <div className=" text-center">
      <h5> Se connecter avec </h5>
      <div>
      <Button  variant="warning" type="submit" className="mt-4 btn-reseaux"href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
      <i> <Image
      width={30}
      height={30}
      id="google"  src="/images/Google.png" alt=""/>
      </i>
       Google   
       </Button>
      </div>
      <Button variant="primary" type="submit" className="mt-4 btn-reseaux"href="https://fr-fr.facebook.com/">
        <i className="fab fa-facebook"></i>
        Facebook
      </Button>
      <br />
      <Button variant="success" type="submit" className="mt-4 btn-reseaux"href="https://twitter.com/share?ref_src=twsrc%5Etfw">
        <i className="fab fa-twitter"></i>

        Twitter
      </Button>
      <br />
      <Button variant="dark" type="submit" className="mt-4 btn-reseaux"href="https://github.com/">
        <i className="fab fa-github"></i>
        GitHub
      </Button>
      <br />
      <Button variant="info" type="submit" className="mt-4 btn-reseaux"href="https://www.linkedin.com/home">
        <i className="fab fa-linkedin-in"></i>
        LinkedIn
      </Button>
    </div>
  );
};
export default ReseauSociauxPage;
