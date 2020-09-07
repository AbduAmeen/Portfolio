import Head from "next/head";
import ProjectCard from "../components/projectcard";
import SkillCard from "../components/skillcard";

const Index: React.FunctionComponent = () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="nav">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <text className="t bold">Abdu</text>
      </div>
      <ul>
        <li>
          <a>
            <text className="caption">Home</text>
          </a>
        </li>
        <li>
          <a>
            <text className="caption">Projects</text>
          </a>
        </li>
        <li>
          <a>
            <text className="caption">Contact</text>
          </a>
        </li>
      </ul>
    </div>
    <div className="main">
      <div className="landingpage">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <text className="h1 bold">
            Hello world,
            <br /> I am Abd-Alrahman Ameen
          </text>
          <text className="st">
            I am a developer interested in improving the world with the power of
            software
          </text>
        </div>
        <div className="mainimg">
          <img src="mounthood.jpg" height="550px" />
          <text className="grey">Mount Hood, Oregon</text>
        </div>
      </div>

      {/* <div className="rects">
        <div className="rect color1" />
        <div className="rect color2" />
        <div className="rect color3" />
        <img
          src={"rotatedrects.svg"}
          alt="rotatedrects"
          className="rotatedrects"
        />
      </div> */}

      <div className="whoiam">
        <text className="title h3 bold">Who I Am</text>
        <text className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </text>
      </div>
      <div className="skills">
        <text className="h3 bold">Skills</text>
        <div className="skillcards">
          <SkillCard
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
            imgsrc="cpp.svg"
          />
          <SkillCard
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
            imgsrc="js.svg"
          />
          <SkillCard
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
            imgsrc="html.svg"
          />
        </div>
      </div>
      <div className="project">
        <text className="h3 bold">Projects</text>
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
        <text className="h3 bold">Contact</text>
        <div className="emailbox">
          <text className="st grey">Have an offer or want to chat?</text>

          <text className="h4 bold">abdu.ameen000@gmail.com</text>
        </div>
        {/* <div className="single"> */}
        {/* <TextField
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
          /> */}
        {/* </div> */}
      </div>
    </div>
    {/* <img src="/drawing.svg" alt="caret" key={Date.now()} className="caret" /> */}
  </>
);

export default Index;
