import { useMemo, useState } from 'react';
import WavesurferPlayer from '@wavesurfer/react';

import PlayPauseButton from './PlayPauseButton';

const Sound = ({ blob, autoplay, type }: any) => {
  const [wavesurfer, setWavesurfer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws: any) => {
    setWavesurfer(ws);
    setIsPlaying(autoplay);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  const url = useMemo(() => URL.createObjectURL(blob), [blob, autoplay]);

  return (
    <div className=" flex space-x-4">
      <div className="py-2">
        <PlayPauseButton isPlaying={isPlaying} playPause={onPlayPause} />
      </div>
      <div className="flex-1">
        <WavesurferPlayer
          height={50}
          waveColor={type === 'server' ? 'violet' : 'white'}
          autoplay={autoplay}
          url={url}
          onReady={onReady}
          onFinish={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default Sound;
