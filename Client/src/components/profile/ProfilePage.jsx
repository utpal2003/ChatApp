import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../app/slices/userProfileSlice";

import {
  FiCamera,
  FiTrash2,
  FiX,
  FiUpload,
  FiArrowLeft,
  FiUser,
  FiInfo,
  FiMail,
  FiCheck,
  FiShield,
  FiActivity,
  FiSave,
  FiEdit2
} from "react-icons/fi";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userProfile);

  const [showImageModal, setShowImageModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.fullName || "");
      setStatus(currentUser.status || "");
      setBio(currentUser.bio || "");
      setPhone(currentUser.phone || "");
      setProfileImg(currentUser.profilePic || "");
    }
  }, [currentUser]);

  const handleSave = async () => {
    if (!currentUser) return;
    
    setIsSaving(true);
    await dispatch(
      updateUser({
        id: currentUser._id,
        data: {
          fullName: name,
          status,
          bio,
          phone,
          profilePic: profileImg,
        },
      })
    );
    
    setIsSaving(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleRemove = () => {
    setProfileImg(`https://ui-avatars.com/api/?name=${name}&background=4F46E5&color=fff&bold=true`);
    setShowImageModal(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-200 dark:border-emerald-800 rounded-lg px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <FiCheck className="text-emerald-600 dark:text-emerald-400" size={18} />
              <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">Profile updated successfully</span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate("/")}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                <FiArrowLeft size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Profile Settings</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Manage your personal information</p>
              </div>
            </div>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <FiSave size={16} />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-950/20">
                <div className="flex flex-col items-center">
                  <div className="relative group mb-4">
                    <div className="w-32 h-32 rounded-full ring-4 ring-white dark:ring-gray-800 shadow-lg overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                      <img
                        src={profileImg || `https://ui-avatars.com/api/?name=${name || 'User'}&background=4F46E5&color=fff&bold=true&size=128`}
                        className="w-full h-full object-cover"
                        alt="profile"
                      />
                    </div>
                    <button 
                      onClick={() => setShowImageModal(true)}
                      className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
                    >
                      <FiCamera size={16} className="text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name || 'Your Name'}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{status || 'No status set'}</p>
                  
                  <div className="w-full mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Member since</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <FiMail size={16} className="text-indigo-500" />
                  <span>{currentUser?.email || 'No email'}</span>
                </div>
                {phone && (
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <FiUser size={16} className="text-indigo-500" />
                    <span>{phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Edit Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Section */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <h3 className="font-semibold text-gray-900 dark:text-white">Personal Information</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Update your personal details</p>
              </div>
              
              <div className="p-6 space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <input
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                    placeholder="e.g., Available, Busy, etc."
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bio
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell us a little about yourself..."
                  />
                </div>

                {/* Email (Read Only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    value={currentUser?.email || ""}
                    disabled
                    className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Email cannot be changed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update Profile Picture</h3>
              <button 
                onClick={() => setShowImageModal(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <FiX size={20} className="text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full ring-4 ring-indigo-100 dark:ring-indigo-900/50 shadow-lg overflow-hidden">
                  <img 
                    src={profileImg || `https://ui-avatars.com/api/?name=${name || 'User'}&background=4F46E5&color=fff`} 
                    className="w-full h-full object-cover"
                    alt="profile preview" 
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block">
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label 
                      htmlFor="image-upload"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      <FiUpload size={16} />
                      <span>Upload New Image</span>
                    </label>
                  </div>
                </label>
                
                <button 
                  onClick={handleRemove}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors duration-200"
                >
                  <FiTrash2 size={16} />
                  <span>Remove Current Photo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;