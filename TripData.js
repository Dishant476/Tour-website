import { Link } from "react-router-dom";
import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
      <Link to="/about" className="read-more-btn">
        <img src={props.image} alt="image" />
      </Link>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>

    </div>
  );
}

export default TripData;
