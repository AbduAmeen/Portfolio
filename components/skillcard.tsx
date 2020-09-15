import React from "react";
import styles from "../styles/skillcard.module.scss";

interface SkillCardProps {
  imgsrc: string;
  content: string;
}

const SkillCard: React.FunctionComponent<SkillCardProps> = ({
  imgsrc,
  content,
}: SkillCardProps) => {
  return (
    <>
      <div className={styles.skillcard}>
        <div className={styles.img}>
          <img src={imgsrc} height="128px"></img>
        </div>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
