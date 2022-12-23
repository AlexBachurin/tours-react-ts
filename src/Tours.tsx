import React from "react";
import { iTour } from "./models";
import Tour from "./Tour";

type ToursProps = {
  tours: iTour[],
  removeTourById: (id: string) => void
}
const Tours: React.FC<ToursProps> = ({ tours, removeTourById }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeTourById={removeTourById} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
