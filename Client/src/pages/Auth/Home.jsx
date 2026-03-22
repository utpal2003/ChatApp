import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import ChatLayout from "../../components/layout/ChatLayout";

const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-screen bg-chat-bg-light dark:bg-chat-bg-dark overflow-hidden">
      {/* Sidebar Container */}
      <aside
        className={`fixed md:static z-40 h-full w-[280px] sm:w-[320px] md:w-1/3 lg:w-1/4
        transform transition-all duration-300 ease-in-out border-r border-slate-200 dark:border-slate-800
        ${openSidebar ? "translate-x-0 shadow-2xl" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <Sidebar
          setOpenSidebar={setOpenSidebar}
          setSelectedChat={(chat) => {
            setSelectedChat(chat);
            setOpenSidebar(false); // Auto-close on mobile after selection
          }}
        />
      </aside>

      {/* Mobile Overlay */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-30 md:hidden transition-opacity"
        />
      )}

      {/* Main Chat Area */}
      <main className="flex-1 relative flex flex-col min-w-0">
        <ChatLayout
          setOpenSidebar={setOpenSidebar}
          selectedChat={selectedChat}
        />
      </main>
    </div>
  );
};

export default Home;