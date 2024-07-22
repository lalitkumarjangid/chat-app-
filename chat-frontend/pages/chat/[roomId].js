import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ChatRoom from '../../components/ChatRoom';
import { initSocket } from '../../lib/socket';
import { fetchMessages } from '../../lib/api';

export default function ChatRoomPage() {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const router = useRouter();
  const { roomId } = router.query;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/login');
      return;
    }

    if (roomId) {
      const newSocket = initSocket(roomId, user.username);
      setSocket(newSocket);

      fetchMessages(roomId).then(setMessages).catch(console.error);

      newSocket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => newSocket.close();
    }
  }, [roomId]);

  const sendMessage = (text) => {
    if (socket) {
      socket.emit('sendMessage', { text, roomId });
    }
  };

  if (!roomId) return <div>Loading...</div>;

  return <ChatRoom messages={messages} sendMessage={sendMessage} roomId={roomId} />;
}