import { useRef, useState } from "react";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";

function secondToStr(second: number) {
  return second > 0
    ? new Date(second * 1000)
        .toISOString()
        .substring(second < 3600 ? 14 : 11, 19)
    : "00:00";
}

function clamp(val: number, min: number, max: number) {
  return Math.max(Math.min(val, max), min);
}

function AudioPlayer(props: { src: string }) {
  const [duration, setDuration] = useState<number>(-1);
  const [canPlau, setCanPlay] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [hoveredTimestampStr, setHoveredTimestampStr] = useState<string>(
    secondToStr(duration),
  );
  const [hoverPos, setHoverPos] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayBackClick = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };
  const trackRef = useRef<HTMLDivElement>(null);
  const trackProgressRef = useRef<HTMLDivElement>(null);
  const [moving, setMoving] = useState<boolean>(false);

  const handleHover = (e: React.MouseEvent) => {
    const trackrefPos = trackRef.current?.getBoundingClientRect();
    if (trackrefPos && trackRef.current) {
      setHoverPos(clamp(e.clientX - trackrefPos.x, 0, trackrefPos.width));

      const timestampval = (hoverPos * duration) / trackrefPos.width;
      setHoveredTimestampStr(secondToStr(timestampval));
      if (moving) {
        changeAudioTimestamp(timestampval);
      }
    }
  };

  const changeAudioTimestamp = (second: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = second;
    }
  };

  return (
    <div
      onMouseMove={handleHover}
      onMouseLeave={() => setMoving(false)}
      className="select-none w-full flex text-xl items-center gap-3 px-3 py-2"
    >
      <button disabled={!canPlau} onClick={handlePlayBackClick}>
        {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}{" "}
      </button>
      <div
        ref={trackRef}
        onClick={() => {
          changeAudioTimestamp(
            (hoverPos * duration) /
              (trackRef.current ? trackRef.current.clientWidth : 1),
          );
        }}
        onMouseDown={() => setMoving(true)}
        onMouseUp={() => setMoving(false)}
        className={
          "w-full relative h-1.5 hover:h-2 rounded-full cursor-pointer overflow-visible ring-slate-500 bg-slate-300 group/track " +
          (moving && "h-2")
        }
      >
        <audio
          ref={audioRef}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onDurationChange={(e) =>
            setDuration((e.target as HTMLAudioElement).duration)
          }
          onTimeUpdate={({ target }) =>
            setTimestamp((target as HTMLAudioElement).currentTime)
          }
          onCanPlay={() => setCanPlay(true)}
          onLoadedMetadata={(e) =>
            setDuration((e.target as HTMLAudioElement).duration)
          }
          src={props.src}
        ></audio>

        <div
          ref={trackProgressRef}
          style={{ width: (timestamp * 100) / duration + "%" }}
          className="absolute top-0 h-full rounded-full left-0 bg-slate-500"
        >
          <div
            className={
              "bg-inherit w-4 h-4 absolute right-0 top-0 -translate-y-1/4 rounded-full translate-x-1/2 scale-0 transition-all group-hover/track:scale-100 " +
              (moving && "scale-100")
            }
          ></div>
        </div>
        <span
          style={{ left: hoverPos, pointerEvents: "none" }}
          className={
            "text-white text-[10px] px-2 py-0 rounded-md bg-slate-700 -top-1 -translate-x-1/2 opacity-0 group-hover/track:opacity-100 -translate-y-full absolute " +
            (moving && "opacity-100")
          }
        >
          {hoveredTimestampStr}
        </span>
      </div>
      <span className="text-base w-20">
        {isPlaying ? secondToStr(timestamp) : secondToStr(duration)}
      </span>
    </div>
  );
}

export default AudioPlayer;
