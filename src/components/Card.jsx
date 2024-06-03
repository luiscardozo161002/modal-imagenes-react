import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

import alien_uno from "../assets/alien_uno.jpg";
import alien_dos from "../assets/alien_dos.jpg";
import alien_tres from "../assets/alien_tres.jpg";

function Card() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [seleccionarImagen, setSeleccionarImagen] = useState("");
  const [resolucion, setResolucion] = useState("");
  const [nombreImagen, setNombreImagen] = useState("");

  const handleShow = (imagen, resolucion, nombre) => {
    setSeleccionarImagen(imagen);
    setResolucion(resolucion);
    setNombreImagen(nombre);
    setMostrarModal(true);
  };

  const handleClose = () => {
    setMostrarModal(false);
  };

  return (
    <div className="container-fluid d-flex justify-content-center flex-wrap">
      <div className="card col-2 p-3 mb-3 m-2" onClick={() => handleShow(alien_uno, "125x150", "alien_uno")}>
        <img src={alien_uno} />
      </div>
      <div className="card col-2 p-3 mb-3 m-2" onClick={() => handleShow(alien_dos, "250x380", "alien_dos")}>
        <img src={alien_dos} />
      </div>
      <div className="card col-2 p-3 mb-3 m-2" onClick={() => handleShow(alien_tres, "420x350", "alien_tres")}>
        <img src={alien_tres} />
      </div>

      <Modal show={mostrarModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Imagen | Alien</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={seleccionarImagen} alt="Selected Alien" style={{ width: "100%" }} />
          <p>Resolución de la imagen: {resolucion}</p>
          <p>Nombre de la imagen: {nombreImagen}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Card;
