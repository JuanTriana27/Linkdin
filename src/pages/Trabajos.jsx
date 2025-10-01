// src/pages/Trabajos.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { RiExternalLinkLine, RiGithubLine } from '@remixicon/react';
import '../../src/styles/Trabajos.css';

const Trabajos = () => {
    const [loadedIframes, setLoadedIframes] = useState({});

    const projects = [
        {
            id: 1,
            title: 'Store Fly - E-commerce de Aviones',
            description: 'E-commerce especializado en venta de aviones y productos aeronáuticos. Desarrollado con HTML, CSS, JavaScript y Three.js para modelos 3D.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
            liveLink: 'https://tienda-aviones.vercel.app/',
            githubLink: 'https://github.com/JuanTriana27/Tienda-Aviones',
            useIframe: true
        },
        {
            id: 2,
            title: 'Cali Travel Guide',
            description: 'Trabajo de grado enfocado en turismo local en Cali, Colombia. Desarrollado con React, Node.js y MongoDB.',
            technologies: ['React', 'Node.js', 'MongoDB' , 'CSS3', 'API REST', 'Bootstrap', 'EmailJS'],
            liveLink: 'https://calitravelguide.netlify.app/',
            githubLink: 'https://github.com/JuanTriana27/Tienda-Aviones',
            useIframe: true
        },
        {
            id: 3,
            title: 'Juego de Dibujo con Spring + React',
            description: 'Juego de dibujo en línea construido con Spring Boot y React. Aun sin backend completo',
            technologies: ['Spring Boot', 'React', 'WebSockets', 'CSS3', 'Bootstrap'],
            liveLink: 'https://pintandoandamos.netlify.app/',
            githubLink: 'https://github.com/JuanTriana27/Pintandoando',
            useIframe: true
        },
        {
            id: 4,
            title: 'Inmobiliaria En Spring Boot + React',
            description: 'Aplicación web para gestión inmobiliaria desarrollada con Spring Boot y React. Backend lanzado en render',
            technologies: ['Spring Boot', 'React', 'PostgreSQL', 'CSS3', 'Bootstrap'],
            liveLink: 'https://inmobiliariadb.netlify.app/',
            githubLink: 'https://github.com/JuanTriana27/Ecommerce',
            useIframe: true
        },
        {
            id: 5,
            title: 'Colventanas, empresa de ventaneria y metales arquitectonicos',
            description: 'Aplicación web para gestión de ventas y catálogo de productos de ventanería y metales arquitectónicos. Desarrollada con React.',
            technologies: ['React', 'CSS3', 'Bootstrap'],
            liveLink: 'https://colventanas.netlify.app/',
            githubLink: 'https://github.com/JuanTriana27/colventanas',
            useIframe: true
        }
    ];

    const handleIframeLoad = (projectId) => {
        setLoadedIframes(prev => ({ ...prev, [projectId]: true }));
    };

    return (
        <div className="trabajos-page">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1 className="page-title">Mis Trabajos</h1>
                        <p className="page-subtitle">Proyectos destacados y experiencias recientes</p>
                    </Col>
                </Row>

                <Row>
                    {projects.map(project => (
                        <Col key={project.id} lg={6} className="mb-4">
                            <Card className="project-card h-100">
                                {project.useIframe ? (
                                    <div className="project-iframe-container">
                                        {/* Indicador de que es interactivo */}
                                        <div className="iframe-overlay">
                                            🖱️ Interactivo
                                        </div>
                                        
                                        {/* Loader mientras carga */}
                                        {!loadedIframes[project.id] && (
                                            <div className="iframe-loading">
                                                Cargando aplicación...
                                            </div>
                                        )}
                                        
                                        {/* Iframe completamente interactivo */}
                                        <iframe
                                            src={project.liveLink}
                                            title={project.title}
                                            className="project-iframe"
                                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-pointer-lock"
                                            loading="lazy"
                                            onLoad={() => handleIframeLoad(project.id)}
                                            style={{ 
                                                opacity: loadedIframes[project.id] ? 1 : 0,
                                                transition: 'opacity 0.3s ease'
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        className="project-image"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                )}
                                
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="project-title">{project.title}</Card.Title>
                                    <Card.Text className="project-description">
                                        {project.description}
                                    </Card.Text>

                                    <div className="technologies mb-3">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-links mt-auto">
                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            className="me-2"
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <RiExternalLinkLine className="me-1" />
                                            Ver Live
                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <RiGithubLine className="me-1" />
                                            GitHub
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Nota informativa */}
                <Row className="mt-4">
                    <Col className="text-center">
                        <div className="project-note">
                            <p>
                                <strong>Nota:</strong> Los proyectos con iframe son completamente interactivos. 
                                Puedes hacer clic, navegar y probar las funcionalidades directamente.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Trabajos;