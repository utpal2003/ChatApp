import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../api/axios";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      await api.post(
        "/auth/register",
        formData
      );

      alert("Registration successful");

      navigate("/login");

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "Registration failed"
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
            Create Account 🚀
          </h1>

          <p className="text-sm mt-2 text-gray-500">
            Join the chat community
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <label className="text-sm">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border"
              required
            />

          </div>

          <div>

            <label className="text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              className="w-full mt-1 px-4 py-3 rounded-lg border"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

        </form>

        <p className="text-center mt-5 text-sm">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-medium"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;