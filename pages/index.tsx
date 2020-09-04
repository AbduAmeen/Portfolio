import Head from "next/head";
import ProjectCard from "../components/projectcard";
import { TextField } from "@material-ui/core";

const Index: React.FunctionComponent = () => (
  <>
    <div className="landingpage">
      <div className="nav">
        <ul>
          <li>
            <a className="body">
              <text className="body">Home</text>
            </a>
          </li>
          <li>
            <a>
              <text className="body">Projects</text>
            </a>
          </li>
          <li>
            <a className="body">
              <text className="body">Contact</text>
            </a>
          </li>
        </ul>
      </div>

      <div className="main">
        <text className="headingfour">
          Hello world, I am Abd-Alrahman Ameen
        </text>
        <text className="subtitle">
          I am a developer interested in improving the world with the power of
          software
        </text>
      </div>
      <div className="rects">
        <div className="rect color1" />
        <div className="rect color2" />
        <div className="rect color3" />
        <img
          src={"/rotatedrects.svg"}
          alt="rotatedrects"
          className="rotatedrects"
        />
      </div>
    </div>

    <div className="projectscreen">
      <text className="title">Projects</text>
      <div className="projects">
        <ProjectCard
          title="Project Title"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has"
          url="https://github.com/AbduAmeen/Website-Blocker"
        />
        <ProjectCard
          title="Project Title"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has"
          url="https://github.com/AbduAmeen/Website-Blocker"
        />
        <ProjectCard
          title="Project Title"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has"
          url="https://github.com/AbduAmeen/Website-Blocker"
        />
        <ProjectCard
          title="Project Title"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has"
          url="https://github.com/AbduAmeen/Website-Blocker"
        />
        <ProjectCard
          title="Project Title"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has"
          url="https://github.com/AbduAmeen/Website-Blocker"
        />
        <ProjectCard
          title="Project Title"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has"
          url="https://github.com/AbduAmeen/Website-Blocker"
        />
      </div>
    </div>
    <div className="contact">
      <text className="title">Contact</text>
      <div className="input">
        <div className="single">
          <TextField
            variant="outlined"
            required
            label="Your name"
            size="small"
            fullWidth
          />
        </div>
        <div className="single">
          <TextField
            variant="outlined"
            required
            label="Your e-mail"
            size="small"
            fullWidth
          />
        </div>
        <div className="single">
          <TextField
            variant="outlined"
            size="small"
            label="Your message"
            rows={7}
            required
            multiline
            fullWidth
          />
        </div>
      </div>
    </div>
    {/* <img src="/drawing.svg" alt="caret" key={Date.now()} className="caret" /> */}
  </>
);

export default Index;
