import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import workServices from "../services/workServices";

function Workadmin({ work, setwork }) {
  useEffect(() => {
    workServices.getAll().then((res) => {
      setwork(res.data);
      console.log(res.data);
    });
  }, []);

  const deleteuser = (id) => {
    var response = window.confirm("Are you sure you want to delete this user?");
    if (response) {
      workServices
        .remove(id)
        .then((response) => {
          console.log(response.data);
          setwork(work.filter((work) => work._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Helmet title="Admin dashbaord">
      
      <CommonSection title="Works " />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <table className="table bordered">
                <thead>
                  <tr>
                    <th> ID </th>
                    <th>Image</th>
                    <th>Food Item</th>
                    <th>Description </th>

                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {work.map((work) => {
                    return (
                      <tr>
                        <td>{work._id}</td>
                        <td>
                          <div className="Product__img">
                            <motion.img
                              whileHover={{ scale: 0.9 }}
                              src={
                                "http://localhost:3001/uploadswork/" +
                                work.image
                              }
                              alt=""
                            />
                          </div>
                        </td>
                        <td>{work.name}</td>
                        <td>{work.description}</td>                       
                        <td>
                          <Link
                            to={`/editwork/${work._id}`}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteuser(work._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <td></td>
                </tbody>
              </table>
             <Link to={"/addwork"} className="btn btn-secondary"> Add New Food</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Workadmin;
