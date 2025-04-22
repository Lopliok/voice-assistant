import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

type Props = {
  onRecordingComplete: (blob: Blob) => void;
};

const Recorder = ({ onRecordingComplete }: Props) => {
  const recorderControls = useAudioRecorder();

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob) => onRecordingComplete(blob)}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        showVisualizer
        recorderControls={recorderControls}
      />
    </div>
  );
};

export default Recorder;
