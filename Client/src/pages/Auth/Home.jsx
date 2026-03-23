import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import ChatLayout from "../../components/layout/ChatLayout";

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-screen bg-chat-bg-light dark:bg-chat-bg-dark overflow-hidden">
      {/* Sidebar: Visible on desktop OR on mobile when NO chat is selected */}
      <aside
        className={`h-full border-r border-slate-200 dark:border-slate-800
        ${selectedChat ? "hidden md:flex" : "flex w-full"} 
        md:w-1/3 lg:w-1/4 flex-col`}
      >
        <Sidebar setSelectedChat={setSelectedChat} />
      </aside>

      {/* Main Chat Area: Visible on desktop OR on mobile when a chat IS selected */}
      <main className={`flex-1 flex-col min-w-0 ${!selectedChat ? "hidden md:flex" : "flex"}`}>
        <ChatLayout
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat} // Passed to handle the back button
        />
      </main>
    </div>
  );
};

export default Home;