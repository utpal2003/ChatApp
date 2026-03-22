import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiCamera, FiTrash2, FiX, FiUpload,
    FiArrowLeft, FiUser, FiInfo, FiMail, FiCheck, FiEdit3, FiShield
} from "react-icons/fi";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [showImageModal, setShowImageModal] = useState(false);
    const [profileImg, setProfileImg] = useState("https://i.pravatar.cc/150?img=12");

    const [name, setName] = useState("Alex Thompson");
    const [bio, setBio] = useState("Available | Digital Designer & Tech Enthusiast");

    const handleRemove = () => {
        setProfileImg(`https://ui-avatars.com/api/?name=${name}&background=6366F1&color=fff`);
        setShowImageModal(false);
    };

    return (
        <div className="h-screen w-screen bg-[#F8FAFC] dark:bg-[#070b14] flex flex-col overflow-hidden font-sans">

            {/* --- ELITE HEADER --- */}
            <header className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-8 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0 z-20">
                <div className="flex items-center gap-5">
                    <button
                        onClick={() => navigate("/")}
                        className="group p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-brand-primary hover:text-white rounded-xl transition-all duration-300 shadow-sm"
                    >
                        <FiArrowLeft size={22} className="group-active:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Settings</h1>
                        <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-primary opacity-80">Profile Identity</p>
                    </div>
                </div>

                <button
                    onClick={() => navigate("/")}
                    className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-brand-primary hover:bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-primary/20 transition-all active:scale-95"
                >
                    <FiCheck /> Save Changes
                </button>
            </header>

            {/* --- CONTENT GRID --- */}
            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col lg:flex-row">

                {/* LEFT COLUMN: Image & Identity */}
                <div className="w-full lg:w-[400px] p-8 flex flex-col items-center bg-white dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-800">
                    <div className="relative group cursor-pointer" onClick={() => setShowImageModal(true)}>
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-brand-primary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />

                        <div className="relative w-48 h-48 rounded-[3rem] overflow-hidden ring-[12px] ring-white dark:ring-slate-800 shadow-2xl transition-all duration-500 group-hover:rounded-full">
                            <img src={profileImg} className="w-full h-full object-cover" alt="Profile" />
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[4px]">
                                <FiCamera className="text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform" size={32} />
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">Edit Photo</span>
                            </div>
                        </div>

                        {/* Premium Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-brand-primary text-white p-3 rounded-2xl shadow-xl border-4 border-white dark:border-slate-900">
                            <FiShield size={20} />
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">{name}</h2>
                        <span className="inline-block mt-2 px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full uppercase tracking-widest">Verified Account</span>
                    </div>
                </div>

                {/* RIGHT COLUMN: Interactive Fields */}
                <div className="flex-1 p-8 lg:p-16 max-w-5xl">
                    <div className="grid gap-10">

                        {/* Field: Name */}
                        <div className="group relative">
                            <span className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-primary rounded-full scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300" />
                            <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3 block">Name</label>
                            <div className="relative">
                                <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-700 transition-colors group-focus-within:text-brand-primary" size={24} />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-transparent pl-10 pr-4 py-3 text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-100 dark:border-slate-800 focus:border-brand-primary outline-none transition-all placeholder:opacity-20"
                                    placeholder="Enter your name..."
                                />
                            </div>
                        </div>

                        {/* Field: Bio */}
                        <div className="group relative">
                            <span className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-primary rounded-full scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300" />
                            <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3 block">Status & Bio</label>
                            <div className="relative">
                                <FiInfo className="absolute left-0 top-4 text-slate-300 dark:text-slate-700 transition-colors group-focus-within:text-brand-primary" size={24} />
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    rows="3"
                                    className="w-full bg-transparent pl-10 pr-4 py-3 text-lg font-medium text-slate-600 dark:text-slate-400 border-b-2 border-slate-100 dark:border-slate-800 focus:border-brand-primary outline-none transition-all resize-none"
                                    placeholder="Tell the world about yourself..."
                                />
                            </div>
                        </div>

                        {/* Email (Protected Field) */}
                        <div className="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm text-slate-400">
                                    <FiMail size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Registered Email</p>
                                    <p className="text-slate-900 dark:text-white font-bold">alex.design@email.com</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-lg">Private</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* MOBILE SAVE BAR */}
            <div className="md:hidden p-6 bg-white dark:bg-slate-900 border-t dark:border-slate-800 shrink-0">
                <button
                    onClick={() => navigate("/")}
                    className="w-full bg-brand-primary text-white py-4 rounded-2xl font-black shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-3 active:scale-95 transition-all"
                >
                    <FiCheck size={20} /> SAVE CHANGES
                </button>
            </div>

            {/* --- PROFESSIONAL MODAL (RECTANGLE) --- */}
            {showImageModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setShowImageModal(false)} />

                    <div className="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(99,102,241,0.3)] border border-white/10 animate-in zoom-in-95 duration-300">
                        <div className="p-10">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Preview</h3>
                                <button onClick={() => setShowImageModal(false)} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:rotate-90 transition-transform">
                                    <FiX size={24} />
                                </button>
                            </div>

                            <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-inner group">
                                <img src={profileImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="HD Preview" />
                            </div>

                            <div className="mt-10 flex gap-4">
                                <label className="flex-[3] flex items-center justify-center gap-3 bg-brand-primary text-white py-5 rounded-3xl font-black text-sm uppercase tracking-widest cursor-pointer hover:shadow-2xl hover:shadow-brand-primary/40 transition-all active:scale-95">
                                    <FiUpload size={20} /> Upload New
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) setProfileImg(URL.createObjectURL(file));
                                    }} />
                                </label>

                                <button
                                    onClick={handleRemove}
                                    className="flex-1 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-red-500 py-5 rounded-3xl font-black hover:bg-red-500 hover:text-white transition-all active:scale-95"
                                >
                                    <FiTrash2 size={24} />
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