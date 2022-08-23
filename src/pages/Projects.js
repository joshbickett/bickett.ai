import { NavigationBar } from "../components/NavigationBar";
import memeImage from "../assets/meme.jpg";
import musicImage from "../assets/music.png";
import gaitImage from "../assets/gait-2.png";

export const Projects = ({ isMobile }) => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <NavigationBar active={"projects"} isMobile={isMobile} />

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
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="content-container"
            >
              <img
                src={memeImage}
                alt="writing"
                style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
              />
              <div>
                <h3>
                  <a href="https://makememe.ai/">makememe.ai</a>
                </h3>
                <h5 style={{ margin: 0, padding: 0, lineHeight: "2px" }}>
                  Award:{" "}
                  <a href="https://www.producthunt.com/products/makememe-ai">
                    Product of the Day (Product Hunt)
                  </a>
                </h5>
                <p>
                  This app is a text-to-meme generator that uses GPT-3 and
                  semantic search to create a meme based on user input in under
                  5 seconds.{" "}
                  <a href="https://github.com/joshbickett/makememe_ai">
                    The code
                  </a>{" "}
                  is available on Github. I published{" "}
                  <a href="https://towardsdatascience.com/how-to-make-memes-with-ai-in-python-986944bce5b4">
                    How to Make Meme with AI in Python
                  </a>{" "}
                  in Toward Data Science to help understand how it works under
                  the hood.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="content-container"
            >
              <img
                src={musicImage}
                alt="focus"
                style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
              />
              <div>
                <h3>
                  <a href="https://makesong.ai/">makesong.ai</a>
                </h3>
                <p>
                  I am currently exploring what is possible with{" "}
                  <a href="https://jukebox.openai.com/">Jukebox</a> and working
                  on a simple app where users can create a song with AI in under
                  2 minutes.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="content-container"
            >
              <img
                src={gaitImage}
                alt="gait"
                style={{
                  width: "200px",
                  borderRadius: "30px",
                  margin: "10px",
                }}
              />
              <div>
                <h3>
                  <a href="https://apps.apple.com/us/app/gait-a-driver-score-app/id1516971190">
                    Gait
                  </a>
                </h3>
                <p>
                  My cofounder and I started an insurance technology company
                  called <a href="https://gaitcar.com/">Gait, Inc.</a> that
                  offered a software development kit (SDK) to insurance
                  companies to enable their usage-based insurance products. We
                  sold the company through{" "}
                  <a href="https://microacquire.com/">MicroAcquire</a> in 2022
                  and I started focusing on AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
