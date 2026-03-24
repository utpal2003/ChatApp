import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageInput from "./MessageInput";
import { fetchMessages, addMessage } from "../../app/slices/messageSlice";
import socket from "../../socket/socket"; // ✅ FIXED PATH

const ChatWindow = ({ selectedChat }) => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);

  const { messages } = useSelector((state) => state.message);
  const { user } = useSelector((state) => state.auth);

  // ✅ CONNECT USER TO SOCKET
  useEffect(() => {
    if (user?._id) {
      socket.emit("setup", user._id);
    }
  }, [user]);

  // ✅ AUTO SCROLL
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ FETCH MESSAGES + JOIN ROOM
  useEffect(() => {
    if (selectedChat?._id) {
      dispatch(fetchMessages(selectedChat._id));

      // join chat room
      socket.emit("joinChat", selectedChat._id);
    }
  }, [selectedChat, dispatch]);

  // ✅ SOCKET LISTENER (SAFE)
  useEffect(() => {
    if (!selectedChat) return;

    const handleReceive = (msg) => {
      if (msg.chatId === selectedChat._id) {
        dispatch(addMessage(msg));
      }
    };

    socket.on("receiveMessage", handleReceive);

    return () => {
      socket.off("receiveMessage", handleReceive);
    };
  }, [selectedChat, dispatch]);

  if (!selectedChat) return null;

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] dark:bg-[#070b14]">
      
      {/* MESSAGES */}
      <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-4">
        {messages.map((msg, index) => {
          const isMe = msg.senderId === user?._id;

          return (
            <div
              key={msg._id || index}
              className={`flex ${isMe ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm font-medium shadow-sm
                ${
                  isMe
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-100 dark:border-slate-700"
                }`}
              >
                <p className="leading-relaxed">{msg.content}</p>

                <p
                  className={`text-[9px] mt-1 font-bold uppercase tracking-tighter opacity-60 ${
                    isMe ? "text-right" : "text-left"
                  }`}
                >
                  {msg.createdAt
                    ? new Date(msg.createdAt).toLocaleTimeString()
                    : "Now"}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={scrollRef} />
      </div>

      {/* INPUT */}
      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <MessageInput selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default ChatWindow;