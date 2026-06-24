import { useSelector } from "react-redux";

const ChatList = ({
  activeTab,
  onSelectChat,
  selectedChatId,
}) => {

  const { chats } = useSelector(
    (state) => state.chat
  );

  const {
    users,
    onlineUsers,
    loading,
  } = useSelector(
    (state) => state.user
  );

  const { user: currentUser } =
    useSelector(
      (state) => state.auth
    );

  // ==========================
  // FRIENDS TAB
  // ==========================
  if (activeTab === "friends") {

    return (
      <div className="space-y-1 py-2">

        {chats.map((chat) => {

          const isActive =
            String(selectedChatId) ===
            String(chat._id);

          const otherUserId =
            chat.users.find(
              (id) =>
                id !== currentUser?._id
            );

          const otherUser =
            users.find(
              (u) =>
                u._id === otherUserId
            );

          const isOnline =
            onlineUsers.includes(
              otherUserId
            );

          return (
            <div
              key={chat._id}
              onClick={() =>
                onSelectChat(chat)
              }
              className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition
              ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <div className="relative">

                <img
                  src={
                    otherUser?.profilePic ||
                    "https://i.pravatar.cc/150"
                  }
                  alt={otherUser?.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />

                {isOnline && (
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}

              </div>

              <div className="flex-1 min-w-0">

                <h4 className="font-semibold truncate">
                  {otherUser?.name ||
                    "Unknown User"}
                </h4>

                <p className="text-xs truncate opacity-70">
                  {chat?.lastMessage?.text ||
                    "No messages yet"}
                </p>

              </div>

            </div>
          );
        })}

      </div>
    );
  }

  // ==========================
  // WORLD TAB
  // ==========================

  if (loading) {
    return (
      <div className="p-4 text-center">
        Loading users...
      </div>
    );
  }

  return (
    <div className="space-y-1 py-2">

      {users
        ?.filter(
          (user) =>
            user._id !== currentUser?._id
        )
        .map((user) => {

          const isOnline =
            onlineUsers.includes(
              user._id
            );

          return (
            <div
              key={user._id}
              className="flex items-center gap-4 p-3 rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              onClick={() => {
                console.log(
                  "Start chat with:",
                  user
                );
              }}
            >

              <div className="relative">

                <img
                  src={
                    user.profilePic ||
                    "https://i.pravatar.cc/150"
                  }
                  alt={user.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />

                {isOnline && (
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}

              </div>

              <div>

                <h4 className="font-semibold">
                  {user.name}
                </h4>

                <p className="text-xs text-slate-500">
                  @{user.username}
                </p>

              </div>

            </div>
          );
        })}

    </div>
  );
};

export default ChatList;