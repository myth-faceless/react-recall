import { personData } from "./assets/person.js";
const ProfileCard = () => {
  return (
    <div className="container">
      {personData.map((current_data) => {
        return (
          <div className="imageCard" key={current_data.id}>
            <div className="image">
              <img src={current_data.image} alt="image" />
            </div>
            <h2>Name: {current_data.name}</h2>
            <h4>Age: {current_data.age}</h4>
            <h4>Gender: {current_data.gender}</h4>
            <h3>Occupation: {current_data.occupation}</h3>
            <p>Description: {current_data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCard;
