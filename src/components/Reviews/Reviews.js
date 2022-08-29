import { useState } from "react";
import { Button } from "react-bootstrap";

const Reviews = (props) => {
  const listReviews = [...props.reviews];
  const [page, setPage] = useState(0);
  const { id, name, text, job, image } = listReviews[page];

  const checkPage = (index) => {
    if (index < 0) return listReviews.length - 1;

    if (index === listReviews.length) return 0;

    return index;
  };

  const handlePrev = () => {
    const newIndex = checkPage(page - 1);
    setPage(newIndex);
  };

  const handleNext = () => {
    const newIndex = checkPage(page + 1);
    setPage(newIndex);
  };

  const handleRandom = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * listReviews.length);
    } while (newIndex === page);
    console.log("random: ", newIndex);
    setPage(newIndex);
  };

  return (
    <>
      <div className="reviews">
        <div className="container-img">

        <img className="image mt-4" src={image} alt="Lỗi ảnh" />
        </div>
        <div className="info mt-5">
          <h3 className="name">{name}</h3>
          <p className="job">{job}</p>
        </div>
        <div className="content">
          <p>{text}</p>
        </div>

        <div className="btn-container">
          <Button variant="" size="sm" onClick={() => handlePrev()}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </Button>
          <Button variant="" size="sm" onClick={() => handleNext()}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </Button>
        </div>
        <Button className="btn-random" variant="" size="sm" onClick={() => handleRandom()}>
          Surprise Me
        </Button>
      </div>
    </>
  );
};

export default Reviews;
