import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  // state
  const [users, setUsers] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    axios.get("http://localhost:3060/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete("http://localhost:3060/users/" + id);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(users);

  return (
    <main className="container main ">
         <div className="text-center">
      <div className="text-center bg-custom  border border-primary rounded-pill">
      <h1>Liste des utilisateurs</h1>
      </div>
      <div>
      <Table striped bordered hover size="sm mt-4 border border-primary rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Numero de telephone</th>
            <th>Rôle</th>
            <th>Actions</th>
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
              <td>{user.tel}</td>
              <td>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </Table>
      {/* <div className="row border rounded w-50"> */}
      <Link className="btn btn-outline-primary m-2" to="/Inscription">
        Ajouter un utilisateur
      </Link>
      <Link className="btn btn-outline-danger m-2" to="/SupprimerCompte">
        Supprimer un utilisateur
      </Link>
    </div>
    </div>
    </main>
  );
};

export default UserList;
