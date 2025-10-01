// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import '../../src/styles/Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap', level: 88 },
        { name: 'UI/UX Design', level: 75 },
        { name: 'Figma', level: 80 }
    ];

    return (
        <section id="skills" className="skills-section py-5 bg-light">
            <Container>
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="section-title">Habilidades</h2>
                        <p className="section-subtitle">Tecnologías y herramientas que domino</p>
                    </Col>
                </Row>
                <Row>
                    {skills.map((skill, index) => (
                        <Col key={index} lg={6} className="mb-4">
                            <div className="skill-item">
                                <div className="skill-header d-flex justify-content-between mb-2">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <ProgressBar
                                    now={skill.level}
                                    className="skill-progress"
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;