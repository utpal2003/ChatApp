import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/layout/Sidebar";
import ChatLayout from "../../components/layout/ChatLayout";
import { setSelectedChat } from "../../app/slices/chatSlice";

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeChat, setActiveChat] = useState(null);

  const { chats } = useSelector((state) => state.chat);

  useEffect(() => {
    if (id) {
      const chat = chats.find((c) => c._id === id);

      if (chat) {
        setActiveChat(chat);
        dispatch(setSelectedChat(chat));
      } else {
        navigate("/");
      }
    } else {
      setActiveChat(null);
      dispatch(setSelectedChat(null));
    }
  }, [id, chats, dispatch, navigate]);

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#070b14] overflow-hidden">

      {/* SIDEBAR */}
      <aside className={`h-full border-r border-slate-200 dark:border-slate-800 
        ${activeChat ? "hidden md:flex" : "flex w-full"} 
        md:w-[350px] lg:w-[400px] flex-col transition-all duration-300`}
      >
        <Sidebar selectedChatId={id} />
      </aside>

      {/* CHAT AREA */}
      <main className={`flex-1 transition-all duration-300 ${!activeChat ? "hidden md:flex" : "flex"}`}>
        <ChatLayout selectedChat={activeChat} />
      </main>
    </div>
  );
};

export default Home;