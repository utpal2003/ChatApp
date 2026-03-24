import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiChevronLeft, FiMoreHorizontal, FiPhone, FiVideo } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { markAsSeen } from "../../app/slices/messageSlice";
import ChatWindow from "../chat/ChatWindow";

const ChatLayout = ({ selectedChat }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ GET ONLINE USERS FROM REDUX
  const { onlineUsers } = useSelector((state) => state.user);

  // ✅ CHECK IF THIS USER IS ONLINE
  const isOnline = onlineUsers?.includes(selectedChat?._id);

  useEffect(() => {
    if (selectedChat?._id) {
      dispatch(markAsSeen(selectedChat._id));
    }
  }, [selectedChat, dispatch]);

  if (!selectedChat) {
    return (
      <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-white dark:bg-[#070b14]">
        <div className="p-8 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center animate-pulse">
          <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiMail size={40} className="text-indigo-500" />
          </div>
          <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
            Your Workspace
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Select a conversation to start messaging
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-slate-950">

      {/* HEADER */}
      <header className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-10">

        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/")} className="md:hidden p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <FiChevronLeft size={24} />
          </button>

          <div className="relative">
            <img
              src={`https://i.pravatar.cc/150?u=${selectedChat._id}`}
              className="w-11 h-11 rounded-2xl object-cover shadow-lg"
              alt="user"
            />

            {/* ✅ ONLINE DOT (DYNAMIC) */}
            {isOnline && (
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-4 border-white dark:border-slate-950 rounded-full" />
            )}
          </div>

          <div>
            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
              {selectedChat.name}
            </h3>

            {/* ✅ STATUS TEXT */}
            <p className={`text-[10px] font-bold uppercase tracking-widest ${isOnline ? "text-green-500" : "text-slate-400"
              }`}>
              {isOnline ? "Active Now" : "Offline"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-3 text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-xl transition-all">
            <FiPhone size={20} />
          </button>
          <button className="p-3 text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-xl transition-all">
            <FiVideo size={20} />
          </button>
          <button className="p-3 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
            <FiMoreHorizontal size={20} />
          </button>
        </div>
      </header>

      {/* CHAT */}
      <div className="flex-1 overflow-hidden">
        <ChatWindow selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default ChatLayout;