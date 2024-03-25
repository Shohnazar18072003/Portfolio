import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Book from "../../Assets/Projects/Screenshot_4.png";
import Avion from "../../Assets/Projects/Screenshot_6.png";
import Severyanochka from "../../Assets/Projects/Screenshot_3.png";
import AlifShop from "../../Assets/Projects/Screenshot_1.png";
import Countries from "../../Assets/Projects/Screenshot_5.png";
import AdminImg from "../../Assets/Projects/Screenshot_2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlifShop}
              isBlog={false}
              title="ALIF SHOP"
              ghLink="https://github.com/Shohnazar18072003/alif_shop"
              demoLink="https://alif-shop.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AdminImg}
              isBlog={false}
              title="ADMIN DASHBOARD"
              ghLink="https://github.com/Shohnazar18072003/MUI-ADMIN"
              demoLink="https://mui-admin-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Severyanochka}
              isBlog={false}
              title="SEVERYANOCHKA"
              ghLink="https://github.com/Shohnazar18072003/WEBSITE-PROJECT-EXAM"
              demoLink="https://website-project-exam.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Avion}
              isBlog={false}
              title="AVION SHOP"
              ghLink="https://github.com/Shohnazar18072003/AVION"
              demoLink="https://avion-ecommerce-store.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Countries}
              isBlog={false}
              title="COUNTRIES APP"
              ghLink="https://github.com/Shohnazar18072003/next-js-countries"
              demoLink="https://next-js-countries-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="BOOK STORE ( Landing Page )"
              ghLink="https://github.com/Shohnazar18072003/Book-Website"
              demoLink="https://book-website-delta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
