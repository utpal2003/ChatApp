import MessageInput from "./MessageInput";

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4">Messages will show here</div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;