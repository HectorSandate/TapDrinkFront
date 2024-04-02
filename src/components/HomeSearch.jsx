import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import '../css/HomePage.css';

function BebidaFormulario() {
  return (
    <div className="container mt-4">
      <Row>
        <Col>
          <h2 className='search-title'>Búsqueda de Bebidas</h2>
          <h5  className='search-subtitle'>Encuentra tu bebida favorita</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Nombre del Cóctel" />
              </Col>
              <Col>
                <Form.Select aria-label="Filtrar">
                  <option>Filtrar</option>
                  <option value="1">Uno</option>
                  <option value="2">Dos</option>
                  <option value="3">Tres</option>
                </Form.Select>
              </Col>
              <Col>
                <Button variant="warning">Buscar</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default BebidaFormulario;
