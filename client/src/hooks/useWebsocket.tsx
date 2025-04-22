import { useEffect, useRef } from 'react';

type WebSocketData = string | Blob;

const useWebsocket = <T extends WebSocketData>({
  onMessage,
}: {
  onMessage: (data: T) => void;
}) => {
  const socketRef = useRef<WebSocket | null>(null);

  const sendMessage = (input: WebSocketData) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(input);
    }
  };

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event: MessageEvent) => {
      onMessage(event.data as T);
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      socket.close();
    };
  }, []);

  return { socketRef, sendMessage };
};

export default useWebsocket;
