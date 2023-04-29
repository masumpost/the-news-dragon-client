import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsides from "../EditorsInsides/EditorsInsides";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;
  return (
    <div>
      <h4 className="my-4">Dragon News</h4>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}><Button className="text-white fw-semibold" variant="danger"><FaArrowLeft></FaArrowLeft> All News In This Category</Button></Link>
        </Card.Body>
      </Card>

     <div className="my-4">
        <h4 className="my-4">Editors Insides</h4>
     <EditorsInsides></EditorsInsides>
     </div>
    </div>
  );
};

export default News;
