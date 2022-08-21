import { NavigationBar } from "../components/NavigationBar";
import memeImage from "../assets/meme.jpg";
import musicImage from "../assets/music.png";

export const Projects = ({ isMobile }) => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <NavigationBar active={"my focus"} isMobile={isMobile} />

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
              <a href="https://makememe.ai/">makememe.ai</a>
            </h3>
            <p>
              This app is a text-to-meme generator that uses GPT-3 and semantic
              search to create a meme based on user input in under 5 seconds.{" "}
              <a href="https://github.com/joshbickett/makememe_ai">The code</a>{" "}
              is available on Github. I published{" "}
              <a href="https://towardsdatascience.com/how-to-make-memes-with-ai-in-python-986944bce5b4">
                How to Make Meme with AI in Python
              </a>
              in Toward Data Science to help understand how it works under the
              hood.
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
            src={musicImage}
            alt="focus"
            style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
          />
          <div>
            <h3>
              <a href="https://makesong.ai/">makesong.ai</a>
            </h3>
            <p>This</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
