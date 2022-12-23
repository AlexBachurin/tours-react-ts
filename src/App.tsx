import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { iTour } from "./models";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState<iTour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //remove tour
  const removeTourById = (id : string) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  //fetch tours
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  //if user deletes all tours or if there is no tours left
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={fetchTours} className="btn">
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTourById={removeTourById} />
    </main>
  );
};

export default App;
