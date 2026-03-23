import { FiMessageSquare, FiChevronLeft } from "react-icons/fi";
import ChatWindow from "../chat/ChatWindow";

const ChatLayout = ({ selectedChat, setSelectedChat }) => {
  return (
    <div className="h-full bg-chat-bg-light dark:bg-chat-bg-dark">
      {selectedChat ? (
        <div className="flex flex-col h-full">
          {/* Mobile Back Header */}
          <div className="md:hidden flex items-center p-3 bg-white dark:bg-slate-900 border-b dark:border-slate-800">
            <button 
              onClick={() => setSelectedChat(null)} // This triggers the switch back to Sidebar
              className="p-2 mr-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-brand-primary"
            >
              <FiChevronLeft size={28} />
            </button>
            <div className="flex items-center gap-3">
               <img src={selectedChat.avatar} className="w-9 h-9 rounded-full" alt="" />
               <span className="font-bold dark:text-white">{selectedChat.name}</span>
            </div>
          </div>

          <ChatWindow selectedChat={selectedChat} />
        </div>
      ) : (
        /* Empty State for Desktop */
        <div className="hidden md:flex h-full flex-col items-center justify-center p-8 text-center">
          <div className="relative mb-6">
            <div className="relative w-24 h-24 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-3xl flex items-center justify-center shadow-2xl">
              <FiMessageSquare size={48} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold dark:text-white mb-3">Select a chat to help</h2>
          <p className="text-slate-500 max-w-sm">Pick a person from the left to start a unique conversation.</p>
        </div>
      )}
    </div>
  );
};

export default ChatLayout;