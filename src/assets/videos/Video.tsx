import DavidGarrettDuelGuitarVsViolinLive from "./DavidGarrett_DuelGuitarVsViolinLive.mp4";
import DavidGarrettMissionImpossible from "./DavidGarrett_MissionImpossible.mp4";
import DavidGarrettSummer from "./DavidGarrett_Summer.mp4";
import DavidGarrettValentinaBabor from "./DavidGarrett_ValentinaBabor.mp4";
import 𝗗𝗮𝘃𝗶𝗱𝗚𝗮𝗿𝗿𝗲𝘁𝘁SmoothCriminal from "./𝗗𝗮𝘃𝗶𝗱𝗚𝗮𝗿𝗿𝗲𝘁𝘁_SmoothCriminal.mp4";
import 𝗗𝗮𝘃𝗶𝗱𝗚𝗮𝗿𝗿𝗲𝘁𝘁𝐅𝐮𝐫𝐢𝐨𝐮𝐬 from "./𝗗𝗮𝘃𝗶𝗱𝗚𝗮𝗿𝗿𝗲𝘁𝘁_𝐅𝐮𝐫𝐢𝐨𝐮𝐬.mp4";

import "./Video.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface VideoProps {
  ref: React.RefObject<HTMLVideoElement>;
}

function Video(props: VideoProps, ref: React.Ref<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current?.play();
    },
    pause() {
      videoRef.current?.pause();
    },
  }));

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.error("Video failed to load:", e);
    // Optionally display an error message or alternative content here
    console.log(props);
  };
  return (
    <div className="video-container">
      <video
        src={DavidGarrettSummer}
        className="video-item"
        controls
        onError={handleVideoError}
      />
      <video
        src={𝗗𝗮𝘃𝗶𝗱𝗚𝗮𝗿𝗿𝗲𝘁𝘁SmoothCriminal}
        className="video-item"
        controls
        onError={handleVideoError}
      />
      <video
        src={𝗗𝗮𝘃𝗶𝗱𝗚𝗮𝗿𝗿𝗲𝘁𝘁𝐅𝐮𝐫𝐢𝐨𝐮𝐬}
        className="video-item"
        controls
        onError={handleVideoError}
      />
      <video
        src={DavidGarrettMissionImpossible}
        className="video-item wide"
        controls
        onError={handleVideoError}
      />
      <video
        src={DavidGarrettDuelGuitarVsViolinLive}
        className="video-item wide"
        controls
        onError={handleVideoError}
      />
      <video
        ref={videoRef}
        src={DavidGarrettValentinaBabor}
        className="video-item wide"
        controls
        onError={handleVideoError}
      />
    </div>
  );
}

export default forwardRef(Video);
