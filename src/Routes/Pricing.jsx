import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const pricing = {
  currentPlan: "pro",
  expiresAt: "2025-12-31T23:59:59+05:30",
  plans: {
    free: {
      name: "Free",
      maxVideos: 200,
      features: [
        "Mark watched / to-watch / important",
        "Basic stats",
        "Light theme support",
      ],
    },
    pro: {
      name: "Pro",
      priceMonthly: 4.99,
      maxVideos: 1000,
      features: [
        "All Free features",
        "Dark theme + theme customization",
        "Download video list",
        "AI-based Watch Habit Summary",
        "Multiple device sync",
      ],
    },
    lifetime: {
      name: "Lifetime",
      oneTimePrice: 39.99,
      maxVideos: 10000,
      features: [
        "All Pro features forever",
        "Priority Support",
        "Lifetime product access",
      ],
    },
  },
};

const planOrder = ["free", "pro", "lifetime"];

const Pricing = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-[#0e1016] text-white font-[gilroy]">
      <h2 className="text-3xl font-extrabold mb-2 tracking-tight">Pricing Plans</h2>
      <p className="mb-10 text-gray-400 text-lg">Choose the plan that fits your workflow</p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {planOrder.map((key) => {
          const plan = pricing.plans[key];
          const isCurrent = pricing.currentPlan === key;
          return (
            <div
              key={key}
              className={`relative rounded-3xl border-2 shadow-xl p-8 flex flex-col items-center transition-all duration-300
                ${isCurrent
                  ? "border-emerald-400 bg-gradient-to-br from-emerald-900/60 to-gray-900/80 scale-105"
                  : "border-gray-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 hover:border-emerald-400"}
              `}
            >
              {isCurrent && (
                <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
                  Current Plan
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                {plan.priceMonthly && (
                  <span className="text-3xl font-extrabold text-emerald-400">
                    ${plan.priceMonthly}
                    <span className="text-base text-gray-400 font-medium">/mo</span>
                  </span>
                )}
                {plan.oneTimePrice && (
                  <span className="text-3xl font-extrabold text-yellow-400">
                    ${plan.oneTimePrice}
                    <span className="text-base text-gray-400 font-medium"> one-time</span>
                  </span>
                )}
                {!plan.priceMonthly && !plan.oneTimePrice && (
                  <span className="text-3xl font-extrabold text-gray-300">Free</span>
                )}
              </div>
              <div className="mb-4 text-sm text-gray-300">
                <span className="font-bold">{plan.maxVideos.toLocaleString()}</span> video limit
              </div>
              <ul className="mb-6 w-full text-left space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-base">
                    <FaCheckCircle className="text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled={isCurrent}
                className={`w-full py-2 rounded-xl font-bold text-lg transition
                  ${isCurrent
                    ? "bg-emerald-400/30 text-emerald-200 cursor-not-allowed"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white shadow"}
                `}
              >
                {isCurrent ? "Active" : "Choose Plan"}
              </button>
              {isCurrent && pricing.expiresAt && key !== "lifetime" && (
                <div className="mt-3 text-xs text-gray-400">
                  Renews: {new Date(pricing.expiresAt).toLocaleDateString()}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;