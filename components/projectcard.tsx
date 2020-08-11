import React from "react";
import { ChevronRight } from "react-feather";

const ProjectCard: React.FunctionComponent = () => (
  <>
    <div className="projectrect">
      <text className="subtitle1">Project Title</text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p className="subtitle2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="arrow">
          <ChevronRight />
        </div>
      </div>
    </div>
  </>
);

export default ProjectCard;
