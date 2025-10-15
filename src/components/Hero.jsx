// src/components/Hero.js
import React from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { RiPlayFill, RiInstagramLine, RiGithubFill, RiLinkedinFill } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/Hero.css';

const Hero = () => {
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate();

    const handleShowCV = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleOpenTrabajos = () => {
        navigate('/trabajos');
    };

    return (
        <section className="hero">
            {/* Redes Sociales */}
            <div className="social-icons-hero">
                <a href="https://www.instagram.com/juan_triiana/" target="_blank" rel="noreferrer">
                    <RiInstagramLine />
                </a>
                <a href="https://www.linkedin.com/in/juan-triana27/" target="_blank" rel="noreferrer">
                    <RiLinkedinFill />
                </a>
                <a href="https://github.com/JuanTriana27" target="_blank" rel="noreferrer">
                    <RiGithubFill />
                </a>
            </div>

            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="hero-text">
                        <h5>Frontend Developer</h5>
                        <h1>Juan Triana</h1>
                        <div className="profile-statement">
                            <h3 className="fresh-graduate">Ingeniero Multimedia</h3>
                        </div>
                        <div className="d-flex gap-3 flex-wrap">
                            <Button variant="primary" onClick={handleShowCV}>CV</Button>
                            <Button variant="outline-light" onClick={handleOpenTrabajos}>
                                <RiPlayFill className="me-2" />Mirá mis Trabajos
                            </Button>
                        </div>
                    </Col>

                    <Col lg={6} className="hero-img text-center text-lg-end">
                        <img
                            src="/assets/imgs/Foto_Juan_Triana.jpg"
                            alt="Juan Triana"
                            className="img-fluid hero-image"
                        />
                    </Col>
                </Row>
            </Container>

            {/* Modal para CV */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Mi CV</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: '80vh' }}>
                    <iframe
                        src="/assets/PDF/CV.pdf"
                        title="CV"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', minHeight: '70vh' }}
                    />
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default Hero;