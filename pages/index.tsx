import Head from "next/head";
import react from "react";
import ProjectCard from "../components/projectcard";
import SkillCard from "../components/skillcard";
import { Menu, Download } from "react-feather";
import { GetStaticProps } from "next";

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "1em  0",
                }}
              >
                <a className="caption resume" href="resume.pdf">
                  <Download
                    height="16px"
                    width="16px"
                    style={{ marginRight: "0.3em" }}
                  />
                  Resume
                </a>
                <a
                  className="caption linkedin"
                  href="https://www.linkedin.com/in/abduameen/"
                >
                  <img src="linkedin.svg" />
                </a>
              </div>
            </div>
            <div className="mainimg">
              <img src="mounthood.jpg" />
              <text className="grey">Mount Hood, Oregon</text>
            </div>
          </div>
          <div id="whoiam" className="whoiam">
            <text className="title h3 bold">Who I Am</text>
            <p className="content">
              An independent and self-motivated junior software developer with
              hands-on experience gained through personal and open-source
              projects. Recognized for possessing a strong passion for
              continuing education initiatives and working with future
              technologies to drive personal and professional development.
            </p>
          </div>
          <div id="skills" className="skills">
            <text className="h3 bold">Skills</text>
            <div className="skillcards">
              <SkillCard
                content="WinAPI, Qt, Unreal Engine, MFC"
                imgsrc="cpp.svg"
              />
              <SkillCard
                content="React, GraphQL, TypeScript, Node.js, Express.js"
                imgsrc="js.svg"
              />
              <SkillCard
                content="Teamwork, Communication Skills, Time Management, Organization Skills"
                imgsrc="handshake.svg"
              />
            </div>
          </div>
          <div id="project" className="project">
            <text className="h3 bold">Projects</text>
            <div className="projects">
              <ProjectCard
                title="Chromium Browser"
                content={
                  <text>
                    Worked on a large program with a team of like-minded
                    software developers to complete goals.
                    <br />
                    <b>Skills:</b> Teamwork, Communication, C++, Git
                  </text>
                }
                urltitle="Gerrit"
                url="https://chromium-review.googlesource.com/q/owner:abdu.ameen000%2540gmail.com"
              />
              <ProjectCard
                title="Microsoft Calculator"
                content={
                  <text>
                    Interacted with developers to solve a problem, as well as
                    maintain code with a systematic approach.
                    <br />
                    <b>Skills:</b> C++, Git, XAML, Communication, Organization
                  </text>
                }
                urltitle="Github"
                url="https://github.com/microsoft/calculator/pull/447"
              />
              <ProjectCard
                title="Portfolio Website"
                content={
                  <text>
                    Used design principles to create a responsive UI. Also
                    worked with a web designer to design and implement using
                    designer/developer handoff. Implemented continuous
                    integration for automatic deployment of the website after
                    git push.
                    <br />
                    <b>Skills:</b> Communication, JavaScript, React, TypeScript,
                    Git, Figma, CI
                  </text>
                }
                urltitle="Github"
                url="https://github.com/AbduAmeen/Portfolio"
              />
              <ProjectCard
                title="Website Blocker"
                content={
                  <text>
                    Built a chrome extension to block websites specified by the
                    user. I developed it using asynchronous functions in
                    JavaScript to filter out URLs by implementing the Chrome
                    Extension Library. Created HTML/CSS pages as well as an
                    interactive table using JavaScript to list all of the
                    blocked URLs.
                    <br />
                    <b>Skills:</b> JavaScript, Git, HTML, CSS, Chrome Extension
                    Library
                  </text>
                }
                urltitle="Github"
                url="https://github.com/AbduAmeen/Website-Blocker"
              />
              <ProjectCard
                title="Texting Application"
                content={
                  <text>
                    Used the Qt library to create an application which uses the
                    network to communicate to other users. I implemented a
                    server/client architecture.
                    <br />
                    <b>Skills:</b> C++, Git, Qt
                  </text>
                }
                urltitle="Github"
                url="https://github.com/AbduAmeen/Messaging"
              />
              <ProjectCard
                title="Unreal Engine Game"
                content={
                  <text>
                    Unreal Engine Game I developed to learn about object
                    oriented programming, as well as templates in C++. I also
                    used it to understand in depth memory managment as well as
                    polymorphism.
                    <br />
                    <b>Skills:</b> C++, Unreal Engine
                  </text>
                }
                urltitle="Github"
                url="https://github.com/AbduAmeen/UE-Project"
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
