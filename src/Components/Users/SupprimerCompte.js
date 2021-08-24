import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SuppComptePage = () => {
  return (
    <main className="container main mt-4">
    <div className="text-center">
    <div id="">
      <div className="border border-primary rounded-pill">
        <h3>Supprimer un compte</h3>
        </div>
        <div className="border border-primary mt-4">
          <Form>
            <Row>
              <Col md={6}>
                <Form.Select aria-label="Default select example">
                  <option>Pour quelle raison</option>
                  <option value="1">raison 1</option>
                  <option value="2">raison 2</option>
                </Form.Select>
              </Col>
              <Col>
                <Button variant="outline-danger" type="submit" href="/Profil">
                  Supprimer mon profil
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
    </main>
  );
};
export default SuppComptePage;
