const ChatItem = ({ chat }) => {
  return (
    <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
      <h3 className="font-semibold">{chat?.name || "User"}</h3>
      <p className="text-sm text-gray-500">Last message...</p>
    </div>
  );
};

export default ChatItem;