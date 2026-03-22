import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical, FiX, FiUser, FiEdit3, FiLogOut } from "react-icons/fi";
import SearchBar from "../sidebar/SearchBar";
import ChatList from "../sidebar/ChatList";

const Sidebar = ({ setOpenSidebar, setSelectedChat }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-full bg-white dark:bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <div
          onClick={() => navigate("/profile")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=12"
              className="w-10 h-10 rounded-full ring-2 ring-transparent group-hover:ring-brand-primary transition-all"
              alt="Profile"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-brand-online border-2 border-white dark:border-slate-900 rounded-full"></span>
          </div>
          <h3 className="font-semibold text-chat-text-main-light dark:text-chat-text-main-dark group-hover:text-brand-primary transition-colors">
            My Chats
          </h3>
        </div>

        <div className="flex items-center gap-1">
          <div className="relative">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-chat-text-muted-light dark:text-chat-text-muted-dark"
            >
              <FiMoreVertical size={20} />
            </button>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden animate-in fade-in zoom-in duration-150">
                <MenuBtn icon={<FiUser />} label="View Profile" onClick={() => navigate("/profile")} />
                <MenuBtn icon={<FiEdit3 />} label="Edit Profile" onClick={() => navigate("/edit-profile")} />
                <div className="border-t border-slate-100 dark:border-slate-700 my-1" />
                <MenuBtn icon={<FiLogOut />} label="Logout" onClick={() => alert("Logout")} variant="danger" />
              </div>
            )}
          </div>
          
          <button onClick={() => setOpenSidebar(false)} className="md:hidden p-2 text-slate-500">
            <FiX size={22} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <SearchBar />
      </div>

      <div className="flex-1 overflow-y-auto px-2 custom-scrollbar">
        <ChatList setSelectedChat={setSelectedChat} />
      </div>
    </div>
  );
};

// Sub-component for clean menu items
const MenuBtn = ({ icon, label, onClick, variant }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 
    ${variant === 'danger' ? 'text-red-500' : 'text-slate-600 dark:text-slate-300'}`}
  >
    {icon} {label}
  </button>
);

export default Sidebar;