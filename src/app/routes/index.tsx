import { Button } from "../components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Index() {
  const [isLoading, setIsLoading] = useState(!!localStorage.getItem("forever-loading"));
  return (
    <div className="index">
      <header>
        <div>
          <div className="box-small" />
          <div className="box-small" />
        </div>
      </header>
      <main>
        <div className="product-area">
          <Slider {...settings}>
            <div>
              <div className="slide">
                <div className="yellow circle" />
              </div>
            </div>
            <div>
              <div className="slide">
                <div className="yellow side" />
              </div>
            </div>
            <div>
              <div className="slide">
                <div className="yellow circle" />
              </div>
            </div>
            <div>
              <div className="slide image">
                <img src="./illusion.png" />
              </div>
            </div>
          </Slider>
        </div>
        <div className="product-details">
          <div className="type" />
          <div className="title" />
          <div className="desc" />
          <div className="desc" />
          <div className="desc last" />
          <div className="button-wrapper">
            <Button
              disabled={isLoading}
              onClick={() => {
                setIsLoading(true);
                localStorage.setItem("forever-loading", "true");
              }}
            >
              <div className="custom-button">
                {isLoading && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960">
                    <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
                  </svg>
                )}
                <span>Change color</span>
              </div>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
