import ChatItem from "./ChatItem";

const chats = [
  { id: 1, name: "Rahul", lastMessage: "Hey bro!", online: true },
  { id: 2, name: "Anita", lastMessage: "Hello!", online: false },
  { id: 3, name: "John", lastMessage: "Done!", online: true },
];

const ChatList = ({ setSelectedChat }) => {
  return (
    <div className="space-y-2">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          setSelectedChat={setSelectedChat}   // ✅ PASS
        />
      ))}
    </div>
  );
};

export default ChatList;