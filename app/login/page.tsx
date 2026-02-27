import { RiGithubFill, RiGoogleFill } from "@remixicon/react";
import React from "react";

const page = () => {
  return (
    <section className="min-h-svh flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overfolw-hidden p-8 sm:p-10">
        {/* Logo */}
        <span className="text-2xl font-semibold text-amber-600 font-cunia text-center block">
          FurniHup
        </span>
        {/* Form */}
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl lg:text-4xl text-neutral-800">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          {/* Form InPut */}
          <form action="" className="space-y-6">
            {/* Wrapper */}
            <div className="space-y-5">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-600 focus:ring-2 outline-none transition-colors"
                />
              </div>
              {/* Password Field */}
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-600 focus:ring-2 outline-none transition-colors"
                />
              </div>
            </div>
            {/* Wrapper */}
            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="size-4 text-amber-600 focus:ring-amber-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="checkbox"
                  className="block text-sm text-gray-700 cursor-pointer"
                >
                  Remember Me
                </label>
              </div>
              {/* Link */}
              <a
                href="#"
                className="text-sm text-amber-600 hover:text-amber-700 hover:underline transition-colors"
              >
                Forgot Password
              </a>
            </div>
            {/* Btn */}
            <button className="btn-primary w-full p-3 text-lg">Sign In</button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-amber-50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Logins Btn */}
          <div className="grid gap-4 grid-cols-2">
            <button className="w-full inline-flex justify-center items-center gap-2 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-all">
              <span>
                <RiGoogleFill />
              </span>
              Google
            </button>
            <button className="w-full inline-flex justify-center items-center gap-2 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-all">
              <span>
                <RiGithubFill />
              </span>
              GitHub
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="border-t border-gray-300 my-6"></div>
          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an account?</span>
            <a
              href="#"
              className=" text-amber-600 hover:text-amber-700 focus:text-amber-700 hover:underline transition-colors ml-2"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
