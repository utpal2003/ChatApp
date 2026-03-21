import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (!email) return alert("Enter email");
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    console.log("Verify OTP:", otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-chat-bg-light dark:bg-chat-bg-dark transition-colors duration-300 px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-slate-700">

        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-chat-text-main-light dark:text-chat-text-main-dark">
            Chat App 🚀
          </h1>
          <p className="text-sm text-chat-text-muted-light dark:text-chat-text-muted-dark mt-1">
            Login with your Gmail
          </p>
        </div>

        {/* Google Login */}
        <button
          className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-slate-600 py-3 rounded-chat mb-4 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-chat-text-main-light dark:text-chat-text-main-dark">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-slate-600"></div>
          <span className="px-3 text-xs text-chat-text-muted-light dark:text-chat-text-muted-dark">
            OR
          </span>
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-slate-600"></div>
        </div>

        {/* Email OTP Section */}
        {!otpSent ? (
          <>
            <label className="text-sm text-chat-text-muted-light dark:text-chat-text-muted-dark">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 mb-4 px-4 py-3 rounded-chat border border-gray-300 dark:border-slate-600 bg-transparent text-chat-text-main-light dark:text-chat-text-main-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />

            <button
              onClick={handleSendOtp}
              className="w-full bg-brand-primary hover:opacity-90 text-white py-3 rounded-chat font-semibold transition"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <label className="text-sm text-chat-text-muted-light dark:text-chat-text-muted-dark">
              Enter OTP
            </label>

            <input
              type="text"
              placeholder="••••••"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mt-1 mb-4 px-4 py-3 text-center tracking-widest text-lg rounded-chat border border-gray-300 dark:border-slate-600 bg-transparent text-chat-text-main-light dark:text-chat-text-main-dark focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-brand-accent hover:opacity-90 text-white py-3 rounded-chat font-semibold transition"
            >
              Verify OTP
            </button>

            <p
              onClick={handleSendOtp}
              className="text-sm text-brand-primary text-center mt-3 cursor-pointer hover:underline"
            >
              Resend OTP
            </p>
          </>
        )}

        {/* Footer */}
        <p className="text-xs text-center mt-6 text-chat-text-muted-light dark:text-chat-text-muted-dark">
          Secure login powered by email OTP
        </p>
      </div>
    </div>
  );
};

export default Login;