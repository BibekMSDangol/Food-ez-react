import { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import fb from "../assets/images/b1.jpg"
import b2 from "../assets/images/b2.jpg"
import b3 from "../assets/images/b3.jpg"
import heroImg from "../assets/images/bg.jpg";
import counterImg from "../assets/images/counter-timer-img.png";

import Services from "../components/services/Services";

import ProductsList from "./../components/UI/ProductsList";

import products from "./../assets/data/products";
import Clock from "../components/UI/Clock";

import { ListGroup, ListGroupItem } from "reactstrap";
import workServices from "../services/workServices";

function Home({ isLogged, setIsLogged }) {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const [work, setwork] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    workServices
      .getAll()
      .then((response) => {
        console.log(response.data);
        setwork(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <UncontrolledCarousel
        items={[
          {
            altText: "Banner 1",
            caption: "Banner 1",
            key: 1,
            src: fb,
          },
          {
            altText: "Banner 2",
            caption: "Banner 2",
            key: 2,
            src: b2,
          },
          {
            altText: "Banner 3",
            caption: "Banner 3",
            key: 3,
            src: b3,
          },
        ]}
      />
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">
                  {isLogged} {year}
                </p>
                <p className="hero__subtitle">
                  We're selling these products in {year}
                </p>
                <h2 className="text-white">An easy way to order foods</h2>
                <h1 className="text-white">Giving your Hunger a new Option.</h1>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="shop">ORDER NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={work} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      {/* <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Hurry Limited Offers </h4>
                <h3 className="text-white fs-5 mb-3">Quality Products</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Our App</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text__end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Our Popular Products</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>

      <div>
        <ListGroup>
          {work.map((work) => {
            return (
              <ListGroupItem key={work._id}>
                <h3>{work.name}</h3>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </Helmet>
  );
}

export default Home;
