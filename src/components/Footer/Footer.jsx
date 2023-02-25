import React from 'react'
import  './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/FoodEz.png';

function Footer() {

  const year = new Date().getFullYear();
  return ( 
   <footer className='footer'>
    <Container>
      <Row>
        <Col lg='15' className='mb-4' md='6'>
          <div className="logo">
            <div className='logo-f'>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1 className='text-white'>FoodEz</h1>
            </div>
          </div>
          <p className='footer_text mt-4 text-white'>
           Order foods from anywhere at anytime .
          </p>
        </Col>
        <Col lg='3' md='4'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>Kathmandu, Nepal</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
              <p>9800000000</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
              <p>foodez@gmail.com</p>
              </ListGroupItem>
           </ListGroup>   
          </div>
        </Col>
        
        <Col lg='2' md='3' className='mb-4'>
        <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Socials</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'><i class="ri-facebook-box-fill"></i> Facebook</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'><i class="ri-instagram-line"></i> Instagram</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'><i class="ri-twitter-fill"></i> Twitter</Link>
              </ListGroupItem>
           </ListGroup>   
          </div>

        </Col>
        
         <Col lg='12'>
          <p className="footer__copyright">Copyright {year}, DownWork  All right reserved.</p>
         </Col>
      </Row>
    </Container>
  </footer>
 )
}

export default Footer;