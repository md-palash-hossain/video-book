import React from 'react';
import Video from '../video/video';
import styles from './video-list.module.scss';

interface Props {
  title: string;
  videos: { title: string; url: string }[];
}

const VideoList: React.FC<Props> = ({ title, videos }) => {
  return (
    <div className={styles.videoList}>
      <h3>{title}</h3>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <Video title={video.title} url={video.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
