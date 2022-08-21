import { NavigationBar } from "../components/NavigationBar";
import memeImage from "../assets/meme.jpg";
import musicImage from "../assets/music.png";

export const Projects = ({ isMobile }) => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <NavigationBar active={"projects"} isMobile={isMobile} />

        <div
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 2fr 1fr",
            }}
          >
            <div></div>
            <img
              src={memeImage}
              alt="writing"
              style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
            />
            <div>
              <h3>
                <a href="https://makememe.ai/">Makememe.ai</a>
              </h3>
              <p>some text here</p>
            </div>
            <div></div>
          </div>
        </div>
        <div
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 2fr 1fr",
            }}
          >
            <div></div>
            <img
              src={musicImage}
              alt="writing"
              style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
            />
            <div>
              <h3>
                <a href="https://makesong.ai/">Makesong.ai</a>
              </h3>
              <p>some text here</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
