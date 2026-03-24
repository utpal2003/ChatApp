import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../app/slices/messageSlice";
import socket from "../../socket/socket"; // ✅ FIXED PATH

const MessageInput = ({ selectedChat }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleSend = () => {
    if (!text.trim() || !selectedChat?._id) return;

    const messageData = {
      chatId: selectedChat._id,
      content: text,
      senderId: user?._id, // ✅ IMPORTANT
    };

    // ✅ SAVE TO DATABASE
    dispatch(sendMessage(messageData));

    // ✅ REAL-TIME SEND
    socket.emit("sendMessage", messageData);

    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border p-2 rounded"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="bg-indigo-600 text-white px-4 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;