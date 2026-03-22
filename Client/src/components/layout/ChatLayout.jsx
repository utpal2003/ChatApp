import { FiMessageSquare, FiMenu } from "react-icons/fi";
import ChatWindow from "../chat/ChatWindow";

const ChatLayout = ({ setOpenSidebar, selectedChat }) => {
  return (
    <div className="h-full bg-chat-bg-light dark:bg-chat-bg-dark transition-colors duration-300">
      {selectedChat ? (
        /* 1. Active Chat State */
        <ChatWindow 
          setOpenSidebar={setOpenSidebar} 
          selectedChat={selectedChat} 
        />
      ) : (
        /* 2. Empty State (Visible when no chat is selected) */
        <div className="h-full flex flex-col">
          
          {/* Mobile Header: Visible only on small screens when sidebar is closed */}
          <div className="md:hidden flex items-center p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <button 
              onClick={() => setOpenSidebar(true)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-brand-primary transition-colors"
            >
              <FiMenu size={24} />
            </button>
            <h1 className="ml-3 font-bold text-xl bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Messages
            </h1>
          </div>

          {/* Center Illustration & Text */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            {/* Animated Icon Container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-brand-primary blur-3xl opacity-10 rounded-full animate-pulse"></div>
              <div className="relative w-24 h-24 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-3xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <FiMessageSquare size={48} className="text-white" />
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-chat-text-main-light dark:text-chat-text-main-dark mb-3">
              Your Inbox Awaits
            </h2>
            
            <p className="text-chat-text-muted-light dark:text-chat-text-muted-dark max-w-sm leading-relaxed mb-8">
              Select a conversation from the sidebar to start messaging. Your encrypted chats are ready when you are.
            </p>

            {/* Mobile Call-to-Action */}
            <button 
              onClick={() => setOpenSidebar(true)}
              className="md:hidden px-8 py-3 bg-brand-primary hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-brand-primary/25 active:scale-95 transition-all"
            >
              View All Chats
            </button>

            {/* Subtle Desktop Tip */}
            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-600 uppercase tracking-widest mt-4">
              <span className="w-8 h-[1px] bg-slate-200 dark:bg-slate-800"></span>
              Select a friend to begin
              <span className="w-8 h-[1px] bg-slate-200 dark:bg-slate-800"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatLayout;