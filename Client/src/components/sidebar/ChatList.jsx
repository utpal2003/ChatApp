import React from 'react';

const chats = [
  { _id: "1", name: "Rahul", lastMessage: "Hey bro! Are we meeting today?", online: true, time: "10:30 AM", unread: 2 },
  { _id: "2", name: "Anita", lastMessage: "The project looks amazing!", online: false, time: "Yesterday", unread: 0 },
  { _id: "3", name: "John Wick", lastMessage: "I'll be back in 5 mins.", online: true, time: "9:15 AM", unread: 1 },
  { _id: "4", name: "Sara Smith", lastMessage: "Check your email please.", online: false, time: "Monday", unread: 0 },
  { _id: "5", name: "Tech Group", lastMessage: "New PR merged 🚀", online: true, time: "Sun", unread: 12 },
];

const ChatList = ({ onSelectChat, selectedChatId }) => {
  return (
    <div className="space-y-1 py-2">
      {chats.map((chat) => {
        // Ensure ID comparison works (string vs number)
        const isActive = String(selectedChatId) === String(chat._id);
        const hasUnread = chat.unread > 0;

        return (
          <div
            key={chat._id}
            onClick={() => onSelectChat(chat)} // Fixed: Using onSelectChat from Sidebar
            className={`group flex items-center gap-4 p-3.5 cursor-pointer transition-all duration-200 rounded-2xl mb-1
              ${isActive
                ? "bg-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-none"
                : "hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <img
                src={`https://i.pravatar.cc/150?u=${chat._id}`}
                className="w-12 h-12 rounded-xl object-cover border border-slate-100 dark:border-slate-700"
                alt={chat.name}
              />
              {chat.online && !isActive && (
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className={`text-[14px] truncate uppercase tracking-tight font-black italic
                  ${isActive ? "text-white" : "text-slate-900 dark:text-white"}`}>
                  {chat.name}
                </h4>
                <span className={`text-[10px] font-bold uppercase tracking-widest
                  ${isActive ? "text-indigo-100" : hasUnread ? "text-indigo-600" : "text-slate-400"}`}>
                  {chat.time}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <p className={`text-[12px] truncate pr-2 font-medium
                  ${isActive
                    ? "text-indigo-100 opacity-80"
                    : hasUnread
                      ? "text-slate-900 dark:text-slate-100 font-black"
                      : "text-slate-500 dark:text-slate-400"
                  }`}>
                  {chat.lastMessage}
                </p>

                {hasUnread && !isActive && (
                  <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-indigo-600 text-white text-[9px] font-black rounded-lg">
                    {chat.unread}
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