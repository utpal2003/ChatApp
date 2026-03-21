import { useState } from "react";

const MessageInput = () => {
  const [text, setText] = useState("");

  const sendMessage = () => {
    console.log(text);
    setText("");
  };

  return (
    <div className="p-3 border-t flex">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded p-2"
        placeholder="Type a message..."
      />
      <button
        onClick={sendMessage}
        className="ml-2 bg-blue-500 text-white px-4 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;