import React from "react";
import { useSelector } from "react-redux";
import { CURRENT_USER_ID } from "../../app/slices/userSlice";

const ChatList = ({ onSelectChat, selectedChatId }) => {
  const { chats } = useSelector((state) => state.chat);
  const { users, onlineUsers } = useSelector((state) => state.user);

  return (
    <div className="space-y-1 py-2">
      {chats.map((chat) => {
        const isActive = String(selectedChatId) === String(chat._id);
        const hasUnread = chat.unreadCount > 0;

        // ✅ FIND OTHER USER (NOT ME)
        const otherUserId = chat.users.find(
          (id) => id !== CURRENT_USER_ID
        );

        const otherUser = users.find(
          (user) => user._id === otherUserId
        );

        const isOnline = onlineUsers.includes(otherUserId);

        return (
          <div
            key={chat._id}
            onClick={() => onSelectChat(chat)}
            className={`group flex items-center gap-4 p-3.5 cursor-pointer transition-all duration-200 rounded-2xl mb-1
              ${
                isActive
                  ? "bg-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-none"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <img
                src={otherUser?.profilePic}
                className="w-12 h-12 rounded-xl object-cover border border-slate-100 dark:border-slate-700"
                alt={otherUser?.name}
              />

              {isOnline && !isActive && (
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h4
                  className={`text-[14px] truncate uppercase tracking-tight font-black italic
                  ${
                    isActive
                      ? "text-white"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {otherUser?.name || "Unknown"}
                </h4>

                <span
                  className={`text-[10px] font-bold uppercase tracking-widest
                  ${
                    isActive
                      ? "text-indigo-100"
                      : hasUnread
                      ? "text-indigo-600"
                      : "text-slate-400"
                  }`}
                >
                  {new Date(chat.updatedAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <p
                  className={`text-[12px] truncate pr-2 font-medium
                  ${
                    isActive
                      ? "text-indigo-100 opacity-80"
                      : hasUnread
                      ? "text-slate-900 dark:text-slate-100 font-black"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {chat.lastMessage?.text}
                </p>

                {hasUnread && !isActive && (
                  <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-indigo-600 text-white text-[9px] font-black rounded-lg">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;