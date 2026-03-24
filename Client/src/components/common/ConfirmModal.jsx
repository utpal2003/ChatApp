import React from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';

const ConfirmModal = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    title = "Are you sure?", 
    message = "This action cannot be undone.", 
    confirmText = "Confirm", 
    cancelText = "Cancel",
    type = "danger" // 'danger' (red) or 'warning' (indigo/amber)
}) => {
    if (!isOpen) return null;

    const isDanger = type === "danger";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop with sophisticated blur */}
            <div 
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-300" 
                onClick={onClose} 
            />

            {/* Modal Card */}
            <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200">
                
                {/* Header/Close Icon */}
                <button 
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                    <FiX size={20} />
                </button>

                <div className="p-8 flex flex-col items-center text-center">
                    {/* Dynamic Icon Container */}
                    <div className={`mb-6 p-4 rounded-3xl ${isDanger ? 'bg-red-50 dark:bg-red-500/10' : 'bg-indigo-50 dark:bg-indigo-500/10'}`}>
                        <FiAlertCircle size={32} className={isDanger ? 'text-red-500' : 'text-indigo-500'} />
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {message}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-10 flex w-full gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-sm transition-all active:scale-95"
                        >
                            {cancelText}
                        </button>
                        <button
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className={`flex-[1.5] px-6 py-3 text-white rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95 ${
                                isDanger 
                                ? 'bg-red-500 hover:bg-red-600 shadow-red-500/20' 
                                : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20'
                            }`}
                        >
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;