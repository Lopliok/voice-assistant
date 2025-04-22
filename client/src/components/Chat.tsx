import useWebsocket from '@/hooks/useWebsocket';
import { useState } from 'react';
import Recorder from './Recorder';
import Sound from './Sound';

type Message = {
  id: number;
  text: Blob;
  sender: 'user' | 'server';
};

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const { sendMessage } = useWebsocket({
    onMessage: (data: Blob) => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: data, sender: 'server' },
      ]);
    },
  });

  const onRecordingComplete = (blob: Blob) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: blob, sender: 'user' },
    ]);
    sendMessage(blob);
  };

  return (
    <div className="max-w-md mx-auto h-[500px] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            className={`max-w-[75%] rounded-2xl p-2 text-sm ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white self-end ml-auto'
                : 'bg-gray-50 text-gray-900 self-start mr-auto'
            }`}
          >
            <Sound
              blob={msg.text}
              type={msg.sender}
              autoplay={msg.sender === 'server' && idx === messages.length - 1}
            />
          </div>
        ))}
      </div>

      <div className="flex p-3 gap-2 justify-end">
        <Recorder onRecordingComplete={onRecordingComplete} />
      </div>
    </div>
  );
};
