import { useState } from "react";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-chat-bg-light dark:bg-chat-bg-dark">

      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg w-80">

        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <button className="w-full bg-brand-primary text-white py-2 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;