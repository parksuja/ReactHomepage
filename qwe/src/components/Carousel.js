import React from "react";
import "../css/Carousel.css";

function Carousel() {
  const style = {
    width: "20vw",
    height: "50vh",
  };
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" width="50px">
          <div class="carousel-item active">
            <img
              src="img/island-6302137_1920.jpg"
              class="d-block w-100"
              alt="..."
              style={style}
              resizeMode="stretch"
            />
          </div>
          <div class="carousel-item">
            <img
              src="img/lighthouse-6278951_1920.jpg"
              class="d-block w-100"
              alt="..."
              style={style}
            />
          </div>
          <div class="carousel-item">
            <img
              src="img/landscape-5544380_1920.jpg"
              class="d-block w-100"
              alt="..."
              style={style}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
