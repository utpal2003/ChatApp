const ProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2>Profile Modal</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;