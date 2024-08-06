// import star from "../images/Star.png";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="Person pic" className="card-image" />
        <div className="card-stat">
          <img src="/images/Star.png" alt="Star" className="card-star" />
          <span>{props.rating}</span>
          <span className="gray">{props.reviewCount} •</span>
          <span className="gray">{props.country}</span>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p>
          <span className="cost">From ${props.price}</span> / person
        </p>
      </div>
    </>
  );
}

