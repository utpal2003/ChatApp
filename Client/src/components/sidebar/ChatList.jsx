import ChatItem from "./ChatItem";

const ChatList = () => {
  const chats = [];

  return (
    <div>
      {chats.map((chat, index) => (
        <ChatItem key={index} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;