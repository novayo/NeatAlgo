// https://github.com/wesley-codes/React-player/tree/main
import { useState, useRef } from "react";
import { formatTime } from "./Timeformat";
import Container from "@mui/material/Container";
import ReactPlayer from "react-player";
import Control from "pages/Courses/VideoPlayer/Controller";

let count = 0;
export default function VideoPlayer() {
  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);

  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });

  const { playing, muted, volume, playbackRate, played, seeking } = videoState;

  const currentTime = videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : "00:00";
  const duration = videoPlayerRef.current ? videoPlayerRef.current.getDuration() : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const rewindHandler = () => {
    //Rewinds the video player reducing 5
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 10);
  };

  const handleFastFoward = () => {
    //FastFowards the video player by adding 10
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
  };

  const progressHandler = (state) => {
    if (count > 3) {
      console.log("close");
      controlRef.current.style.visibility = "hidden"; // toggling player control container
    } else if (controlRef.current.style.visibility === "visible") {
      count += 1;
    }
    console.log(state);
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value / 100) });
    videoPlayerRef.current.seekTo(parseFloat(value / 100));
  };

  const seekMouseUpHandler = (e, value) => {
    console.log(value);

    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current.seekTo(value / 100);
  };

  const volumeChangeHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    });
  };

  const volumeSeekUpHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    });
  };

  const muteHandler = () => {
    //Mutes the video player
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const onSeekMouseDownHandler = () => {
    setVideoState({ ...videoState, seeking: true });
  };

  const mouseMoveHandler = () => {
    controlRef.current.style.visibility = "visible";
    count = 0;
  };

  return (
    <>
      <div className="video_container">
        <Container maxWidth="md" justify="center">
          <div className="player__wrapper" onMouseMove={mouseMoveHandler}>
            <ReactPlayer
              ref={videoPlayerRef}
              className="player"
              url="https://drive.google.com/uc?id=1cQqrRhS0l2BOeNosDAinJ9KDt_vcHK59"
              width="100%"
              height="100%"
              playing={playing}
              volume={volume}
              muted={muted}
              onProgress={progressHandler}
            />

            <Control
              controlRef={controlRef}
              onPlayPause={playPauseHandler}
              playing={playing}
              onRewind={rewindHandler}
              onForward={handleFastFoward}
              played={played}
              onSeek={seekHandler}
              onSeekMouseUp={seekMouseUpHandler}
              volume={volume}
              onVolumeChangeHandler={volumeChangeHandler}
              onVolumeSeekUp={volumeSeekUpHandler}
              mute={muted}
              onMute={muteHandler}
              playRate={playbackRate}
              duration={formatDuration}
              currentTime={formatCurrentTime}
              onMouseSeekDown={onSeekMouseDownHandler}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
