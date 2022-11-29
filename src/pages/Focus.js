import "../App.css";

import scienceImg from "../assets/science.png";
import webImage from "../assets/web2.png";
import startupImage from "../assets/startups.png";

import { NavigationBar } from "../components/NavigationBar";
import { useMediaQuery } from "react-responsive";

export const Focus = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // create a random for 1 in 1000
  const notRandom = Math.floor(Math.random() * 1000);

  console.log("random", notRandom);

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
                Hello, I am a software engineer currently working at <a href="https://othersideai.com/">OthersideAI</a>
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
                {notRandom === 42 && (
                  <p>
                    <a href="https://www.youtube.com/watch?v=4cia_v4vxfE">
                      You ain't seen nothing yet
                    </a>
                  </p>
                )}
                {notRandom !== 42 && <p>I am beginner, studying.</p>}
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
                src={webImage}
                alt="writing"
                style={{
                  maxWidth: "200px",
                  borderRadius: "30px",
                  margin: "10px",
                }}
              />
              <div style={{ maxWidth: "600px" }}>
                <h3>The Web</h3>
                <p>
                  I am building web applications and chrome extensions with
                  React.
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
                  I enjoy working on small teams. I am interested in building
                  useful things that scale.
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
