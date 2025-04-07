import React from "react";

import styles from "../styles/MovieData.module.css";

const MovieData = (props) => {
  const { id, cover_image, name, ratings, summary, genre, cast, movielink } =
    props.data;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    background: "var(--button-color)",
    color: "var(--secondary-color)",
  };

  return (
    <div className={styles.movieCard} key={id}>
      <div className={styles.movieImage}>
        <img src={cover_image} alt={"coverImage"} />
      </div>
      <div className={styles.movieDetails}>
        <h1>{name}</h1>
        <h3>Rating: {ratings}</h3>
        <p>{summary}</p>
        <p>{genre}</p>
        <p>{cast}</p>
      </div>
      <a href={movielink} target="_blank" rel="noopener noreferrer">
        <button style={btn_style}>Watch Now</button>
      </a>
    </div>
  );
};

export default MovieData;
