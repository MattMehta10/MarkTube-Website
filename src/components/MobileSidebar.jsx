import React from "react";
import { Link } from "react-router-dom";

export default function MobileSidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-500 p-6 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        bg-blue-950/40 backdrop-blur-2xl border-r border-white/10`}
      >

        {/* Navigation Links */}
        <div className="flex flex-col mt-10 space-y-4 text-white">
          {[
            { label: "Home", to: "/" },
            { label: "Workspace", to: "/MTWorkspace" },
            { label: "Pricing", to: "/Pricing" },
            { label: "Blog", to: "/Blog" },
            { label: "FAQ", to: "/FAQ" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="px-4  py-2 rounded hover:shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
