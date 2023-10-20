import React from 'react'
import './common-section.css'
import '../styles/tour.css'
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import { Container,Row,Col } from 'reactstrap'
const CommonSection = ({title}) => {
  return (
    <section className='common_section'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection
