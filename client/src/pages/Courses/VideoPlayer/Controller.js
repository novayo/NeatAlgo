import React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import Slider from "@mui/material/Slider";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import "./index.css";

const useStyles = makeStyles({
  volumeSlider: {
    width: "100px",
    color: "#9556CC",
  },

  bottomIcons: {
    color: "#999",
    padding: "12px 8px",

    "&:hover": {
      color: "#fff",
    },
  },
});

const PrettoSlider = withStyles({
  root: {
    height: "20px",
    color: "#9556CC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#9556CC",
    border: "2px solid currentColor",
    marginTop: -3,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 5,
    borderRadius: 4,
    width: "100%",
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

const Control = ({
  onPlayPause,
  playing,
  onRewind,
  onForward,
  played,
  onSeek,
  onSeekMouseUp,
  onVolumeChangeHandler,
  onVolumeSeekUp,
  volume,
  mute,
  onMute,
  duration,
  currentTime,
  onMouseSeekDown,
  controlRef,
}) => {
  const classes = useStyles();

  return (
    <div className="control_Container" ref={controlRef}>
      <div className="top_container"></div>
      <div className="mid__container">
        <div className="icon__btn" onClick={onRewind}>
          <FastRewindIcon fontSize="medium" />
        </div>

        <div className="icon__btn" onClick={onPlayPause}>
          {playing ? <PauseIcon fontSize="medium" /> : <PlayArrowIcon fontSize="medium" />}{" "}
        </div>

        <div className="icon__btn">
          <FastForwardIcon fontSize="medium" onClick={onForward} />
        </div>
      </div>
      <div className="bottom__container">
        <div className="slider__container">
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp}
            onMouseDown={onMouseSeekDown}
          />
        </div>
        <div className="control__box">
          <div className="inner__controls">
            <div className="icon__btn" onClick={onPlayPause}>
              {playing ? <PauseIcon fontSize="medium" /> : <PlayArrowIcon fontSize="medium" />}{" "}
            </div>

            <div className="icon__btn">
              <SkipNextIcon fontSize="medium" />
            </div>

            <div className="icon__btn" onClick={onMute}>
              {mute ? <VolumeOffIcon fontSize="medium" /> : <VolumeUpIcon fontSize="medium" />}
            </div>

            <Slider
              className={`${classes.volumeSlider}`}
              onChange={onVolumeChangeHandler}
              value={volume * 100}
              onChangeCommitted={onVolumeSeekUp}
            />

            <span>
              {currentTime} : {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
