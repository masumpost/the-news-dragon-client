import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, author, image_url, total_view, rating } = news;
  return (
    <Card className="my-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2 ">
          <div>
            <Image style={{ width: "40px" }} src={author.img} roundedCircle />
          </div>
          <div>
            <h5 className="mb-0"> {author?.name}</h5>
            {moment(author.published_date).format("YYYY-MM-D")}
          </div>
        </div>
        <div className="text-secondary fs-4 gap-3">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <h4>{title}</h4>
        </Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <> {details} </>
          ) : (
            <>{details.slice(0, 250)}</>
          )}
          <br />
          ...<Link className="fw-semibold text-danger text-decoration-none" to={`/news/${_id}`}>Read more</Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex p-3">
        <div className="flex-grow-1">
         <div className=" d-flex align-items-center gap-2">
         <Rating style={{ maxWidth: 150 }} value={Math.round(rating?.number)} readOnly />
          <small className="ms-2">{rating?.number}</small>
         </div>
        </div>
        <div className="gap-2">
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
