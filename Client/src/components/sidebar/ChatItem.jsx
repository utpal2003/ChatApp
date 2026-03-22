const ChatItem = ({ chat, setSelectedChat }) => {
  return (
    <div
      onClick={() => setSelectedChat(chat)}  // ✅ CLICK ACTION
      className="flex items-center gap-3 p-3 rounded-chat hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
    >
      <img
        src={`https://i.pravatar.cc/150?img=${chat.id}`}
        className="w-10 h-10 rounded-full"
      />

      <div>
        <h3 className="font-medium">{chat.name}</h3>
        <p className="text-sm text-gray-500">{chat.lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;