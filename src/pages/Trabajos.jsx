// src/pages/Trabajos.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { 
  RiExternalLinkLine, 
  RiGithubLine, 
  RiCodeLine, 
  RiServerLine, 
  RiStackLine, 
  RiHtml5Line, 
  RiReactjsLine, 
  RiDatabaseLine,
  RiJavascriptLine,
  RiBootstrapLine,
  RiNodejsLine,
  RiMailLine,
  RiLeafLine,
  RiSettings3Line,
  RiTimerLine
} from '@remixicon/react';
import '../../src/styles/Trabajos.css';

// Icono de Spring Boot (usamos RiLeafLine de RemixIcon)
const SpringIcon = () => <RiLeafLine />;

// Icono de PHP (usamos un ícono de servidor)
const PhpIcon = () => <RiServerLine />;

// Icono de Three.js
const ThreeJsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#049ef4">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-.9-.63c-.33-.23-.57-.52-.7-.85L8 15v-2l.4-1.37c.13-.33.37-.62.7-.85L10 10l1.37-.4c.33-.13.62-.37.85-.7L12 8l.78 1.9c.23.33.52.57.85.7L15 10l1.37.4c.33.13.62.37.85.7L18 12l-.9.63c-.33.23-.57.52-.7.85L16 14v2l-.4 1.37c-.13.33-.37.62-.7.85L14 18l-1.37.4c-.33.13-.62.37-.85.7L12 20l-.78-1.9c-.23-.33-.52-.57-.85-.7L9 18l-1.37-.4z"/>
  </svg>
);

// Icono de WebSockets
const WebSocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#ff6b6b">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-.9-.63c-.33-.23-.57-.52-.7-.85L8 15v-2l.4-1.37c.13-.33.37-.62.7-.85L10 10l1.37-.4c.33-.13.62-.37.85-.7L12 8l.78 1.9c.23.33.52.57.85.7L15 10l1.37.4c.33.13.62.37.85.7L18 12l-.9.63c-.33.23-.57.52-.7.85L16 14v2l-.4 1.37c-.13.33-.37.62-.7.85L14 18l-1.37.4c-.33.13-.62.37-.85.7L12 20l-.78-1.9c-.23-.33-.52-.57-.85-.7L9 18l-1.37-.4z"/>
  </svg>
);

// Icono de PostgreSQL
const PostgresqlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#336791">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-.9-.63c-.33-.23-.57-.52-.7-.85L8 15v-2l.4-1.37c.13-.33.37-.62.7-.85L10 10l1.37-.4c.33-.13.62-.37.85-.7L12 8l.78 1.9c.23.33.52.57.85.7L15 10l1.37.4c.33.13.62.37.85.7L18 12l-.9.63c-.33.23-.57.52-.7.85L16 14v2l-.4 1.37c-.13.33-.37.62-.7.85L14 18l-1.37.4c-.33.13-.62.37-.85.7L12 20l-.78-1.9c-.23-.33-.52-.57-.85-.7L9 18l-1.37-.4z"/>
  </svg>
);

const Trabajos = () => {
  const [activeSection, setActiveSection] = useState('fullstack');
  const [loadedIframes, setLoadedIframes] = useState({});

  const proyectos = {
    frontend: [
      {
        id: 5,
        title: 'Gimnasio - Frontend',
        description: 'Frontend de aplicación web para gestión de un gimnasio. Desarrollada con React.',
        detailedDescription: `
          Interfaz de usuario que incluye:
          • Gestión de miembros
          • Panel de control administrativo
          • Sistema de reservas de clases
          • Diseño moderno y profesional
        `,
        technologies: [
          { name: 'React', icon: <RiReactjsLine />, color: '#61dafb' },
          { name: 'CSS', icon: <RiCodeLine />, color: '#2965f1' },
          { name: 'Bootstrap', icon: <RiBootstrapLine />, color: '#7952b3' }
        ],
        features: [
          'Dashboard administrativo',
          'Gestión de miembros',
          'Sistema de reservas',
          'Estadísticas en tiempo real',
          'Interfaz responsive'
        ],
        githubLink: 'https://github.com/JuanTriana27/frontend-fitbooker',
        type: 'react',
        showLiveDemo: false
      },
      {
        id: 4,
        title: 'Inmobiliaria - Frontend React',
        description: 'Frontend de aplicación web para gestión inmobiliaria desarrollada con React.',
        detailedDescription: `
          Interfaz de usuario que incluye:
          • Listado y filtrado de propiedades
          • Diseño responsive profesional
        `,
        technologies: [
          { name: 'React', icon: <RiReactjsLine />, color: '#61dafb' },
          { name: 'CSS3', icon: <RiCodeLine />, color: '#2965f1' },
          { name: 'Bootstrap', icon: <RiBootstrapLine />, color: '#7952b3' }
        ],
        features: [
          'Listado de propiedades',
          'Formularios interactivos'
        ],
        githubLink: 'https://github.com/JuanTriana27/uniFront',
        type: 'react',
        showLiveDemo: false
      },
      {
        id: 3,
        title: 'Juego de Pinturillo - Frontend React',
        description: 'Frontend del juego de dibujo en línea construido con React.',
        detailedDescription: `
          Interfaz de juego que incluye:
          • Canvas de dibujo interactivo
          • Sistema de puntuación visual
        `,
        technologies: [
          { name: 'React', icon: <RiReactjsLine />, color: '#61dafb' },
          { name: 'CSS3', icon: <RiCodeLine />, color: '#2965f1' },
          { name: 'Bootstrap', icon: <RiBootstrapLine />, color: '#7952b3' }
        ],
        features: [
          'Canvas de dibujo interactivo',
          'Sistema de salas',
          'Herramientas de dibujo',
          'Puntuación en vivo'
        ],
        githubLink: 'https://github.com/JuanTriana27/pintandoFront',
        type: 'react',
        showLiveDemo: false
      }
    ],
    backend: [
      {
        id: 5,
        title: 'Gimnasio - Backend Spring Boot',
        description: 'Backend para aplicación de gestión de gimnasio desarrollado con Spring Boot.',
        detailedDescription: `
          API REST que incluye:
          • Gestión de usuarios y permisos
          • CRUD completo de miembros
          • Sistema de reservas y clases
          • Integración con bases de datos
          • Dockerizado para despliegue en Render
        `,
        technologies: [
          { name: 'Spring Boot', icon: <SpringIcon />, color: '#6db33f' },
          { name: 'Docker', icon: <RiSettings3Line />, color: '#2496ed' },
          { name: 'PostgreSQL', icon: <PostgresqlIcon />, color: '#336791' },
          { name: 'Neon', icon: <RiDatabaseLine />, color: '#3ecf8e' },
          { name: 'Render', icon: <RiServerLine />, color: '#46e3b7' }
        ],
        features: [
          'API REST completa',
          'Autenticación JWT',
          'CRUD de miembros',
          'Sistema de reservas',
          'Despliegue con Docker en Render'
        ],
        githubLink: 'https://github.com/JuanTriana27/backend-fitbooker',
        type: 'spring',
        showLiveDemo: false
      },
      {
        id: 4,
        title: 'Inmobiliaria - Backend Spring Boot',
        description: 'Backend para aplicación de gestión inmobiliaria desarrollado con Spring Boot.',
        detailedDescription: `
          API REST que incluye:
          • Gestión completa de propiedades
          • Sistema de agentes inmobiliarios
          • Dockerizado para despliegue en Render
        `,
        technologies: [
          { name: 'Spring Boot', icon: <SpringIcon />, color: '#6db33f' },
          { name: 'Docker', icon: <RiSettings3Line />, color: '#2496ed' },
          { name: 'PostgreSQL', icon: <PostgresqlIcon />, color: '#336791' },
          { name: 'Neon', icon: <RiDatabaseLine />, color: '#3ecf8e' },
          { name: 'Render', icon: <RiServerLine />, color: '#46e3b7' }
        ],
        features: [
          'API REST para propiedades',
          'Gestión de agentes',
          'Gestión de clientes',
          'Gestión de propiedades',
          'Despliegue con Docker en Render'
        ],
        githubLink: 'https://github.com/JuanTriana27/uniBack',
        type: 'spring',
        showLiveDemo: false
      }
    ],
    fullstack: [
      {
        id: 1,
        title: 'Store Fly - E-commerce de Aviones',
        description: 'E-commerce especializado en venta de aviones y productos aeronáuticos. Desarrollado con HTML, CSS, JavaScript y Three.js para modelos 3D.',
        technologies: [
          { name: 'HTML', icon: <RiHtml5Line />, color: '#e34c26' },
          { name: 'CSS', icon: <RiCodeLine />, color: '#2965f1' },
          { name: 'JavaScript', icon: <RiJavascriptLine />, color: '#f0db4f' },
          { name: 'Three.js', icon: <ThreeJsIcon />, color: '#049ef4' }
        ],
        features: [
          'Modelos 3D interactivos',
          'Carrito de compras',
          'Diseño responsive',
          'Catálogo de productos'
        ],
        liveLink: 'https://tienda-aviones.vercel.app/',
        githubLink: 'https://github.com/JuanTriana27/Tienda-Aviones',
        useIframe: true,
        loadTimeNote: false
      },
      {
        id: 2,
        title: 'Cali Travel Guide',
        description: 'Trabajo de grado enfocado en turismo local en Cali, Colombia. Desarrollado con React, Node.js y MongoDB.',
        technologies: [
          { name: 'React', icon: <RiReactjsLine />, color: '#61dafb' },
          { name: 'Node.js', icon: <RiNodejsLine />, color: '#68a063' },
          { name: 'MongoDB', icon: <RiDatabaseLine />, color: '#47a248' },
          { name: 'Bootstrap', icon: <RiBootstrapLine />, color: '#7952b3' },
          { name: 'EmailJS', icon: <RiMailLine />, color: '#3e98c7' }
        ],
        features: [
          'Mapa interactivo',
          'Guía turística',
          'Sistema de recomendaciones',
          'Formularios de contacto'
        ],
        liveLink: 'https://calitravelguide.netlify.app/',
        githubLink: 'https://github.com/JuanTriana27/Tienda-Aviones',
        useIframe: true,
        loadTimeNote: false
      },
      {
        id: 3,
        title: 'Juego de Dibujo con Spring + React',
        description: 'Juego de dibujo en línea construido con Spring Boot y React.',
        technologies: [
          { name: 'Spring Boot', icon: <SpringIcon />, color: '#6db33f' },
          { name: 'React', icon: <RiReactjsLine />, color: '#61dafb' },
          { name: 'WebSockets', icon: <WebSocketIcon />, color: '#ff6b6b' },
          { name: 'Bootstrap', icon: <RiBootstrapLine />, color: '#7952b3' }
        ],
        features: [
          'Dibujo en tiempo real',
          'Multijugador online',
          'Chat integrado',
          'Sistema de puntuación'
        ],
        liveLink: 'https://pintandoandamos.netlify.app/',
        githubLink: 'https://github.com/JuanTriana27/Pintandoando',
        useIframe: true,
        loadTimeNote: true
      },
      {
        id: 4,
        title: 'Inmobiliaria Spring Boot + React',
        description: 'Aplicación web para gestión inmobiliaria desarrollada con Spring Boot y React.',
        technologies: [
          { name: 'Spring Boot', icon: <SpringIcon />, color: '#6db33f' },
          { name: 'React', icon: <RiReactjsLine />, color: '#61dafb' },
          { name: 'PostgreSQL', icon: <PostgresqlIcon />, color: '#336791' },
          { name: 'Bootstrap', icon: <RiBootstrapLine />, color: '#7952b3' },
          { name: 'Docker', icon: <RiSettings3Line />, color: '#2496ed' }
        ],
        features: [
          'Gestión de propiedades',
          'CRUD completo',
          'Búsqueda avanzada',
          'Sistema de agentes',
          'Backend en Render (puede tardar en cargar)'
        ],
        liveLink: 'https://inmobiliariadb.netlify.app/',
        githubLink: 'https://github.com/JuanTriana27/Ecommerce',
        useIframe: true,
        loadTimeNote: true
      },
      {
        id: 5,
        title: 'Gimnasio - Full Stack',
        description: 'Aplicación web completa para gestión de un gimnasio. Desarrollada con React y SpringBoot.',
        technologies: [
          { name: 'React', icon: <RiReactjsLine />, color: '#61dafb' },
          { name: 'Spring Boot', icon: <SpringIcon />, color: '#6db33f' },
          { name: 'PostgreSQL', icon: <PostgresqlIcon />, color: '#336791' },
          { name: 'Supabase', icon: <RiDatabaseLine />, color: '#3ecf8e' },
          { name: 'Docker', icon: <RiSettings3Line />, color: '#2496ed' }
        ],
        features: [
          'Gestión de miembros',
          'Sistema de reservas',
          'Dashboard administrativo',
          'Reportes y estadísticas',
          'Backend en Render (puede tardar en cargar)'
        ],
        liveLink: 'https://frontend-fitbooker.vercel.app/usuarios',
        githubLink: 'https://github.com/JuanTriana27/Gimansio-Spring',
        useIframe: true,
        loadTimeNote: true
      },
      {
        id: 7,
        title: 'Blog de Noticias - PHP',
        description: 'Aplicación web para gestión de un blog de noticias. Desarrollada con PHP y MariaDB.',
        technologies: [
          { name: 'PHP', icon: <PhpIcon />, color: '#777bb4' },
          { name: 'MariaDB', icon: <RiDatabaseLine />, color: '#003545' },
          { name: 'CSS', icon: <RiCodeLine />, color: '#2965f1' }
        ],
        features: [
          'Panel de administración',
          'CRUD de artículos',
          'Sistema de comentarios',
          'Gestión de usuarios'
        ],
        credentials: {
          url: 'http://blog-curso.rf.gd/login.php',
          user: 'admin',
          password: 'admin'
        },
        liveLink: 'http://blog-curso.rf.gd/',
        githubLink: 'https://github.com/JuanTriana27/Blog_Noticias',
        useIframe: true,
        loadTimeNote: false
      },
      {
        id: 8,
        title: 'Galería de Imágenes - PHP',
        description: 'Aplicación web para gestión de una galería de imágenes. Desarrollada con PHP y MariaDB.',
        technologies: [
          { name: 'PHP', icon: <PhpIcon />, color: '#777bb4' },
          { name: 'MariaDB', icon: <RiDatabaseLine />, color: '#003545' },
          { name: 'CSS', icon: <RiCodeLine />, color: '#2965f1' }
        ],
        features: [
          'Subida de imágenes',
          'Galería organizada',
          'Miniaturas automáticas',
          'Gestión de categorías'
        ],
        liveLink: 'https://galeria-curso.infinityfree.me/',
        githubLink: 'https://github.com/JuanTriana27/Galeria_Imagenes',
        useIframe: true,
        loadTimeNote: false
      }
    ]
  };

  const handleIframeLoad = (projectId) => {
    setLoadedIframes(prev => ({ ...prev, [projectId]: true }));
  };

  const renderFrontendProject = (project) => (
    <Col key={project.id} lg={6} className="mb-4">
      <Card className="project-card h-100">
        <Card.Body className="d-flex flex-column">
          <div className="project-header mb-3">
            <div className="tech-icon" style={{ 
              background: project.technologies[0].color + '15',
              border: `2px solid ${project.technologies[0].color}30`
            }}>
              {project.technologies[0].icon}
            </div>
            <span className="project-type-badge">
              Frontend
            </span>
          </div>
          
          <Card.Title className="project-title">{project.title}</Card.Title>
          
          <Card.Text className="project-description">
            {project.description}
          </Card.Text>

          <div className="detailed-description mb-3">
            <h6 className="section-subtitle">Características:</h6>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="technologies-detail mb-3">
            <h6 className="section-subtitle">Tecnologías Frontend:</h6>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item" style={{ borderLeftColor: tech.color }}>
                  <span className="tech-icon-small" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-links mt-auto">
            <Button
              variant="outline-secondary"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine className="me-1" />
              Ver Código en GitHub
            </Button>
            <div className="demo-note mt-2">
              <small>
                <RiExternalLinkLine className="me-1" />
                Demo disponible en sección Full Stack
              </small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  const renderBackendProject = (project) => (
    <Col key={project.id} lg={6} className="mb-4">
      <Card className="project-card h-100">
        <Card.Body className="d-flex flex-column">
          <div className="project-header mb-3">
            <div className="tech-icon" style={{ 
              background: project.technologies[0].color + '15',
              border: `2px solid ${project.technologies[0].color}30`
            }}>
              {project.technologies[0].icon}
            </div>
            <span className="project-type-badge backend">
              Backend
            </span>
          </div>
          
          <Card.Title className="project-title">{project.title}</Card.Title>
          
          <Card.Text className="project-description">
            {project.description}
          </Card.Text>

          <div className="detailed-description mb-3">
            <h6 className="section-subtitle">Funcionalidades Backend:</h6>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="technologies-detail mb-3">
            <h6 className="section-subtitle">Stack Backend:</h6>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item" style={{ borderLeftColor: tech.color }}>
                  <span className="tech-icon-small" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-links mt-auto">
            <Button
              variant="outline-secondary"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine className="me-1" />
              Ver Código Backend
            </Button>
            <div className="demo-note mt-2">
              <small>
                <RiExternalLinkLine className="me-1" />
                Aplicación completa en sección Full Stack
              </small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  const renderFullStackProject = (project) => (
    <Col key={project.id} lg={6} className="mb-4">
      <Card className="project-card h-100">
        <div className="project-iframe-container">
          <div className="iframe-overlay">
            🖱️ Aplicación Interactiva
          </div>

          {!loadedIframes[project.id] && (
            <div className="iframe-loading">
              <RiTimerLine className="me-2" />
              Cargando aplicación...
              {project.loadTimeNote && (
                <div className="load-time-note">
                  <small>El backend está en Render, puede tardar unos minutos en activarse.</small>
                </div>
              )}
            </div>
          )}

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

        <Card.Body className="d-flex flex-column">
          <Card.Title className="project-title">{project.title}</Card.Title>
          
          <Card.Text className="project-description">
            {project.description}
            {project.loadTimeNote && (
              <div className="render-note mt-2">
                <small>
                  <RiTimerLine className="me-1" />
                  <strong>Nota:</strong> El backend está desplegado en Render y puede tardar unos minutos en activarse si ha estado inactivo.
                </small>
              </div>
            )}
          </Card.Text>

          <div className="tech-stack-preview mb-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-badge-preview" style={{ 
                background: tech.color + '20',
                color: tech.color,
                border: `1px solid ${tech.color}40`
              }}>
                {tech.icon}
                <span className="ms-1">{tech.name}</span>
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-badge-preview">
                +{project.technologies.length - 3} más
              </span>
            )}
          </div>

          {project.credentials && (
            <div className="credentials-info mb-3">
              <h6 className="section-subtitle">Credenciales de Acceso:</h6>
              <div className="credentials-box">
                <p><strong>URL Panel Admin:</strong> {project.credentials.url}</p>
                <p><strong>Usuario:</strong> {project.credentials.user}</p>
                <p><strong>Contraseña:</strong> {project.credentials.password}</p>
              </div>
            </div>
          )}

          <div className="project-links mt-auto">
            <Button
              variant="primary"
              className="me-2"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiExternalLinkLine className="me-1" />
              Probar Aplicación
            </Button>
            <Button
              variant="outline-secondary"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine className="me-1" />
              Ver Código
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <div className="trabajos-page">
      <Container>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="page-title">Portafolio de Proyectos</h1>
            <p className="page-subtitle">Desarrollo Frontend, Backend y Aplicaciones Full Stack</p>
          </Col>
        </Row>

        {/* Navbar de secciones */}
        <Row className="mb-4">
          <Col>
            <div className="section-navbar">
              <button
                className={`section-nav-item ${activeSection === 'frontend' ? 'active' : ''}`}
                onClick={() => setActiveSection('frontend')}
              >
                <RiCodeLine className="me-2" />
                Frontend
                <span className="project-count">{proyectos.frontend.length}</span>
              </button>
              <button
                className={`section-nav-item ${activeSection === 'backend' ? 'active' : ''}`}
                onClick={() => setActiveSection('backend')}
              >
                <RiServerLine className="me-2" />
                Backend
                <span className="project-count">{proyectos.backend.length}</span>
              </button>
              <button
                className={`section-nav-item ${activeSection === 'fullstack' ? 'active' : ''}`}
                onClick={() => setActiveSection('fullstack')}
              >
                <RiStackLine className="me-2" />
                Full Stack
                <span className="project-count">{proyectos.fullstack.length}</span>
              </button>
            </div>
          </Col>
        </Row>

        {/* Contenido de la sección activa */}
        <Row className="mb-4">
          <Col>
            <div className="section-header">
              <h2 className="section-title">
                {activeSection === 'frontend' && <><RiCodeLine className="me-2" />Proyectos Frontend</>}
                {activeSection === 'backend' && <><RiServerLine className="me-2" />Proyectos Backend</>}
                {activeSection === 'fullstack' && <><RiStackLine className="me-2" />Aplicaciones Full Stack</>}
              </h2>
              <p className="section-description">
                {activeSection === 'frontend' && 'Proyectos de desarrollo de interfaces de usuario - Código disponible en GitHub'}
                {activeSection === 'backend' && 'Proyectos de desarrollo de servidores y APIs - Código disponible en GitHub'}
                {activeSection === 'fullstack' && 'Aplicaciones completas interactivas - Puedes probarlas directamente'}
              </p>
              {activeSection === 'fullstack' && (
                <div className="render-info-note">
                  <RiTimerLine className="me-2" />
                  <small>
                    <strong>Importante:</strong> Algunas aplicaciones con backend en Render pueden tardar unos minutos en cargar debido a que el servicio se reactiva tras periodos de inactividad.
                  </small>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* Grid de proyectos */}
        <Row>
          {activeSection === 'frontend' && proyectos.frontend.map(renderFrontendProject)}
          {activeSection === 'backend' && proyectos.backend.map(renderBackendProject)}
          {activeSection === 'fullstack' && proyectos.fullstack.map(renderFullStackProject)}
        </Row>

        {/* Información por sección */}
        <Row className="mt-4">
          <Col>
            <div className="section-info">
              {activeSection === 'frontend' && (
                <div className="info-box frontend">
                  <h5><RiCodeLine className="me-2" />Nota sobre proyectos Frontend</h5>
                  <p>Estos proyectos muestran solo el código del frontend disponible en GitHub. Para ver las demos en vivo con todas las funcionalidades, visita la sección Full Stack.</p>
                </div>
              )}
              {activeSection === 'backend' && (
                <div className="info-box backend">
                  <h5><RiServerLine className="me-2" />Nota sobre proyectos Backend</h5>
                  <p>Estos proyectos muestran solo el código del backend disponible en GitHub. Las aplicaciones completas están disponibles en la sección Full Stack.</p>
                  <p className="mt-2">
                    <RiSettings3Line className="me-1" />
                    <strong>Nota sobre despliegue:</strong> Los proyectos Spring Boot están dockerizados y desplegados en Render para producción.
                  </p>
                </div>
              )}
              {activeSection === 'fullstack' && (
                <div className="info-box fullstack">
                  <h5><RiStackLine className="me-2" />Aplicaciones Interactivas</h5>
                  <p>Todas las aplicaciones son completamente funcionales. Puedes interactuar directamente en los iframes o abrirlas en una nueva pestaña para una mejor experiencia.</p>
                  <p className="mt-2">
                    <RiTimerLine className="me-1" />
                    <strong>Nota sobre tiempo de carga:</strong> Las aplicaciones con backend en Render (Spring Boot) pueden tardar 1-2 minutos en cargar inicialmente debido a que el servicio se reactiva tras periodos de inactividad.
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trabajos;