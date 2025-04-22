import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlayPauseButton = ({
  playPause,
  isPlaying,
}: {
  playPause: () => void;
  isPlaying: boolean;
}) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={playPause}
      className="rounded-full p-2"
    >
      {isPlaying ? (
        <Pause className="text-gray-900 w-5 h-5" />
      ) : (
        <Play className="text-gray-900 w-5 h-5" />
      )}
    </Button>
  );
};

export default PlayPauseButton;
