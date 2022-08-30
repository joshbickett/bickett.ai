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
            display: "grid",
            gridTemplateColumns: "1fr 5fr 1fr",
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                margin: "50px 0px",
              }}
            >
              <h2>FOCUS</h2>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  margin: "0 20px",
                }}
              >
                Hello, I am a self-taught software engineer interested in deep
                learning and its applications.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "0 40px",
              }}
              className="content-container"
            >
              <img
                src={scienceImg}
                alt="focus"
                style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
              />
              <div>
                <h3>Deep learning and AI</h3>
                {/* <p>
                  Before college, I was fascinated by physics and wondered what
                  it would be like to be alive in 1905 and read of entirely new
                  physical laws being discovered. As I studied the sciences in
                  college, each seemed mature. When I discovered deep learning,
                  it appeared to be a young and important science that would
                  flourish in my lifetime.
                </p> */}
                <p>
                  I am interested in the young and important science that will
                  flourish in our lifetimes. I am interested in contributing to
                  the engineering and science.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "0 40px",
              }}
              className="content-container"
            >
              <img
                src={startupImage}
                alt="writing"
                style={{
                  maxWidth: "200px",
                  borderRadius: "30px",
                  margin: "10px",
                }}
              />
              <div style={{ maxWidth: "600px" }}>
                <h3>Startups</h3>
                <p>
                  I like working on small teams and I am interested in building
                  useful tools and applying them at scale.
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
