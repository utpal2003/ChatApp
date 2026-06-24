import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  FiMoreVertical,
  FiUser,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";

import SearchBar from "../sidebar/SearchBar";
import ChatList from "../sidebar/ChatList";

import { fetchWorldUsers } from "../../app/slices/userSlice";

const Sidebar = ({ selectedChatId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("friends");

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchWorldUsers());
  }, [dispatch]);

  const handleSelectChat = (chat) => {
    navigate(`/chat/${chat._id}`);
  };

  return (
    <div className="h-full bg-white dark:bg-slate-900 flex flex-col">

      {/* HEADER */}
      <div className="p-6 flex items-center justify-between shrink-0">

        <h1 className="text-2xl font-black uppercase italic text-slate-900 dark:text-white">
          Messages
        </h1>

        <div className="relative">

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <FiMoreVertical size={22} />
          </button>

          {openMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setOpenMenu(false)}
              />

              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">

                <button
                  onClick={() => {
                    setOpenMenu(false);
                    navigate("/profile");
                  }}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                >
                  <FiUser />
                  <span>Profile</span>
                </button>

                <button
                  onClick={() => {
                    setOpenMenu(false);
                    navigate("/settings");
                  }}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                >
                  <FiSettings />
                  <span>Settings</span>
                </button>

                <div className="border-t border-slate-200 dark:border-slate-700" />

                <button
                  className="w-full px-4 py-3 flex items-center gap-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>

              </div>
            </>
          )}
        </div>
      </div>

      {/* SEARCH */}
      <div className="px-6">
        <SearchBar />
      </div>

      {/* TABS */}
      <div className="px-6 mt-4 mb-3">

        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1">

          <button
            onClick={() => setActiveTab("friends")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all
            ${
              activeTab === "friends"
                ? "bg-white dark:bg-slate-700 shadow text-indigo-600"
                : "text-slate-500"
            }`}
          >
            Friends
          </button>

          <button
            onClick={() => setActiveTab("world")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all
            ${
              activeTab === "world"
                ? "bg-white dark:bg-slate-700 shadow text-indigo-600"
                : "text-slate-500"
            }`}
          >
            World
          </button>

        </div>

      </div>

      {/* CHAT / WORLD USERS */}
      <div className="flex-1 overflow-y-auto px-3 custom-scrollbar">

        <ChatList
          activeTab={activeTab}
          selectedChatId={selectedChatId}
          onSelectChat={handleSelectChat}
        />

      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">

        <div
          onClick={() => navigate("/profile")}
          className="flex items-center gap-3 cursor-pointer group"
        >

          <div className="relative">

            <img
              src={
                user?.profilePic ||
                "https://i.pravatar.cc/150?img=12"
              }
              alt={user?.name}
              className="w-10 h-10 rounded-xl object-cover"
            />

            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />

          </div>

          <div>

            <p className="font-semibold text-sm text-slate-900 dark:text-white">
              {user?.name}
            </p>

            <p className="text-xs text-green-500">
              Online
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;