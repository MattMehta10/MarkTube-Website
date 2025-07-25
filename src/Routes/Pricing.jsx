import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import SpotlightCard from "../assets/Components/SpotlightCard/SpotlightCard";
import Aurora from "../assets/Backgrounds/Aurora/Aurora"
import { motion } from "motion/react";



const planOrder = ["free", "pro", "lifetime"];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('free');
const pricing = {
  currentPlan: selectedPlan, // or "pro" / "lifetime"
  expiresAt: null,     // ISO string when applicable
  plans: {
    free: {
      name: "Free",
      maxVideos: 500,
      features: [
        "Mark videos with custom tags",
        "Basic stats & playlist tracking",
        "Video list export & import",
        "Light/Dark mode support",
        "Access to sidebar & popup dashboard"
      ]
    },
    pro: {
      name: "Pro",
      priceMonthly: 79.99,
      maxVideos: 5000,
      features: [
        "Everything in Free",
        "Distraction-free study mode",
        "Ad-free YouTube experience",
        "AI-powered insights & summaries",
        "Multi-device sync & cloud backup",
        "Web dashboard with productivity tools"
      ]
    },
    lifetime: {
      name: "Lifetime",
      oneTimePrice: 499.99,
      maxVideos: 10000,
      features: [
        "All Pro features forever",
        "Priority support & early feature access",
        "One-time purchase — no subscriptions"
      ]
    }
  }
};


  const bgRef = useRef()
  return (<>
    
    <section className="w-full flex flex-col overflow-hidden items-center py-4 text-white font-[gilroy]">
  <div className="w-full h-screen overflow-hidden absolute z-0 top-0" ref={bgRef}>
        <Aurora />
    </div>
      <h2 className="text-3xl z-50 font-extrabold mb-2 tracking-tight">Pricing Plans</h2>
      <p className="mb-8 z-50 text-gray-400 text-lg">Choose the plan that fits your workflow</p>
      <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.5,delay:.5}}  className="w-80 lg:w-full lg:max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {planOrder.map((key) => {
          const plan = pricing.plans[key];
          const isCurrent = pricing.currentPlan === key;
          return (
            <div 
              key={key}
              className={`relative z-50 rounded-3xl border-2 shadow-xl p-8 flex flex-col items-center transition-all duration-300
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
                    ₹{plan.priceMonthly}
                    <span className="text-base text-gray-400 font-medium">/mo</span>
                  </span>
                )}
                {plan.oneTimePrice && (
                  <span className="text-3xl font-extrabold text-yellow-400">
                    ₹{plan.oneTimePrice}
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
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-400 p-1 text-xl" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled={isCurrent}
                onClick={() => setSelectedPlan(key)}
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
      </motion.div>
    </section>
        </>
  );
};

export default Pricing;