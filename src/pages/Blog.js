import { NavigationBar } from "../components/NavigationBar";
import memeImage from "../assets/meme.jpg";
import musicImage from "../assets/music.png";
import gaitImage from "../assets/gait-2.png";
import RobotImage from "../assets/robot.png";
import MysteriesImage from "../assets/mysteries.jpg";
import SelfOperatingComputerImage from "../assets/soc.png";
import { ContentContainer } from "../styles/pageStyles";
import { PageContainer, MainContainer } from "../styles/pageStyles";
import { useEffect } from "react";
export const Blog = ({ isMobile }) => {
  useEffect(() => {
    document.title = "Blog | JoshBickett.com";
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
              <h3>The background</h3>
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
              <h3>A new type of AI agent</h3>
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
                <a href="https://github.com/OthersideAI/self-operating-computer/">
                  Self-Operating Computer Framework.
                </a>
              </p>
              <p>
                I played with the idea of a visual OS-level agent for a week.
                What became clear is that if you give a multimodal model an
                objective, passed it screenshots, and prompt it to output mouse
                and keyboard actions, it can operate a computer. I formulated
                the following architecture and built it. As far as I'm aware it
                didn't exist prior.
              </p>
              <b>Architecture</b>
              <ul>
                <li>1. User passes objective</li>
                <li>2. AI takes a screenshot</li>
                <li>
                  3. AI makes mouse or keyboard action toward the objective
                </li>
                <li>4. AI evaluates if it completed the objective</li>
                <li>5. If not, go back to 2.</li>
              </ul>
              <p>
                I tinkered and tinkered. I couldn't get it working with
                Llava-1.5. Then...gpt-4-vision-preview was released. I hacked on
                improving the project more and then hooked it up to
                gpt-4-vision-preview. I gave it the objective: "write a poem in
                the new note window."{" "}
              </p>
              <p>
                It worked! When I took my hands of the keyboard and saw the
                model output a mouse pixel movement. The mouse started moving
                and moved over the new note pad. The model output a click event.
                The model started typing a poem. It was one of the most surreal
                moments I've experienced.
              </p>
              <p>
                I was eager to share the results.{" "}
                <a href="https://x.com/josh_bickett/status/1721975391047589934">
                  I shared a post on Twitter.com
                </a>{" "}
                and the communities reaction was greater than I imaged. It was
                the first time I had a tweet go viral.{" "}
              </p>
              <p>
                It was worth mentioning that what I original envisioned as a
                Self-Operating Computer with Llava-1.5 running locally was a bit
                different in nature. The open-source community did eventually
                <a href="https://github.com/OthersideAI/self-operating-computer?tab=readme-ov-file#try-llava-hosted-through-ollama--m-llava">
                  {" "}
                  setup Llava to run locally
                </a>{" "}
                and fit the project to it's name.
              </p>
            </div>
          </ContentContainer>
        </div>
      </MainContainer>
    </PageContainer>
  );
};
