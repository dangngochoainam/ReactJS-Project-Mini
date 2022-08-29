import { useEffect, useState } from "react";
import "./tour.scss";
import axios from "axios";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const TourContainer = () => {
  const [tours, setTours] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  useEffect(() => {
    const getTours = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setTours(res.data);
      setLoading(false);
    };

    getTours();
  }, [refresh]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <Tours list={tours} handleDelete={removeTour} />
      {tours.length === 0 ? (
        <button className="btn-refresh" onClick={() => setRefresh(!refresh)}>
          Refresh
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default TourContainer;
