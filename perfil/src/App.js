import { useState, useEffect } from "react";
import { Row, Container, Col, Card, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profile")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="container">
      {/* <Container> */}
      {data ? (
        <div>
          <Container className="Persona">
            <Card className="align-items-center presentacion">
              <h1>
                {data.Name} {data.Lastname}
              </h1>
              <div class="row">
              <i class="bi bi-envelope"></i>
                <div class="col-sm"> 
                {data.Email}</div>
                <div class="col-sm">  {data.City}, {data.Country}</div>
                
              </div>
              <p> {data.Summary}</p>
            </Card>
          </Container>
          <Row>
            <Col>
              <div className="d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                  <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                </svg>
                <h3 className="tit">Frameworks:</h3>
              </div>

              <Table striped>
                <tbody>
                  {data.Frameworks.map((framework, index) => (
                    <tr key={index}>
                      <Row>
                        <Col>
                          {">"}
                          {framework.Name}
                        </Col>
                        <Col>
                          <Col>Nivel: {framework.Level}</Col>
                          <Col>Desde: {framework.Year}</Col>
                        </Col>
                      </Row>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col>
              <h3>Hobbies:</h3>
              <Table>
                {data.Hobbies.map((hobby, index) => (
                  <tr key={index}>
                    <row>
                      <div className="tituloHobbie">{hobby.Name}</div>
                      <div className="descripcionHobbie">
                        {hobby.Description}
                      </div>
                    </row>
                  </tr>
                ))}
              </Table>
            </Col>
          </Row>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
      {/* </Container> */}
    </div>
  );
}

export default App;
