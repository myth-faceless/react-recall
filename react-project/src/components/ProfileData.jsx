export const ProfileData = (props) => {
  return (
    <div className="container">
      <div className="imageCard" key={props.currentElement.id}>
        <div className="image">
          <img src={props.currentElement.image} alt="image" />
        </div>
        <h2>Name: {props.currentElement.name}</h2>
        <h4>Age: {props.currentElement.age}</h4>
        <h4>Gender: {props.currentElement.gender}</h4>
        <h3>Occupation: {props.currentElement.occupation}</h3>
        <p>Description: {props.currentElement.description}</p>
      </div>
    </div>
  );
};
