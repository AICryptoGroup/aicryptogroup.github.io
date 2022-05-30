import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PeopleCard from "./PeopleCard";
import Particle from "../Particle";
import quan from "../../Assets/Peoples/quan.jpeg";
import thoai from "../../Assets/Peoples/avt.jpeg";
import dat from "../../Assets/Peoples/avt.jpeg";
import tu from "../../Assets/Peoples/avt.jpeg";
import quat from "../../Assets/Peoples/avt.jpeg";
import huyen from "../../Assets/Peoples/huyen.jpeg"

function People() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Team <br/>
          Here are team members of AIC Technology Group.
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <PeopleCard
              imgPath={tu}
              isBlog={false}
              title="Nguyen Anh Tu"
              description="Natural Language Processing"
              linkgithub="https://github.com/anhtunguyen98"
              linklinkedin="https://www.linkedin.com/in/tuna-ptit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <PeopleCard
              imgPath={thoai}
              isBlog={false}
              title="Bui Xuan Thoai"
              description="Cloud Native"
              linkgithub="https://github.com/thanthoai"
              linklinkedin="https://www.linkedin.com/in/bui-thoai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <PeopleCard
              imgPath={quat}
              isBlog={false}
              title="Phu Van Quat"
              description="Data Science"
              linkgithub="https://github.com/quatpv"
              linklinkedin="https://www.linkedin.com/in/quatpv/"
            />
          </Col>

          <Col md={4} className="project-card">
            <PeopleCard
              imgPath={dat}
              isBlog={false}
              title="Nguyen Quoc Dat"
              description="MLOps"
              linkgithub="https://github.com/"
              linklinkedin="https://www.linkedin.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <PeopleCard
              imgPath={quan}
              isBlog={false}
              title="Tran Tien Quan"
              description="Computer Vision"
              linkgithub="https://github.com/Lill98"
              linklinkedin="https://www.linkedin.com/in/quan-tran-lill-3240a1135/"
            />
          </Col>

          <Col md={4} className="project-card">
            <PeopleCard
              imgPath={huyen}
              isBlog={false}
              title="Hoang Cao Huyen"
              description="Computer Vision"
              linkgithub="https://github.com/huyentls1114"
              linklinkedin="https://www.linkedin.com/in/ho%C3%A0ng-huy%E1%BB%81n-0653b016b/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default People;
