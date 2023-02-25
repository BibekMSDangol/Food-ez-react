import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { toast } from "react-toastify";
import workServices from "../services/workServices";

function Addwork() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const updatework = async (e) => {
    console.log(name, description);
    e.preventDefault();
    setImage(
      "https://images.unsplash.com/photo-1606787758881-8b8b0b5b0b1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    );
    try {
      const res = await workServices.create({
        name,
        description,
        price,
        image,
      });
      console.log(res);
      navigate("/work");
      return toast.success("update successfully");
    } catch (error) {
      console.log(error);
      return toast.error("update failed");
    }
  };

  return (
    <Helmet title="Work  details Update">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Food Detail </h3>
              <Form onSubmit={updatework} className="auth__form">
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Food name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Pricer"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormGroup>

                <button
                  type="submit"
                  onClick={updatework}
                  className="buy__btn auth__btn"
                >
                  Update{" "}
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Addwork;
