import "../App.css";

import scienceImg from "../assets/science.png";
import writingImg from "../assets/writing.png";
import startupImage from "../assets/startups.png";

import { NavigationBar } from "../components/NavigationBar";
import { useMediaQuery } from "react-responsive";

export const Focus = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <NavigationBar active={"my focus"} isMobile={isMobile} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "50px 200px",
          }}
        >
          <div style={{ textAlign: "center", fontSize: "30px" }}>
            In the next decade, I am most excited about startups applying the
            science of deep learning.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 2fr 1fr",
          }}
        >
          <div></div>
          <img
            src={startupImage}
            alt="writing"
            style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
          />
          <div>
            <h3>Startups</h3>
            <p>
              I am interested in startups and working on small teams to create
              large impact through software.
            </p>
          </div>
          <div></div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 2fr 1fr",
          }}
        >
          <div></div>
          <img
            src={scienceImg}
            alt="focus"
            style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
          />
          <div>
            <h3>Deep learning and AI</h3>
            <p>
              I am interested in the science and ensuring the technology created
              are impactful in positive ways.
            </p>
          </div>
          <div></div>
        </div>

        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 2fr 1fr",
          }}
        >
          <div></div>
          <img
            src={writingImg}
            alt="writing"
            style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
          />
          <div>
            <h3>Writing</h3>
            <p>
              I am interested in sharing my thoughts and ideas with the world.
            </p>
          </div>
          <div></div>
        </div> */}
      </div>
    </div>
  );
};
