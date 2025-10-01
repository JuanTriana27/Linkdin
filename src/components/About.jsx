// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../src/styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section py-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <div className="about-image">
                            <img
                                src="/assets/imgs/about.png"
                                alt="Sobre mí"
                                className="img-fluid rounded"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h2 className="section-title mb-4">Sobre Mí</h2>
                        <p className="about-text lead">
                            Soy un Ingeniero Multimedia apasionado por el desarrollo frontend,
                            la creación de experiencias digitales impactantes y aprendiendo backend también.
                            Me especializo en React, JavaScript y diseño de interfaces modernas.
                        </p>
                        <p>
                            Mi objetivo es crear soluciones web que no solo sean visualmente atractivas,
                            sino también funcionales, accesibles y optimizadas para el usuario.
                        </p>
                        <div className="about-details mt-4">
                            <div className="detail-item mb-2">
                                <strong>Nombre:</strong> Juan Esteban Triana González
                            </div>
                            <div className="detail-item mb-2">
                                <strong>Experiencia:</strong> 1 años en desarrollo web
                            </div>
                            <div className="detail-item mb-2">
                                <strong>Email:</strong> trianajuan28@gmail.com
                            </div>
                            <div className="detail-item mb-2">
                                <strong>Ubicación:</strong> Santiago de Cali, Colombia
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;