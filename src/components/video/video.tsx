import React from "react";
import styles from "./video.module.scss";

type VideoProps = {
  title: string;
  src: string;
};

const Video = ({ title, src }: VideoProps) => {
  return (
    <div className={styles.video}>
      <h4>{title}</h4>
      <video controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
