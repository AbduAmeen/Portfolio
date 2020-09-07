import React from "react";
import { ChevronRight } from "react-feather";
import styles from "../styles/projectcard.module.scss";

interface ProjectCardProps {
  title: string;
  content: string;
  url: string;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  title,
  content,
  url,
}: ProjectCardProps) => {
  return (
    <>
      <div
        className={styles.projectrect}
        onClick={(event) => {
          window.location.href = url;
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          <text className="st bold">{title}</text>
          <p>{content}</p>
        </div>
        <div className={styles.arrow}>
          <ChevronRight />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
