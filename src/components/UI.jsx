import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'
import animationdata from '../assets/Streak Fire.json'

const UIShowcase = () => {
  gsap.registerPlugin(ScrollTrigger);
  const streakRef = useRef();
  const img1Ref = useRef();
  const img2Ref = useRef();
  const textRef = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop } = context.conditions;

          gsap.from(streakRef.current, {
            opacity: 0,
            y: 100,
            filter:"blur(3px)",
            duration: 1,
            scrollTrigger: {
              trigger: '#UISection',
              start: 'top 40%',
              // markers:true
            }
          });

          gsap.from([img1Ref.current], {
            opacity: 0,
            x: -100,
            stagger: 0.3,
            duration: 1,
            scrollTrigger: {
              trigger: '#imgsection',
              start: 'top 50%',
              // markers:true
            }
          });
          gsap.from([ img2Ref.current], {
            opacity: 0,
            x: 100,
            stagger: 0.3,
            duration: 1,
            scrollTrigger: {
              trigger: '#imgsection',
              start: 'top 50%',
            }
          });

          gsap.from(textRef.current, {
            opacity: 0,
            y: 50,
            delay: 0.4,
            duration: 1,
            scrollTrigger: {
              trigger: '#imgsection',
              start: 'center 60%',
            }
          });

        return () => console.log("Cleaned responsive animations");
      }
    );
  }, []);

  return (
    <section id="UISection" className="bg-gray-950 text-white px-4 py-20 md:py-32 lg:mt-0 mt-50 flex flex-col items-center space-y-16">
      
      {/* 🔥 Streak & Lottie */}
      <div ref={streakRef} className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 flex scale-200">
          <Lottie animationData={animationdata} loop={true} />
          <Lottie animationData={animationdata} loop={true} />
          <Lottie animationData={animationdata} loop={true} />
        </div>
        <h2 className="text-3xl font-bold text-center">
          Gamify Your Study Journey
        </h2>
        <p className="text-center max-w-xl text-gray-300">
          Stay motivated with daily streaks, focus-enhancing environment, and AI-powered insights. Make your learning flow fun and addictive.
        </p>
      </div>

      {/* 📸 Sidebar Images */}
      <div id='imgsection' className="grid grid-cols-2 gap-6 max-w-5xl w-full">
        <img ref={img1Ref} src="/sidebar1.png" alt="Sidebar 1" className="rounded-xl shadow-lg border border-gray-700" />
        <img ref={img2Ref} src="/sidebar2.png" alt="Sidebar 2" className="rounded-xl shadow-lg border border-gray-700" />
      </div>

      {/* 🧠 Summary Text */}
      <div ref={textRef} className="text-center max-w-xl">
        <h3 className="text-xl font-semibold mb-2">
          Smart Insights at a Glance
        </h3>
        <p className="text-gray-400">
          Track your progress with intuitive UI. Visualize your habits, stay consistent, and push your limits—all from the sidebar.
        </p>
      </div>

    </section>
  );
};

export default UIShowcase;
