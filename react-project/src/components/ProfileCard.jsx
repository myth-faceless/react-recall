import { ProfileData } from "./ProfileData.jsx";
import { personData } from "../assets/personData.js";
const ProfileCard = () => {
  return (
    <>
      {personData.map((currentElement) => (
        <ProfileData key={currentElement.id} currentElement={currentElement} />
      ))}
    </>
  );
};

export default ProfileCard;
