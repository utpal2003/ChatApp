import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical, FiUser, FiEdit3, FiLogOut } from "react-icons/fi";
import SearchBar from "../sidebar/SearchBar";
import ChatList from "../sidebar/ChatList";

const Sidebar = ({ setSelectedChat }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-full bg-white dark:bg-slate-900 flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <div onClick={() => navigate("/profile")} className="flex items-center gap-3 cursor-pointer group">
          <img src="https://i.pravatar.cc/150?img=12" className="w-10 h-10 rounded-full" alt="Profile" />
          <h3 className="font-semibold dark:text-white">My Chats</h3>
        </div>

        <div className="relative">
          <button onClick={() => setOpenMenu(!openMenu)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
            <FiMoreVertical size={20} />
          </button>
          {openMenu && (
             <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-2xl z-50 border dark:border-slate-700">
                <MenuBtn icon={<FiUser />} label="Profile" onClick={() => navigate("/profile")} />
                <MenuBtn icon={<FiLogOut />} label="Logout" onClick={() => {}} variant="danger" />
             </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <SearchBar />
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        {/* Pass the chat object. Ensure your ChatList uses chat.id for uniqueness */}
        <ChatList setSelectedChat={setSelectedChat} />
      </div>
    </div>
  );
};

const MenuBtn = ({ icon, label, onClick, variant }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3 text-sm ${variant === 'danger' ? 'text-red-500' : 'dark:text-slate-300'}`}>
    {icon} {label}
  </button>
);

export default Sidebar;