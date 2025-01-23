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
              <b>January 22, 2025</b>
              <p>
                November 3rd, 2023 was the “initial commit”. The goal of the
                project? Create the first framework to enable multimodal models
                to operate computers like humans, using a mouse and keyboard.{" "}
              </p>
              <h3>The background</h3>
              <p>
                The first time I saw an AI agent was{" "}
                <a href="https://x.com/sharifshameem/status/1405462642936799247">
                  Sharif's GPT-3 demo
                </a>{" "}
                in mid-2021. I was blown away. It browsed the web, clicked
                buttons, and purchased Airpods, all autonomously.
              </p>
              {/* <p>
                I was unaware of a long history of AI agents. I was unaware that
                OpenAI created an computer-operating AI agent in 2016 called{" "}
                <a href="">Universe</a> and "allows an AI agent to use a
                computer like a human does: by looking at screen pixels and
                operating a virtual keyboard and mouse."
              </p> */}

              <p>
                Over a year later in September 2022, a similar web-browsing
                agent project called{" "}
                <a href="https://github.com/nat/natbot">Natbot</a> was
                open-sourced and I got the chance to clone and try it. Nat
                completed the project in a weekend. He's a serious hacker.
              </p>

              <p>
                After Natbot, our team at HyperWrite started building a
                web-browsing agent and after a few months of our heads down we
                launched what I understand to be the{" "}
                <a href="https://venturebeat.com/ai/hyperwrite-unveils-breakthrough-ai-agent-that-can-surf-the-web-like-a-human/">
                  first commercially available web-browsing agent
                </a>{" "}
              </p>
              <h3>A new type of AI agent</h3>
              <p>
                While building a web browsing agent, we came to understand the
                limitations of LLM-based web-browsing agents. LLMs can't see the
                visual representation of a page; they only process the HTML.
                Understanding a page purely through HTML context is challenging
                for LLMs. We anticipated multimodal agents that could interact
                with computers in a more human-like way would help address some
                of these challenges.{" "}
              </p>
              <p>
                Prior to GPT-4-vision-preview, Matt had shared an idea about
                overlaying a grid on a screenshot and sending that to a
                multimodal model so it could estimate pixels to click on a
                screen.
              </p>
              <p>
                LLaVA-1.5 was released in October 2023. Matt Shumer hosted the
                model and shared an endpoint with me. I started hacking around
                with it. We knew that GPT-4-vision-preview would arrive in the
                near future.
              </p>
              <p>
                At first I called the project the{" "}
                <a href="https://x.com/josh_bickett/status/1716551556013924372">
                  Generalist Computer Agent.
                </a>{" "}
                It would eventually become the{" "}
                <a href="https://github.com/OthersideAI/self-operating-computer/">
                  Self-Operating Computer Framework.
                </a>
              </p>
              <p>
                I played with the idea of a visual OS-level agent for a week.
                What became clear is that if you give a multimodal model an
                objective, pass it screenshots, and prompt it to output mouse
                and keyboard actions, it could operate a computer. I formulated
                an architecture and built it. As far as I'm aware it didn't
                exist prior.
              </p>
              <b>Architecture</b>
              <ul>
                <li>• User provides an objective </li>
                <li>• Create a loop</li>
                <li>
                  <ul>
                    <li>
                      <li>
                        <b>1.</b> Passed the objective, a screenshot, and a
                        prompt to a Vision-language Model (VLM)
                      </li>
                      <li>
                        <ul>
                          <li>
                            • The prompt could look something like the system
                            prompt below{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <b>2.</b>
                        Receive the LLM completion and evaluate if the objective
                        is reached. If it is, then break out of loop.
                      </li>
                      <li>
                        <b>3.</b> If not reached, parse the LLM completion and
                        fire the keyboard or mouse commands with{" "}
                        <code>pyautogui</code>
                      </li>

                      <li>
                        <b>4.</b> Go back to step <b>1.</b>
                      </li>
                    </li>
                  </ul>
                </li>
              </ul>
              <b>System Prompt</b>
              <br />
              <br />
              <code>
                You are operating a computer, using the same operating system as
                a human. From looking at the screen, the objective, and your
                previous actions, take the next best series of action. You have
                4 possible operation actions available to you. The{" "}
                <code>pyautogui</code>
                library will be used to execute your decision. Your output will
                be used in a `json.loads` statement.
                <br />
                <br />
                <b>1.</b> click - Move mouse and click - Look for text to click.
                Try to find relevant text to click, but if there's nothing
                relevant enough you can return `"nothing to click"` for the text
                value and we'll try a different method.
                <br />
                2. write - Write with your keyboard
                <br />
                3. press - Use a hotkey or press key to operate the computer
                <br />
                4. done - The objective is completed
              </code>
              <br />
              <br />
              <p>
                After tinkering and tinkering I could not get it working with
                <code>Llava-1.5</code>. Then on November 6,{" "}
                <a href="https://openai.com/index/new-models-and-developer-products-announced-at-devday/">
                  gpt-4-vision-preview was released.
                </a>{" "}
                I hooked up <code>gpt-4-vision-preview</code> and I gave it the
                objective: "write a poem in the new note window."{" "}
              </p>
              <p>
                I took my hands off the keyboard and saw the model output a
                mouse pixel. <code>pyautogui</code> read the pixel location. The
                mouse moved over the new note pad. The model output a click
                event. <code>pyautogui</code> fired the click event. The model
                output a poem. <code>pyautogui</code> typed the poem. It
                happened and I was left staring at the completed poem in the
                Note. I realized that was probably the first time a VLM operated
                a computer. It was a surreal moment.
              </p>
              <b>Operating System Commands</b>
              <ul>
                <li>
                  • Keyboard | <code>pyautogui.write</code>: <br />
                  <br />
                  This operation is straightforward. The LLM completion is
                  simply passed to the <code>pyautogui</code> function.
                  <br />
                  <br />
                </li>
                <li>
                  • Mouse Click | <code>pyautogui.moveTo</code> &{" "}
                  <code>pyautogui.click</code>: <br />
                  <br /> This is a bit trickier, I had to figure out how to get
                  the mouse to click on the right spot. I ended up using a grid
                  system and sending the grid to the model. The model would
                  guess the width and height in % of the total and I'd convert
                  it to pixels.
                  <br />
                  <br />
                </li>
              </ul>

              <b>Open-Sourcing</b>
              <p>
                I was eager to share the results.{" "}
                <a href="https://x.com/josh_bickett/status/1721975391047589934">
                  I posted on Twitter
                </a>{" "}
                and the community's reaction was greater than I imagined.
              </p>

              <p>
                A demo wasn't enough, I wanted to get an open-source project
                into the community's hands so they could try it themselves. It
                had some issues to be worked out. I sorted through the most
                common use cases in my head and ran them to identify bugs. Then
                I fixed those bugs. I did that for a while until I felt that the
                project was good enough to wow people when they tried it the
                first time. Twenty days later,{" "}
                <a href="https://x.com/josh_bickett/status/1729163560713060546">
                  I launched it to the open-source community
                </a>{" "}
                and the post went viral. Shortly after it became the{" "}
                <a href="https://x.com/josh_bickett/status/1730600095463399603">
                  #1 trending project on GitHub.
                </a>
              </p>
              <b>Fast forward</b>
              <p>
                For the first time, I was learning how to manage an open-source
                project that developers wanted to contribute to. That was a fun
                and interesting challenge. For the first few weeks, I reviewed
                new PRs the first day they were put up. Anyone who submitted a
                strong PR was added to an email group. These contributors were a
                great help and I was able to send issues into this group and
                often someone would pick up the issue and go fix it.{" "}
                <a href="https://github.com/michaelhhogue">@michahhogue</a>{" "}
                provided high-quality PRs and was very responsive so I added him
                as a maintainer. In retrospect, one of my favorite parts was
                witnessing an open-source community develop firsthand and
                meeting collaborators who just show up and push valuable code.
              </p>
              <p>
                The next project I saw use a vision model to operate the
                computer was{" "}
                <a href="https://x.com/hellokillian/status/1743418943120040109">
                  Open Interpreter 0.2.0.{" "}
                </a>
                A few things impressed me by their version:
                <ul>
                  <li>
                    1. They hooked it up to Apples native modal UI library so
                    the AI could display what it was doing at each step in the
                    top right of the screen. 2.
                  </li>
                  <li>2. They used OCR to do precise clicking ...</li>
                </ul>
              </p>
              <p>
                Computer-operating agents gained more traction over the year.
                More labs, more papers, more teams focused on this type of
                framework. Namely, letting a VLM control a computer with a mouse
                and a keyboard, like a human does. Most notably, Anthropic
                unveiled their agent, called{" "}
                <a href="https://www.anthropic.com/news/3-5-models-and-computer-use">
                  Computer Use:
                </a>
                <br />
                <br />
                <quote>
                  "We’re also introducing a groundbreaking new capability in
                  public beta: computer use. Available today on the API,
                  developers can direct Claude to use computers the way people
                  do—by looking at a screen, moving a cursor, clicking buttons,
                  and typing text."
                </quote>
                <br />
                <br />
                Now, there are discussions that OpenAI may launch a similar
                agent called Operator this week.
                <br />
                <br />
                I'm excited to see what the future holds. In the next five
                years, I expect advanced multimodal models to fully operate
                computers and handle long, complex tasks
              </p>
              <b>About the name</b>
              <p>
                {" "}
                It is worth mentioning that my original vision of a
                Self-Operating Computer with <code>Llava-1.5</code> running
                locally evolved into a project that gained popularity for using
                an external AI to operate the computer. In reality, the project
                became popular while using an external AI via OpenAI API. The
                open-source community did eventually{" "}
                <a href="https://github.com/OthersideAI/self-operating-computer?tab=readme-ov-file#try-llava-hosted-through-ollama--m-llava">
                  integrate Llava.
                </a>
              </p>
            </div>
          </ContentContainer>
        </div>
      </MainContainer>
    </PageContainer>
  );
};
