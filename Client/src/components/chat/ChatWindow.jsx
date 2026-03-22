import MessageInput from "./MessageInput";

const ChatWindow = ({ setOpenSidebar, selectedChat }) => {

  // ❌ No chat selected
  if (!selectedChat) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select a chat to start messaging 💬
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b">

        <button
          onClick={() => setOpenSidebar(true)}
          className="md:hidden"
        >
          ☰
        </button>

        <img
          src={`https://i.pravatar.cc/150?img=${selectedChat.id}`}
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h3 className="font-semibold">{selectedChat.name}</h3>
          <p className="text-xs text-green-500">
            {selectedChat.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-2">
        <div className="bg-gray-200 px-3 py-2 rounded w-fit">
          Hello 👋
        </div>

        <div className="bg-blue-500 text-white px-3 py-2 rounded w-fit ml-auto">
          Hi!
        </div>
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatWindow;