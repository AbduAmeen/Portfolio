import Head from "next/head";
import ProjectCard from "../components/projectcard";

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
              <text className="body">Portfolio</text>
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
        <text className="title">Hello world, I am Abd-Alrahman Ameen</text>
        <text className="subtitle">
          I am a developer interested in improving the world with the power of
          software
        </text>
      </div>

      {/* <div className="straightrects">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
      </div>
      <div className="rotatedrects">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
      </div> */}
    </div>
    <div className="projectscreen">
      <div className="projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
    <div className="contact">
      <input className="single" />
      <input className="single" />
      <textarea cols={40} rows={5}></textarea>
    </div>
  </>
);

export default Index;
