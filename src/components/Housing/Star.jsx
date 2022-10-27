export default function Star(props) {
  return (
    <>
      {props.StarRating.map((star, index) => (
        <div className="star" key={index}>
          <span>&#9733;</span>
        </div>
      ))}
    </>
  );
}
