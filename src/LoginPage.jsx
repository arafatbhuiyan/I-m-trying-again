import React from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const LoginPage = () => {
  return (
    <div className=" mb-10">
      <div className=" text-center mt-10 text-2xl font-bold">
        <h1>Sing in/Up From</h1>
      </div>
      {/* icon part------------------ */}
      <div className=" flex justify-center mt-3">
        <div className=" grid grid-cols-2 w-200 border">
          {/* left side------------------ */}
          <div className=" bg-white">
            <div>
              <div className=" flex justify-center mt-17">
                <h2 className=" text-3xl font-bold">Sing in</h2>
              </div>
              <div className="flex justify-center mt-7 gap-4">
                <div className="border w-12 h-12 flex items-center justify-center rounded-full">
                  <FaFacebookF size={20} />
                </div>

                <div className="border w-12 h-12 flex items-center justify-center rounded-full">
                  <FaGooglePlusG size={22} />
                </div>

                <div className="border w-12 h-12 flex items-center justify-center rounded-full">
                  <TiSocialLinkedin size={22} />
                </div>
              </div>
            </div>
            {/* input fild------------------- */}
            <div className=" mt-7">
              <h2 className="flex justify-center text-gray-800">
                or use your account
              </h2>
              <input
                className="mt-2 w-4/5 mx-auto block text-xl py-1 px-4 bg-gray-200 placeholder:text-md"
                placeholder="Email"
                type=" email"
              ></input>
              <input
                className="mt-2 w-4/5 mx-auto block text-xl py-1 px-4 bg-gray-200 placeholder:text-md mt-4 "
                placeholder="Password"
                type="password"
              ></input>
            </div>
            {/* forget---------------- */}
            <div>
              <h2 className=" text-center mt-4 mb-3 text-gray-800">
                Forget your password?
              </h2>
              <div className="text-center">
                <button className="uppercase px-10 py-2 bg-amber-600 rounded-4xl mb-17">
                  Sign in
                </button>
              </div>
            </div>
          </div>
          {/* right side--------------------- */}
          <div className=" bg-[#E88610] ">fhgfhdfghd</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
