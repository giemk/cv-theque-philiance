import React from "react";
import { Figure} from "react-bootstrap";

const HomePage = () => {
  return (
  <div className="container mt-5">
  <div className="text-center">
  <h1>Bienvenue sur votre CV-Thèque</h1>
    <Figure>
        <Figure.Image
        width={1200}
        height={1000}
        alt=""
        src="/images/library.jpg"
        />
    </Figure>
  </div>
  </div>
  );
};
export default HomePage;
