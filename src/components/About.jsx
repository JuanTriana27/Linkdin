// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../src/styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} md={10} className="text-center">
                        <h2 className="section-title mb-4">Sobre Mí</h2>
                        <p className="about-text lead">
                            Soy Ingeniero Multimedia con una sólida orientación hacia el desarrollo frontend y 
                            la creación de experiencias digitales atractivas e intuitivas. Actualmente amplío mis 
                            conocimientos en desarrollo backend para complementar mi perfil técnico.
                        </p>
                        <p>
                            Mi objetivo es crear soluciones web que no solo sean visualmente atractivas,
                            sino también funcionales, accesibles y optimizadas para el usuario.
                        </p>
                        <div className="about-details mt-4 mx-auto">
                            <div className="detail-item mb-2">
                                <strong>Nombre:</strong> Juan Esteban Triana González
                            </div>
                            <div className="detail-item mb-2">
                                <strong>Experiencia:</strong> 1 año en desarrollo web
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