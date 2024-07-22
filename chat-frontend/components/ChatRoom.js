import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

const ChatRoom = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const { roomId } = router.query;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/login');
      return;
    }

    const newSocket = io('http://localhost:1337', {
      query: { roomId, username: user.username },
    });

    setSocket(newSocket);

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    newSocket.on('userList', (userList) => {
      setUsers(userList);
    });

    return () => newSocket.close();
  }, [roomId]);

  const sendMessage = (text) => {
    if (socket) {
      socket.emit('sendMessage', { text, roomId });
    }
  };

  return (
    <div>
      <h1>Chat Room: {roomId}</h1>
      <UserList users={users} />
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;