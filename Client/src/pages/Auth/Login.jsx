// import { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");

//   const handleSendOtp = () => {
//     if (!email) return alert("Enter email");
//     setOtpSent(true);
//   };

//   const handleVerifyOtp = () => {
//     console.log("Verify OTP:", otp);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-chat-bg-light dark:bg-chat-bg-dark transition-colors duration-300 px-4">
      
//       {/* Card */}
//       <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-slate-700">

//         {/* Logo / Title */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-chat-text-main-light dark:text-chat-text-main-dark">
//             Chat App 🚀
//           </h1>
//           <p className="text-sm text-chat-text-muted-light dark:text-chat-text-muted-dark mt-1">
//             Login with your Gmail
//           </p>
//         </div>

//         {/* Google Login */}
//         <button
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-slate-600 py-3 rounded-chat mb-4 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
//             alt="google"
//             className="w-5 h-5"
//           />
//           <span className="text-sm font-medium text-chat-text-main-light dark:text-chat-text-main-dark">
//             Continue with Google
//           </span>
//         </button>

//         {/* Divider */}
//         <div className="flex items-center my-4">
//           <div className="flex-1 h-[1px] bg-gray-300 dark:bg-slate-600"></div>
//           <span className="px-3 text-xs text-chat-text-muted-light dark:text-chat-text-muted-dark">
//             OR
//           </span>
//           <div className="flex-1 h-[1px] bg-gray-300 dark:bg-slate-600"></div>
//         </div>

//         {/* Email OTP Section */}
//         {!otpSent ? (
//           <>
//             <label className="text-sm text-chat-text-muted-light dark:text-chat-text-muted-dark">
//               Email Address
//             </label>

//             <input
//               type="email"
//               placeholder="example@gmail.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-1 mb-4 px-4 py-3 rounded-chat border border-gray-300 dark:border-slate-600 bg-transparent text-chat-text-main-light dark:text-chat-text-main-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
//             />

//             <button
//               onClick={handleSendOtp}
//               className="w-full bg-brand-primary hover:opacity-90 text-white py-3 rounded-chat font-semibold transition"
//             >
//               Send OTP
//             </button>
//           </>
//         ) : (
//           <>
//             <label className="text-sm text-chat-text-muted-light dark:text-chat-text-muted-dark">
//               Enter OTP
//             </label>

//             <input
//               type="text"
//               placeholder="••••••"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full mt-1 mb-4 px-4 py-3 text-center tracking-widest text-lg rounded-chat border border-gray-300 dark:border-slate-600 bg-transparent text-chat-text-main-light dark:text-chat-text-main-dark focus:outline-none focus:ring-2 focus:ring-brand-accent"
//             />

//             <button
//               onClick={handleVerifyOtp}
//               className="w-full bg-brand-accent hover:opacity-90 text-white py-3 rounded-chat font-semibold transition"
//             >
//               Verify OTP
//             </button>

//             <p
//               onClick={handleSendOtp}
//               className="text-sm text-brand-primary text-center mt-3 cursor-pointer hover:underline"
//             >
//               Resend OTP
//             </p>
//           </>
//         )}

//         {/* Footer */}
//         <p className="text-xs text-center mt-6 text-chat-text-muted-light dark:text-chat-text-muted-dark">
//           Secure login powered by email OTP
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import api from "../../api/axios";
import { loginSuccess } from "../../app/slices/authSlice";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const { data } = await api.post(
        "/auth/login",
        formData
      );

      dispatch(
        loginSuccess({
          user: data.user,
          token: data.token,
        })
      );

      navigate("/");

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-chat-bg-light dark:bg-chat-bg-dark px-4">

      <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-slate-700">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Chat App 🚀
          </h1>

          <p className="text-sm mt-2 text-gray-500">
            Login to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>
            <label className="text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full mt-1 px-4 py-3 rounded-lg border"
              required
            />
          </div>

          <div>
            <label className="text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="******"
              className="w-full mt-1 px-4 py-3 rounded-lg border"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-5 text-sm">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-medium"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;