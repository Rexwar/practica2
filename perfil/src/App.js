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

              <div class="col-sm">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>{" "}
                  {data.Email}
                </div>
                <div class="col-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>{" "}
                  {data.City}, {data.Country}
                </div>
              </div>
              <div class="resumen"> {data.Summary}</div>
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
              <div className="d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bookmark-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
                {"  "}
                <h3>Hobbies:</h3>
              </div>
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
