import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/layout/Sidebar";
import ChatLayout from "../../components/layout/ChatLayout";
import { fetchSingleChat, setSelectedChat } from "../../app/slices/chatSlice";

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Local state to manage mobile view toggle
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleChat(id)).then((res) => {
        if (res.payload) {
          setActiveChat(res.payload);
          dispatch(setSelectedChat(res.payload));
        } else {
          // If chat ID is invalid, go back to base
          navigate("/");
        }
      });
    } else {
      setActiveChat(null);
      dispatch(setSelectedChat(null));
    }
  }, [id, dispatch, navigate]);

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#070b14] overflow-hidden">
      {/* SIDEBAR - Hidden on mobile if a chat is active */}
      <aside className={`h-full border-r border-slate-200 dark:border-slate-800 
        ${activeChat ? "hidden md:flex" : "flex w-full"} 
        md:w-[350px] lg:w-[400px] flex-col transition-all duration-300`}
      >
        <Sidebar selectedChatId={id} />
      </aside>

      {/* CHAT AREA - Hidden on mobile if no chat is active */}
      <main className={`flex-1 transition-all duration-300 ${!activeChat ? "hidden md:flex" : "flex"}`}>
        <ChatLayout selectedChat={activeChat} />
      </main>
    </div>
  );
};

export default Home;