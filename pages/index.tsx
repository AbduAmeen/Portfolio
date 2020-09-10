import Head from "next/head";
import react from "react";
import ProjectCard from "../components/projectcard";
import SkillCard from "../components/skillcard";
import { Menu } from "react-feather";

const Index: React.FunctionComponent = () => {
  const [navopen, setNavOpen] = react.useState(false);
  react.useEffect(() => {
    if (window.innerWidth >= 992) setNavOpen(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) setNavOpen(true);
      else setNavOpen(false);
    });
  });
  return (
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
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <text style={{ margin: "1em" }} className="t bold">
            Abdu
          </text>
          <div
            id="hambutton"
            className="hambutton"
            onClick={() => {
              var navbuttons = document.getElementById("navbuttons");
              if (navopen == true) setNavOpen(false);
              else {
                setNavOpen(true);
              }
            }}
          >
            <Menu />
          </div>
        </div>

        <div
          id="navbuttons"
          className="navbuttons"
          style={{ display: navopen ? "flex" : "none" }}
        >
          <a
            className="caption active"
            href="#landingpage"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Home
          </a>
          <a
            className="caption"
            href="#whoiam"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Who I Am
          </a>
          <a
            className="caption"
            href="#project"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Projects
          </a>
          <a
            className="caption"
            href="#contact"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Contact
          </a>
        </div>
      </div>
      <div
        className="content"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        <div id="main" className="main">
          <div id="landingpage" className="landingpage">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text className="h1 bold">
                Hello world,
                <br /> I am Abd-Alrahman Ameen
              </text>
              <text className="st">
                I am a developer interested in improving the world with the
                power of software
              </text>
            </div>
            <div className="mainimg">
              <img src="mounthood.jpg" />
              <text className="grey">Mount Hood, Oregon</text>
            </div>
          </div>
          <div id="whoiam" className="whoiam">
            <text className="title h3 bold">Who I Am</text>
            <p className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div id="skills" className="skills">
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
          <div id="project" className="project">
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

          <div id="contact" className="contact">
            <text className="h3 bold">Contact</text>
            <div className="emailbox">
              <text className="st grey">Have an offer or want to chat?</text>
              <text className="h4 bold email">abdu.ameen000@gmail.com</text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
