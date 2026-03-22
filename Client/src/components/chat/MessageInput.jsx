import { useState } from "react";

const MessageInput = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-3 border-t border-gray-200 dark:border-slate-700 flex gap-2">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 rounded-chat border border-gray-300 dark:border-slate-600 
        bg-transparent text-chat-text-main-light dark:text-chat-text-main-dark
        focus:outline-none focus:ring-2 focus:ring-brand-primary"
      />

      <button className="bg-brand-primary text-white px-4 rounded-chat">
        Send
      </button>
    </div>
  );
};

export default MessageInput;