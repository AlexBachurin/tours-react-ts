import React, { useState } from "react";
import { iTour } from "./models";

type TourProps = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
  removeTourById: (id: string) => void
}

const Tour: React.FC<TourProps> = ({ id, image, info, price, name, removeTourById}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "show less" : "show more"}
          </button>
        </p>
        <button onClick={() => removeTourById(id)} className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
