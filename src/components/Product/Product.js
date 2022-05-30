import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCarts from "./ProductCarts";
import Particle from "../Particle";
import sc from "../../Assets/Projects/sc.jpg";
import chatbot from "../../Assets/Projects/chatbot.png";
import qa from "../../Assets/Projects/qa.png";
import stt from "../../Assets/Projects/stt.png";
import tts from "../../Assets/Projects/tts.jpeg";
import da from "../../Assets/Projects/da.png";
import Techstack from "./Techstack";


function Product() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our products <br/>
          Here are a few our products
        </h1> 
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProductCarts
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot"
              description="Chatbot assistant dreamy personality, likes to hang out at cafes and suggest coffee shops."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProductCarts
              imgPath={qa}
              isBlog={false}
              title="Open Domain Question Answering System"
              description="The system that answer the user's question "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProductCarts
              imgPath={stt}
              isBlog={false}
              title="Speech To Text"
              description="The technology that enables human speech to be converted automatically into text."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProductCarts
              imgPath={tts}
              isBlog={false}
              title="Text To Speech"
              description="The technology that enables text to be converted into speech sounds imitative of the human voice"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProductCarts
              imgPath={sc}
              isBlog={false}
              title="Abnormal behavior detection"
              description="The system can detect abnormal behavior such as fighting"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProductCarts
              imgPath={da}
              isBlog={false}
              title="Document Analysis"
              description="Technology solution supports automatic detection, recognition and extraction of information from images, objects, handwriting, documents, templates, etc with high accuracy in short period of time"
            />
          </Col>


        </Row>
        <h1 className="project-heading">
          Product Work and Supports
        </h1>

        <Techstack />

      </Container>
    </Container>
  );
}

export default Product;
