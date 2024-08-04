import kaite from "../images/person.png";
import star from "../images/Star.png";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src={kaite} alt="Person pic" className="card-image" />
        <div className="card-stat">
          <img src={star} alt="Star" className="card-star" />
          <span>5.0</span>
          <span className="gray">(6) •</span>
          <span className="gray">USA</span>
        </div>
        <h2>Life Lessons with Kaite</h2>
        <p>
          <span className="cost">From $136</span> / person
        </p>
      </div>
    </>
  );
}
