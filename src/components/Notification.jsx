import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { MyContext } from "../Wrapper";
import { MdEmail, MdOutlineRocketLaunch } from "react-icons/md";
import './Notification.css'
const Notification = () => {
  const { Notifshow, setNotifshow } = useContext(MyContext);

  const dummyNotifications = [
    {
      id: 1,
      title: "Confirm your Email ✉️",
      detail:
        "Please confirm your Email to continue using Web Highlights. Make sure to also check your SPAM folder ⚠️",
      type: "important",
      action: "Resend Email",
      date: "Today",
    },
    {
      id: 2,
      title: "Welcome to MarkTube 🎉",
      detail: `We're thrilled to have you onboard! MarkTube is your personal YouTube manager — helping you stay organized, focused, and productive.`,
      features: [
        {
          label: "🎯 Mark Videos",
          desc: "Save any video as Important, Want to Watch, or Watched.",
        },
        {
          label: "📊 Smart Stats",
          desc: "Track your watch habits and productivity across time.",
        },
        {
          label: "🧠 AI Watchlist Insights",
          desc: "Coming soon: Let AI help you prioritize what to watch next.",
        },
        {
          label: "🌙 Dark Mode",
          desc: "Enjoy a sleek interface that’s easy on your eyes.",
        },
      ],
      date: "June 17, 2025",
      action: "Learn more 📚",
    },
  ];

  return (
    <>
      {Notifshow && (
        <div
          className="fixed top-14 right-35 z-[9999] flex items-start"
          onClick={() => setNotifshow(false)}
        >
          <div
            className="w-80 max-w-xs bg-[#111827] text-white rounded-2xl shadow-2xl border border-zinc-700 overflow-y-auto max-h-[70vh] relative scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-zinc-400 hover:text-red-400"
              onClick={() => setNotifshow(false)}
            >
              <IoClose size={24} />
            </button>

            <div className="p-6 pb-3 text-lg font-semibold border-b border-zinc-700">
              Notifications
            </div>

            <div className="p-5 space-y-6">
              {dummyNotifications.map((note) => (
                <div
                  key={note.id}
                  className={`rounded-xl p-4 ${
                    note.type === "important"
                      ? "bg-emerald-950 border border-emerald-700"
                      : "bg-zinc-800"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-md font-bold">{note.title}</h3>
                    <span className="text-md text-zinc-400">{note.date}</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {note.detail}
                  </p>

                  {note.features && (
                    <ul className="list-disc list-inside mt-3 text-sm text-zinc-400 space-y-1">
                      {note.features.map((f, i) => (
                        <li key={i}>
                          <strong className="text-white">{f.label}</strong> -{" "}
                          {f.desc}
                        </li>
                      ))}
                    </ul>
                  )}

                  {note.action && (
                    <div className="mt-3">
                      <button className="text-emerald-400 hover:underline text-sm font-medium">
                        {note.action}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
