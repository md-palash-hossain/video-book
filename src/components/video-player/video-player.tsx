import React from 'react';
import styles from './video-player.module.scss';
import { Book, Chapter } from '../../model/types';

type VideoPlayerProps = {
  selectedVerses: string;
  selectedBook: Book;
  selectedChapter: Chapter;


};

const VideoPlayer = ({ selectedVerses ,selectedBook,selectedChapter }: VideoPlayerProps) => {
  const videoUrl = `/assets/video/${selectedBook.name.toLowerCase()}-${selectedChapter}_${selectedVerses}.mp4`;

  return (
    <div className={styles.videoPlayer}>
      <video src={videoUrl} controls autoPlay></video>
    </div>
  );
};

export default VideoPlayer;
