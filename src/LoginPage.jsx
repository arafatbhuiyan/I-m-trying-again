import React from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // validation
    if (!email || !password) {
      setError("All fields are required");
    } else if (!email.includes("@")) {
      setError("Invalid email");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      alert("Login Successful ✅");
    }
  };

  return (
    <div className=" mb-10">
      <div className=" text-center mt-10 text-2xl font-bold">
        <h1>Sing in/up From</h1>
      </div>
      {/* icon part------------------ */}
      <div className=" flex justify-center mt-3">
        <div className="grid grid-cols-2 w-[800px] shadow-[-15px_1px_10px_rgba(0,0,0,0.1)]  overflow-hidden rounded-xl overflow-hidden">
          {/* left side------------------ */}
          <div className=" bg-white">
            <div>
              <div className=" flex justify-center mt-17">
                <h2 className=" text-3xl font-bold">Sing in</h2>
              </div>
              <div className="flex justify-center mt-7 gap-4">
                <div className="border w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200">
                  <FaFacebookF size={20} />
                </div>

                <div className="border w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200">
                  <FaGooglePlusG size={22} />
                </div>

                <div className="border w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200">
                  <TiSocialLinkedin size={22} />
                </div>
              </div>
            </div>
            {/* input fild------------------- */}
            <div className="mt-7">
              <h2 className="flex justify-center text-gray-800">
                or use your account
              </h2>

              {/* Email */}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-4/5 mx-auto block text-sm py-3 px-4 bg-gray-200"
                placeholder="Email"
                type="email"
              />

              {/* Password */}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-4 w-4/5 mx-auto block text-sm py-3 px-4 bg-gray-200"
                placeholder="Password"
                type="password"
              />

              {/* Error message */}
              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
            </div>
            {/* forget---------------- */}
            <div>
              <h2 className=" text-center mt-4 mb-3 text-gray-800">
                Forget your password?
              </h2>
              <div className="text-center">
                <button
                onClick={handleSubmit}
                className="uppercase px-10 py-2 bg-[#FF4500] rounded-4xl mb-17 font-bold text-sm text-white cursor-pointer">
                  Sign in
                </button>
              </div>
            </div>
          </div>
          {/* right side--------------------- */}
          <div className="bg-[#DC143C] min-h-[400px] flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-bold text-white">Hello, Friend!</h2>

            <h3 className="text-md mt-2 text-white px-7">
              Enter your personal details and start journey with us
            </h3>

            <button className="uppercase cursor-pointer px-10 py-2 border border-white rounded-full mt-6 font-bold text-sm text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
