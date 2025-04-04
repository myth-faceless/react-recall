export const ProfileData = (props) => {
  //destructuring props data:
  const { id, image, name, age, gender, occupation, description } = props.data;
  console.log(props);
  return (
    <div className="container">
      <div className="imageCard" key={id}>
        <div className="image">
          <img src={image} alt="image" />
        </div>
        <h2>Name: {name}</h2>
        <h4>Age: {age}</h4>
        <h4>Gender: {gender}</h4>
        <h3>Occupation: {occupation}</h3>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};
