import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Fragment, useState} from "react";
import {Calendar} from "react-calendar";
import { Form, Row, Col, FormControl, Card,CardGroup } from "react-bootstrap";


       const ListeCv = () => {
       const [users, setUsers] = useState([]);
       const [date, setDate] = useState(new Date());
       const [show, setShow] = useState(false);
       
  return (
    <main className="container main ">
      <div className="text-center">
      <div className="text-center bg-custom border border-primary rounded-pill mb-3">
        <h1>Liste des CV</h1>
        </div>
             <div className="rechercheDivHaut mb-4">
        <Row>
          <Col>
            <h6 className="titre">Disponibilt√©</h6>
            <Row>
              <Col>
                <p>√† partir du </p>
              </Col>
              <Col>
                <Fragment className="d-flex">
                  <Button onClick={() => setShow(!show)} variant="outline-success">
                    Calendrier
                  </Button>
                  {show ? <Calendar onChange={setDate} value={date} /> : null}
                </Fragment>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Disponible actuellement " />
              </Form.Group>
            </Row>
            <h6 className="titre">Contrat</h6>
            <Row>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Contrat Recherch√©</option>
                  <option value="1">CDD</option>
                  <option value="2">CDI</option>
                  <option value="2">Stage</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <h6 className="titre">Experience professionnelle</h6>
            <Row>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Ann√©ees d'experience</option>
                  <option value="1">d√©butant</option>
                  <option value="2">1-2 ans</option>
                  <option value="2">3-5 ans</option>
                  <option value="2">+5 ans</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <h6 className="titre">Formation</h6>
            <Row>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Formation</option>
                  <option value="1">d√©butant</option>
                  <option value="2">Aucun dipl√īme</option>
                  <option value="2">Bac</option>
                  <option value="2">Bac +2</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <h6 className="titre"> Cursus</h6>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Cursus</option>
                  <option value="1">DW</option>
                  <option value="2">DWWM</option>
                  <option value="2">Community manager</option>
                  <option value="2">Bac +2</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <h6 className="titre"> Langues √©trang√®res</h6>
            <Row>
              <Col>
                <input type="radio" value="Anglais" name="langues" /> Anglais
              </Col>
            </Row>
            <Row>
              <Col>
                <input type="radio" value="Espagnol" name="langues" /> Espagnol
              </Col>
            </Row>
            <Row>
              <Col>
                <input type="radio" value="Arabe" name="langues" /> Arabe
              </Col>
            </Row>
          </Col>
          <Col>
            <h6 className="titre">Langages de programations</h6>
            <Row>
              <Col>
                <input type="radio" value="HTML" name="langage" /> HTML
              </Col>
            </Row>
            <Row>
              <Col>
                <input type="radio" value="CSS" name="langage" /> CSS
              </Col>
            </Row>
            <Row>
              <Col>
                <input type="radio" value="Javascript" name="langage" />{" "}
                Javascript
              </Col>
            </Row>
            <Row>
              <Col>
                <input type="radio" value="PHP" name="langage" /> PHP
              </Col>
            </Row>
            <Row>
              <Col>
                <input type="radio" value="MySQL" name="langage" /> MySQL
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="text-end">
          <Button variant="outline-success" type="submit">
            filtrer
          </Button>
        </div>
      </div>
      <div className=" w-100 border border-success rounded">
      <Table striped bordered hover size="sm"> 
        <thead>
          <tr>
            <th>#</th>
            <th>Nom-Pr√©nom</th>
            <th>CV publi√©</th>
            <th>Derni√®re activit√©</th>
            <th>Supprimer le CV</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td key={user.id}>
                {user.lastname}
                {user.firstname}
              </td>
              <td>{user.email}</td>
              <td>{user.tel}</td> */}
              {/* <td>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </td> */}
            {/* </tr> */}
        </tbody>
      </Table> 
      <Link className="btn btn-outline-success m-2" to="/MonProfilCv">
        Ajouter un CV
      </Link>
      <Link className="btn btn-outline-danger m-2" to="/MonProfilCv">
        Supprimer un CV
      </Link>
    </div>
    </div>
    </main>
  );
};

export default ListeCv;
