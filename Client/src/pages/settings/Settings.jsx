import React, { useState } from 'react';
import {
    FiMail, FiPlus, FiTrash2, FiAlertTriangle,
    FiShield, FiClock, FiChevronRight
} from 'react-icons/fi';
import ConfirmModal from '../../components/common/ConfirmModal'; // Ensure path is correct

const Settings = () => {
    const [showDeactivate, setShowDeactivate] = useState(false);
    const [deactivateDuration, setDeactivateDuration] = useState('1 month');
    const [alternativeEmails, setAlternativeEmails] = useState(['alex.work@company.com']);

    // Modal State
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        title: "",
        message: "",
        confirmText: "",
        type: "danger",
        onConfirm: () => { }
    });

    const timeOptions = ['1 week', '1 month', '3 months', '6 months', '1 year'];

    // Action Handlers
    const triggerDeleteEmail = (email) => {
        setModalConfig({
            isOpen: true,
            title: "Remove Email?",
            message: `Are you sure you want to remove ${email}? You will no longer receive notifications here.`,
            confirmText: "Remove Email",
            type: "danger",
            onConfirm: () => setAlternativeEmails(alternativeEmails.filter(e => e !== email))
        });
    };

    const triggerDeactivate = () => {
        setModalConfig({
            isOpen: true,
            title: "Confirm Deactivation",
            message: `Your account will be hidden for ${deactivateDuration}. You can log back in anytime to reactivate.`,
            confirmText: "Deactivate Now",
            type: "indigo", // Professional blue for temporary actions
            onConfirm: () => console.log("Account Deactivated")
        });
    };

    const triggerPermanentDelete = () => {
        setModalConfig({
            isOpen: true,
            title: "Delete Account Permanently?",
            message: "This is irreversible. All your projects, files, and personal data will be wiped from our servers forever.",
            confirmText: "Delete Everything",
            type: "danger",
            onConfirm: () => console.log("Account Deleted")
        });
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] dark:bg-[#0B0F1A] text-slate-900 dark:text-slate-100 font-sans p-6 lg:p-12">
            <div className="max-w-4xl mx-auto">

                <div className="mb-10">
                    <h1 className="text-3xl font-bold tracking-tight">Settings & Privacy</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Manage your account credentials and security preferences.</p>
                </div>

                <div className="grid gap-8">
                    {/* --- EMAIL SECTION --- */}
                    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                            <FiMail className="text-indigo-500" size={20} />
                            <h2 className="font-bold">Email Communication</h2>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Primary Email</p>
                                    <p className="text-lg font-medium mt-1">alex.thompson@design.com</p>
                                </div>
                                <button className="px-4 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg hover:bg-indigo-100 transition-all">
                                    Change Primary
                                </button>
                            </div>

                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Alternative Emails</p>
                                <div className="space-y-3">
                                    {alternativeEmails.map((email, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                            <span className="text-sm font-medium">{email}</span>
                                            <button
                                                onClick={() => triggerDeleteEmail(email)}
                                                className="text-slate-400 hover:text-red-500 transition-colors"
                                            >
                                                <FiTrash2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                    <button className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-4 hover:opacity-80 transition-opacity">
                                        <FiPlus size={18} /> Add Alternative Email
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- DANGER ZONE --- */}
                    <section className="bg-red-50/30 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-red-100 dark:border-red-900/20 flex items-center gap-3">
                            <FiAlertTriangle className="text-red-500" size={20} />
                            <h2 className="font-bold text-red-700 dark:text-red-400">Account Management</h2>
                        </div>

                        <div className="p-6 space-y-8">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="font-bold text-slate-800 dark:text-slate-200">Deactivate Account</p>
                                        <p className="text-sm text-slate-500">Temporarily hide your profile and data.</p>
                                    </div>
                                    <button
                                        onClick={() => setShowDeactivate(!showDeactivate)}
                                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${showDeactivate ? 'bg-slate-800 text-white' : 'bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-700'}`}
                                    >
                                        {showDeactivate ? 'Cancel' : 'Deactivate'}
                                    </button>
                                </div>

                                {showDeactivate && (
                                    <div className="mt-6 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 animate-in slide-in-from-top-4 duration-300">
                                        <p className="text-sm font-bold text-indigo-600 mb-4 flex items-center gap-2">
                                            <FiClock /> Select Deactivation Period
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {timeOptions.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => setDeactivateDuration(time)}
                                                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${deactivateDuration === time ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-500'}`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            onClick={triggerDeactivate}
                                            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
                                        >
                                            Confirm Deactivation for {deactivateDuration}
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="pt-6 border-t border-red-100 dark:border-red-900/20 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-red-600">Delete Account</p>
                                    <p className="text-sm text-slate-500">Permanently remove all data. This cannot be undone.</p>
                                </div>
                                <button
                                    onClick={triggerPermanentDelete}
                                    className="px-6 py-2 bg-transparent hover:bg-red-500 hover:text-white text-red-500 border border-red-200 dark:border-red-900/50 rounded-lg font-bold text-sm transition-all"
                                >
                                    Delete Permanently
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* --- GLOBAL CONFIRM MODAL --- */}
            <ConfirmModal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.title}
                message={modalConfig.message}
                confirmText={modalConfig.confirmText}
                type={modalConfig.type}
                onConfirm={modalConfig.onConfirm}
            />
        </div>
    );
};

export default Settings;