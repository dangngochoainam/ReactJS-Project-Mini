import axios from "axios";
import { useEffect, useState } from "react";
import "./tabs.scss";

const url = "https://course-api.com/react-tabs-project";

const TabContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const loadTabs = async () => {
      const resp = await axios.get(url);
      const jobs = resp.data;
      console.log(jobs);
      setJobs(jobs);
      setLoading(false);
    };

    loadTabs();
  }, []);

  if (loading)
    return (
      <section>
        <h1>Loanding...</h1>
      </section>
    );
  const { company, dates, duties, title } = jobs[value];

  return (
    <>
      <main className="tabs-container">
        <div className="title">
          <h1>Experience</h1>
          <div className="underline"></div>
        </div>
        <section className="jobs-center">
          <div className="btn-container">
            {jobs.map((item, idx) => (
              <button
                key={item.id}
                className={`btn ${value === idx && "btn-active"}`}
                value={idx}
                onClick={() => setValue(idx)}
              >
                {item.company}
              </button>
            ))}
          </div>
          <article className="jobs-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="date">{dates}</p>
            {duties.map((content, idx) => (
              <p key={idx}>{content}</p>
            ))}
            <button type="button" className=" btn-more">
              more info
            </button>
          </article>
        </section>
      </main>
    </>
  );
};

export default TabContainer;
