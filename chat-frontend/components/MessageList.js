import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <strong>{message.user.username}: </strong>
          <span>{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;