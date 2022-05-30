import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function PeopleCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.linklinkedin} target="_blank"  >
          <BsLinkedin/>

        </Button>

        <Button variant="primary" href={props.linkgithub} target="_blank" style={ {"margin-left": "2px"}} >
          <BsGithub />
        </Button>
      </Card.Body>

    </Card>
  );
}
export default PeopleCards;
