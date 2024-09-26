import "./forecast-detail-element.css";

function ForecastDetailElement({ title, icon, details }) {
  return (
    <div className="elementContainer">
      <div className="descriptionContainer">
        <img
          className="icon"
          src={require(`../../../images/${icon}.svg`)}
          alt="icon"
        />
        <p>{title}</p>
      </div>
      <p>{details}</p>
    </div>
  );
}

export default ForecastDetailElement;
