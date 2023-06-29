import ReactPlayer from "react-player";
import { useState, useRef, useEffect } from "react";

export default function VideoPlayer({ url }) {
  const videoPlayerRef = useRef(null);
  const playedTimeRef = useRef(0);
  const [updatePlayedTimeEvery5Second, setUpdatePlayedTimeEvery5Second] = useState(0);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (!videoPlayerRef.current.player.isPlaying) {
        return;
      }
      setUpdatePlayedTimeEvery5Second(
        (updatePlayedTimeEvery5Second) => updatePlayedTimeEvery5Second + 1
      );
      if (updatePlayedTimeEvery5Second >= 5) {
        setUpdatePlayedTimeEvery5Second(0);
        console.log(`Upload played time: ${playedTimeRef.current}`);
      }
    }, 1000);
    return () => clearInterval(myInterval);
  }, [updatePlayedTimeEvery5Second]);

  return (
    <>
      <ReactPlayer
        ref={videoPlayerRef}
        url={url}
        controls
        width="100%"
        height="100%"
        config={{ file: { attributes: { controlsList: "nodownload" } } }} // Disable download
        onContextMenu={(e) => e.preventDefault()} // Disable right click
        onDuration={(duration) => {
          // Get total played time
          setDuration(duration);
        }}
        onProgress={(progress) => {
          // Get current played time
          if (!duration) {
            return;
          }
          let secondsElapsed = Math.ceil(progress.played * duration);
          playedTimeRef.current = secondsElapsed;
        }}
      />
    </>
  );
}
