import React from "react";
import { Form, Button, Row, Col, FormControl, Card ,Link} from "react-bootstrap";
import { CardActions} from "react-mdl";

const PresentationCvpage = () => {
  return (
    <main className="main">
      <div>
      <div className="text-center bg-custom border border-success rounded-pill mb-3">
        <h1>CV Philiance</h1>
        </div>
        <Row className="mb-3">
          <Col>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Votre recherce"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="fa fa-search" variant="outline-success"></Button>
            </Form>
          </Col>
        </Row>
      </div >
      
      <section className="row sectionPresentationCV border border-success rounded">

        <div className="col cvPhiliance">
          <div className="divHautCVphiliance m-3">
            <div className="divTitre">
              <h5 className="text-center w-80">
                Developpeur Front-End et Back-End
              </h5>
            <p>candidat N°0000</p>
              <p>disponibilité 00/00/00</p>
            </div>
          </div>

          <div className="row sectionPresentationCV">
            <div className="cvPhiliance">
              <Card.Img
              className="sourcing"
                variant="top"
                src="images/logo_philiance_sourcing.png"
                widht ="" height = "50"
              />
                <Card className="m-4 bg-secondary text-white">
                  <Card.Body>
                    <Card.Title claasName="text-white">PROFIL :</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, ut.
                    </Card.Text>
                    <Card.Title>CENTRES D'INTERETS :</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, ut.
                    </Card.Text>
                    <Card.Title>CONTACT :</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, ut.
                    </Card.Text>
                    <Card.Link>
                      <a href="http://www.philiance.com/">Philiance Formation</a>
                    </Card.Link>
                    <Card.Img
                    className="formation"
                variant="top"
                src="images/logo_philiance.png"
                widht ="" height = "60"
              />
                  </Card.Body>
                </Card>
            </div>
            <div className=" cvPhiliance">
              <div>
                <Card className="mb-4 ">
                  <Card.Body>
                    <Card.Title>EXPERIENCE PROFESSIONNELLLE</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, ut.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mb-4 ">
                  <Card.Body>
                    <Card.Title>COMPETENCES PROFESSIONNELLES</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      ipsum magnam cum architecto! Sapiente aut a ab suscipit
                      libero possimus?
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mb-4 ">
                  <Card.Body>
                    <Card.Title>FORMATION UNIVERSITAIRE</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="col cvPhiliance ">
          <Card className="mb-4 partieDroite">
            <Card.Body>
              <Card.Title>Informations</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ut.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4 partieDroite">
            <Card.Body>
              <Card.Title>Vidéo</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
                magnam cum architecto! Sapiente aut a ab suscipit libero
                possimus?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4 partieDroite">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default PresentationCvpage;
