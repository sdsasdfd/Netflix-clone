import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <div className=" h-screen w-full hero-bg">
      <header className=" max-w-6xl flex items-center justify-between p-4 mx-auto">
        <Link to="/">
          <img className=" w-52" src="/netflix-logo.png" alt="logo" />
        </Link>
      </header>
      <div className=" flex justify-center items-center mt-12 mx-3">
        <div className=" w-full space-y-6 max-w-md bg-black/60 shadow-md rounded-lg p-8">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Login
          </h1>
          <form className=" space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className=" text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@gmail.com"
                id="email"
                className=" w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className=" text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="*******"
                id="password"
                className=" w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-600 font-semibold rounded-md hover:bg-red-700 text-white"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-red-500 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
