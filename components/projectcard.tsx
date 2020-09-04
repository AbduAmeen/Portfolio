import React from "react";
import { ChevronRight } from "react-feather";
import { Card, CardContent, makeStyles, ButtonBase } from "@material-ui/core";

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
      <Card>
        <ButtonBase
          style={{ display: "block", textAlign: "initial" }}
          onClick={(event) => {
            window.location.href = url;
          }}
        >
          <CardContent>
            <text className="subtitle1">{title}</text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <p className="subtitle2">{content}</p>
              <div className="arrow">
                <ChevronRight />
              </div>
            </div>
          </CardContent>
        </ButtonBase>
      </Card>
    </>
  );
};

export default ProjectCard;
