import React from "react";
import { ChevronRight } from "react-feather";
import styles from "../styles/projectcard.module.scss";

interface ProjectCardProps {
  title: string;
  content: string | any;
  url: string;
  urltitle: string;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  title,
  content,
  url,
  urltitle,
}: ProjectCardProps) => {
  return (
    <>
      <div className={styles.projectrect}>
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
        <div className={styles.button}>
          <a href={url}>{urltitle}</a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
