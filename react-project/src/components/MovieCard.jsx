import React from "react";
import { movieAPI } from "../assets/movieAPI.js";
import MovieData from "./MovieData";

import styles from "../styles/MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className="container">
      <div className={styles.container}>
        {movieAPI.map((data) => (
          <MovieData key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
