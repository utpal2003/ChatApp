import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiMoreVertical, FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import SearchBar from "../sidebar/SearchBar";
import ChatList from "../sidebar/ChatList";

const Sidebar = ({ selectedChatId }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleSelectChat = (chat) => {
    navigate(`/chat/${chat._id}`);
  };

  return (
    <div className="h-full bg-white dark:bg-slate-900 flex flex-col relative">
      {/* Header */}
      <div className="p-6 flex items-center justify-between shrink-0">
        <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight italic uppercase">
          Messages
        </h1>
        
        <div className="relative">
          <button onClick={() => setOpenMenu(!openMenu)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <FiMoreVertical size={22} />
          </button>

          {openMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setOpenMenu(false)} />
              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                <button onClick={() => navigate("/profile")} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <FiUser className="text-indigo-500" /> Profile Settings
                </button>
                <div className="border-t border-slate-100 dark:border-slate-700" />
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
                  <FiLogOut /> Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="px-6 pb-4 shrink-0"><SearchBar /></div>

      <div className="flex-1 overflow-y-auto px-3 custom-scrollbar">
        <ChatList onSelectChat={handleSelectChat} selectedChatId={selectedChatId} />
      </div>

      {/* Footer Profile Strip */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center justify-between">
          <div onClick={() => navigate("/profile")} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <img src={user?.avatar || "https://i.pravatar.cc/150?img=12"} className="w-10 h-10 rounded-xl object-cover border-2 border-white dark:border-slate-700 group-hover:border-indigo-500 transition-all" alt="me" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">{user?.name || "Alex Rivera"}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Online</p>
            </div>
          </div>
          <button onClick={() => navigate("/settings")} className="p-2 text-slate-400 hover:text-indigo-500 transition-colors">
            <FiSettings size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;