import { movieAPI } from "../assets/movieAPI.js";
const ParallaxDemo = () => {
  return (
    <>
      {movieAPI.map((data) => {
        const section_style = {
          backgroundImage: `url(${data.cover_image})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          display: "grid",
          placeItems: "center",
          alignContent: "center",
          textTransform: "uppercase",
          color: "#fff",
          backgroundAttachment: "fixed",
        };
        const heading_style = {
          fontSize: "64px",
          fontWeight: "bold",

          textShadow: "2px 2px 5px #000",
        };

        const paragraph_style = {
          fontSize: "20px",
          fontWeight: "bold",
        };
        return (
          <div key={data.id} className="heroSection" style={section_style}>
            <h2 style={heading_style}>{data.name}</h2>
            <p style={paragraph_style}>{data.genre}</p>
          </div>
        );
      })}
    </>
  );
};

export default ParallaxDemo;
