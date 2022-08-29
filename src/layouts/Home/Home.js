import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="mt-5">
        <h1 className="text-primary">React Projects For Beginner</h1>

        <nav>
          <ul>
            <li>

            <Link to="birthday">Birth Reminder</Link>
            </li>
            <li><Link to="tour">Tour</Link></li>
            <li><Link to="review">Reviews</Link></li>
            <li><Link to="accordion">Accordion</Link></li>
            <li><Link to="menu">Menu</Link></li>
            <li><Link to='tabs'>Tabs</Link></li>
            <li><Link to='todo'>Todo</Link></li>


          </ul>

        </nav>
      </main>
    </>
  );
};

export default Home;
