// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import {
    RiReactjsLine,
    RiJavascriptLine,
    RiHtml5Line,
    RiBootstrapLine,
    RiPaletteLine,
    RiGitBranchLine,
    RiJavaLine,
    RiServerLine,
    RiDatabase2Line,
    RiStackLine
} from '@remixicon/react';
import '../../src/styles/Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React', level: 50, icon: <RiReactjsLine /> },
        { name: 'JavaScript', level: 60, icon: <RiJavascriptLine /> },
        { name: 'HTML/CSS', level: 70, icon: <RiHtml5Line /> },
        { name: 'Bootstrap', level: 50, icon: <RiBootstrapLine /> },
        { name: 'UI/UX Design', level: 90, icon: <RiPaletteLine /> },
        { name: 'Git/GitHub', level: 60, icon: <RiGitBranchLine /> },
        { name: 'Java', level: 80, icon: <RiJavaLine /> },
        { name: 'Spring Boot', level: 80, icon: <RiServerLine /> },
        { name: 'PostgreSQL', level: 70, icon: <RiDatabase2Line /> },
        { name: 'MongoDB', level: 40, icon: <RiStackLine /> },
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
                                    <div className="d-flex align-items-center">
                                        <span className="skill-icon me-2">
                                            {skill.icon}
                                        </span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
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