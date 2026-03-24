import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiCamera, FiTrash2, FiX, FiUpload,
    FiArrowLeft, FiUser, FiInfo, FiMail, FiCheck, FiShield, FiActivity
} from "react-icons/fi";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [showImageModal, setShowImageModal] = useState(false);
    const [profileImg, setProfileImg] = useState("https://i.pravatar.cc/150?img=12");

    // Separated State
    const [name, setName] = useState("Alex Thompson");
    const [status, setStatus] = useState("Focusing");
    const [bio, setBio] = useState("Senior Digital Designer specializing in high-fidelity interface design and design systems for enterprise-grade applications.");

    const handleRemove = () => {
        setProfileImg(`https://ui-avatars.com/api/?name=${name}&background=6366F1&color=fff`);
        setShowImageModal(false);
    };

    return (
        <div className="h-screen w-screen bg-[#FDFDFD] dark:bg-[#0B0F1A] flex flex-col overflow-hidden font-sans antialiased text-slate-900 dark:text-slate-100">

            {/* --- TOP NAVIGATION BAR --- */}
            <header className="w-full bg-white dark:bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0 z-30">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate("/")}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500"
                    >
                        <FiArrowLeft size={20} />
                    </button>
                    <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />
                    <div>
                        <h1 className="text-lg font-semibold tracking-tight">Account Settings</h1>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate("/")}
                        className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm flex items-center gap-2"
                    >
                        <FiCheck size={16} /> Save changes
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto flex flex-col lg:flex-row">

                {/* --- SIDEBAR: PHOTO & IDENTITY --- */}
                <aside className="w-full lg:w-[380px] p-8 lg:p-12 border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="flex flex-col items-center">
                        <div className="relative group">
                            <div className="w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-950 shadow-xl relative">
                                <img src={profileImg} className="w-full h-full object-cover" alt="Profile" />
                                <button
                                    onClick={() => setShowImageModal(true)}
                                    className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm"
                                >
                                    <FiCamera className="text-white" size={28} />
                                </button>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700">
                                <FiShield className="text-indigo-500" size={18} />
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <h2 className="text-xl font-bold">{name}</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Professional Account</p>
                            <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-[11px] font-semibold text-green-700 dark:text-green-400 uppercase tracking-wider">Verified Identity</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* --- MAIN CONTENT: CORE FIELDS --- */}
                <section className="flex-1 p-8 lg:p-16 max-w-4xl">
                    <div className="space-y-12">

                        {/* Section Header */}
                        <div>
                            <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">Public Information</h3>
                            <p className="text-slate-500 text-sm">This information will be visible to other users within your organization.</p>
                        </div>

                        <div className="grid gap-8">
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <FiUser className="text-slate-400" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-transparent py-2 text-lg font-medium border-b border-slate-200 dark:border-slate-800 focus:border-indigo-500 outline-none transition-colors"
                                    placeholder="Enter full name"
                                />
                            </div>

                            {/* Status Section */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <FiActivity className="text-slate-400" /> Current Status
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                                        placeholder="What are you up to?"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">STATUS</span>
                                </div>
                            </div>

                            {/* Bio Section */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <FiInfo className="text-slate-400" /> Professional Bio
                                </label>
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    rows="4"
                                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm leading-relaxed focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none"
                                    placeholder="Describe your role and expertise..."
                                />
                            </div>
                        </div>

                        {/* Private Section */}
                        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Private Credentials</h3>
                            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                                        <FiMail className="text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Email Address</p>
                                        <p className="text-sm font-medium">alex.design@enterprise.com</p>
                                    </div>
                                </div>
                                <button className="text-xs font-bold text-indigo-600 hover:underline">Change</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- REFINED IMAGE MODAL --- */}
            {showImageModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setShowImageModal(false)} />
                    <div className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h3 className="font-bold">Update Profile Photo</h3>
                            <button onClick={() => setShowImageModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <FiX size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="aspect-square w-full max-w-[280px] mx-auto bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden mb-8">
                                <img src={profileImg} className="w-full h-full object-cover" alt="Preview" />
                            </div>
                            <div className="flex gap-3">
                                <label className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2.5 rounded-lg font-semibold text-sm cursor-pointer hover:bg-indigo-700 transition-all">
                                    <FiUpload size={16} /> Upload Image
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) setProfileImg(URL.createObjectURL(file));
                                    }} />
                                </label>
                                <button
                                    onClick={handleRemove}
                                    className="px-4 py-2.5 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg font-semibold text-sm hover:bg-red-100 transition-all"
                                >
                                    <FiTrash2 size={18} />
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