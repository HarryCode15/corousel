// import star from "../images/Star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <>
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}

        <img src={props.coverImg} alt="Person pic" className="card-image" />
        
        <div className="card-stat">
          <img src="/images/Star.png" alt="Star" className="card-star" />
          <span>{props.stats.rating}</span>
          <span className="gray">{props.stats.reviewCount} •</span>
          <span className="gray">{props.location}</span>
        </div>
        
        <h2 className="card-title">{props.title}</h2>
        
        <p>
          <span className="cost">From ${props.price}</span> / person
        </p>
      
      </div>
    </>
  );
}
