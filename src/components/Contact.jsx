// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { RiMailSendLine, RiLoaderLine } from '@remixicon/react';
import emailjs from 'emailjs-com';
import '../../src/styles/Contact.css';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

    // Inicializar EmailJS con la Public Key
    useEffect(() => {
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
            console.log('');
        } else {
            console.error('Public Key no encontrada en variables de entorno');
        }
    }, []);

    const showAlert = (message, variant) => {
        setAlert({ show: true, message, variant });
        setTimeout(() => setAlert({ show: false, message: '', variant: '' }), 5000);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const templateParams = {
                user_name: e.target.user_name.value,
                user_email: e.target.user_email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
                date: new Date().toLocaleString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            console.log('Enviando email con datos:', templateParams);

            // Obtener configuraciones desde variables de entorno
            const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

            console.log('Configuración:', { serviceID, templateID, publicKey });

            // Validar que todas las configuraciones estén presentes
            if (!serviceID || !templateID || !publicKey) {
                throw new Error('Faltan configuraciones de EmailJS. Verifica las variables de entorno.');
            }

            // Enviar email - NOTA: No pasamos publicKey aquí porque ya se inicializó
            const result = await emailjs.send(serviceID, templateID, templateParams);

            console.log('✅ Email enviado exitosamente:', result.text);
            showAlert('¡Mensaje enviado! Te contactaré pronto.', 'success');
            form.current.reset();

        } catch (error) {
            console.log('❌ Error enviando email:', error);
            console.log('Detalles completos del error:', error);

            let errorMessage = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';

            if (error.text?.includes('The user ID is required')) {
                errorMessage = 'Error de configuración: User ID no encontrado. Verifica las variables de entorno.';
            } else if (error.text?.includes('The recipients address is empty')) {
                errorMessage = 'Error: La dirección de email del destinatario está vacía. Verifica la configuración del template.';
            }

            showAlert(errorMessage, 'danger');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-section py-5">
            <Container>
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="section-title">Contacto</h2>
                        <p className="section-subtitle">¿Tienes un proyecto en mente? Hablemos</p>
                    </Col>
                </Row>

                {/* Alertas */}
                {alert.show && (
                    <Row>
                        <Col lg={6} className="mx-auto mb-4">
                            <Alert variant={alert.variant}>
                                {alert.message}
                            </Alert>
                        </Col>
                    </Row>
                )}

                <Row>
                    <Col lg={6} className="mx-auto">
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Nombre *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="user_name"
                                    placeholder="Tu nombre"
                                    required
                                    disabled={isLoading}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="user_email"
                                    placeholder="tu@email.com"
                                    required
                                    disabled={isLoading}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label>Asunto *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="subject"
                                    placeholder="Asunto del mensaje"
                                    required
                                    disabled={isLoading}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Mensaje *</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    name="message"
                                    placeholder="Tu mensaje..."
                                    required
                                    disabled={isLoading}
                                />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 submit-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <RiLoaderLine className="me-2 spinning" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <RiMailSendLine className="me-2" />
                                        Enviar Mensaje
                                    </>
                                )}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;