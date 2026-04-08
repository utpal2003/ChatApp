import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageInput from "./MessageInput";
import { addMessage } from "../../app/slices/messageSlice";
import socket from "../../socket/socket";

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

  // ✅ JOIN CHAT ROOM
  useEffect(() => {
    if (selectedChat?._id) {
      socket.emit("joinChat", selectedChat._id);
    }
  }, [selectedChat]);

  // ✅ SOCKET LISTENER
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

  // ✅ FILTER MESSAGES FOR CURRENT CHAT (IMPORTANT FIX)
  const chatMessages = messages.filter(
    (msg) => msg.chatId === selectedChat._id
  );

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] dark:bg-[#070b14]">
      
      {/* MESSAGES */}
      <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-4">
        {chatMessages.map((msg, index) => {
          const isMe = msg.sender === user?._id;

          return (
            <div
              key={msg._id || index}
              className={`flex ${
                isMe ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-sm
                ${
                  isMe
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none"
                }`}
              >
                {/* ✅ FIXED FIELD */}
                <p>{msg.text}</p>

                <p className="text-[10px] mt-1 opacity-60 text-right">
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
      <div className="p-4 border-t">
        <MessageInput selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default ChatWindow;