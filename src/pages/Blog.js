import { NavigationBar } from "../components/NavigationBar";
import memeImage from "../assets/meme.jpg";
import musicImage from "../assets/music.png";
import gaitImage from "../assets/gait-2.png";
import RobotImage from "../assets/robot.png";
import MysteriesImage from "../assets/mysteries.jpg";
import SelfOperatingComputerImage from "../assets/soc.png";
import { ContentContainer } from "../styles/pageStyles";
import {
  BigTileImages,
  PageContainer,
  MainContainer,
} from "../styles/pageStyles";
import { useEffect } from "react";
export const Blog = ({ isMobile }) => {
  useEffect(() => {
    document.title = "Projects";
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <PageContainer>
      <NavigationBar active={"Blog"} isMobile={isMobile} />

      <MainContainer style={{ maxWidth: "700px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "50px 0px",
          }}
        >
          <ContentContainer>
            <div>
              <h2>
                A year since the launch of Self-Operating Computer Framework
              </h2>
              <p>
                November 3rd, 2023 was the “initial commit”. The goal of the
                project? Create the first framework to enable multimodal models
                to operate computers as humans, do with mouse and keyboard.{" "}
              </p>
              <h4>The background</h4>
              <p>
                The first time a saw an AI agent was{" "}
                <a href="https://x.com/sharifshameem/status/1405462642936799247">
                  Sharif's GPT-3 demo
                </a>{" "}
                in mid-2021. I was blown away. I thought, woah how is this going
                to change the internet?
              </p>
              <p>
                <a href="https://x.com/josh_bickett/status/1608544931668426753">
                  I had a lot of questions{" "}
                </a>
                about what the future of the web looked like. There were many
                ideas thrown around on Twitter. The idea of "generative-web"
                came up and{" "}
                <a href="https://x.com/josh_bickett/status/1609214028093575168">
                  I took a shot at it myself
                </a>{" "}
                and{" "}
                <a href="https://github.com/joshbickett/generative-web">
                  open-source the project.
                </a>{" "}
                It is interesting to reflect on a few years later. I think
                web-browsing agents have been less impactful in the last 2 years
                than{" "}
                <a href="https://x.com/josh_bickett/status/1608590282584645633">
                  I expected.
                </a>{" "}
              </p>
              <p>
                I was greatly unaware of the long history of AI agents. I was
                unaware that OpenAI created an computer-operating AI agent in
                2016. The system was called <a href="">Universe</a> and "..
                allows an AI agent to use a computer like a human does: by
                looking at screen pixels and operating a virtual keyboard and
                mouse."
              </p>

              <p>
                The first open-source web-browsing AI agent I saw was{" "}
                <a href="https://github.com/nat/natbot">Natbot</a> in September
                2022. Nat threw this together in a weekend and it became clear
                to me that he was a serious hacker.{" "}
              </p>

              <p>
                After we saw Natbot, the HyperWrite team started building a
                web-browsing agent and after a few months of our heads down we
                launched what I understand to be the{" "}
                <a href="https://venturebeat.com/ai/hyperwrite-unveils-breakthrough-ai-agent-that-can-surf-the-web-like-a-human/">
                  first commercial available web-browsing agent.
                </a>{" "}
                It was built through{" "}
                <a href="https://chromewebstore.google.com/detail/hyperwrite-ai-assistant/kljjoeapehcmaphfcjkmbhkinoaopdnd?hl=en-US">
                  our Chrome Extension{" "}
                </a>{" "}
                that we had published originally with our TypeAhead feature
                which univerally brough writing suggestions to any text field on
                the web. We had a lot of fun building it and did many novel
                things, but that's for another post.
              </p>
              <h4>A new type of AI agent</h4>
              <p>
                While building the LLM-based web browsing agent, our team
                taggled some challenges with the LLM-only approach on the web.
                We anticipated multimodal agents that could iteract with
                computers more similarly to humans would help alleviate some of
                these challenges.{" "}
              </p>
              <p>
                Prior to GPT-4-vision-preview, Matt had shared an idea about
                overlaying a grid on a screenshot and sending that to a
                multimodal model so it could estimate pixels to click on a
                screen. That key insight got me thinking...
              </p>
              <p>
                LLaVA-1.5 was released in October 2023. Matt Shumer hosted the
                model and shared an endpoint with me. I started hacking around
                with it. We knew that GPT-4-vision-preview was on the horizon.
              </p>
              <p>
                I started hacking on what I decided to call a{" "}
                <a href="https://x.com/josh_bickett/status/1716551556013924372">
                  Generalist Computer Agent
                </a>{" "}
                that would eventually become the{" "}
                <a href="https://github.com/OthersideAI/self-operating-computer/issues/80">
                  Self-Operating Computer Framework.
                </a>
              </p>
              <p>...this blog is a work in progress...</p>
            </div>
          </ContentContainer>
        </div>
      </MainContainer>
    </PageContainer>
  );
};
