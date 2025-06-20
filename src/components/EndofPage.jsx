import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SpotlightCard from "../assets/Components/SpotlightCard/SpotlightCard";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const reviews = [
    {
        name: "Ritika",
        role: "BTech Student",
        stars: 5,
        review: "My YouTube feels cleaner. I no longer lose track of videos I actually want to watch.",
    },
    {
        name: "Arjun",
        role: "Full-stack Dev",
        stars: 4,
        review: "I use it daily for saving tutorials. Better than Watch Later.",
    },
    {
        name: "Nisha",
        role: "Designer",
        stars: 5,
        review: "MarkTube feels like a personal assistant for my YouTube.",
    },
    {
        name: "Pratik",
        role: "NEET Aspirant",
        stars: 5,
        review: "Saved over 100 videos in 3 categories. Super useful!",
    },
];

const EndOfHomePage = () => {
  const Empty1 = useRef();
  const Empty2= useRef();
  const cardRef = useRef();
  const namedRefs = useRef({});
  
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        scrub: true,
        start: "top 50%",
        end: "top 15%",
        // markers: true,
      },
    });

    t1.from(cardRef.current, {
      filter: "blur(10px)",
    });

    t1.from(namedRefs.current[`singlecard0`], {
      x: -50,
      opacity: 0,duration:1.5,delay:.5
    },"Sync");

    t1.from(namedRefs.current[`singlecard1`], {
      y: -50,
      opacity: 0,duration:1.5,delay:.5
    },"Sync");

    t1.from(namedRefs.current[`singlecard2`], {
      y: 50,
      opacity: 0,duration:1.5,delay:.5
    },"Sync");

    t1.from(namedRefs.current[`singlecard3`], {
      x: 50,
      opacity: 0,duration:1.5,delay:.5
    },"Sync");
    t1.from(Empty1.current,{
      opacity:0,x:50 ,duration:1.5,delay:.5
    },"Sync")
    t1.from(Empty2.current,{
      opacity:0,x:-50 ,duration:1.5,delay:.5
    },"Sync")
});


    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'public/MarkTube-YouTube-Manager.zip'; // Relative to public folder
    link.download = 'MarkTube-YouTube-Manager.zip'; // Optional: customize file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



    return (
        <section className="bg-gray-950 text-white py-20 px-4 md:px-20 space-y-16">
            {/* User Review Section */}
            <div ref={cardRef}>
                <h2 className="text-4xl font-bold text-center mb-30">What MarkTube users are saying</h2>
                <div className="flex flex-wrap gap-5 justify-center items-center">
                    <div ref={Empty1}><SpotlightCard className="h-35 opacity-1 w-50 animate-pulse" >
                        <div class="flex animate-pulse opacity-1 space-x-4">
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 rounded bg-gray-200"></div>
                                <div class="space-y-8">
                                    <div class="grid grid-cols-3 gap-6">
                                        <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                        <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                    </div>
                                    <div class="h-2 rounded bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                    </div>
                    {reviews.map((r, i) => (
                        <div key={i} ref={(el) => { if (el) namedRefs.current[`singlecard${i}`] = el; }}>
                        <SpotlightCard key={i} className="bg-[#15181D] p-6 rounded-xl shadow-md border border-gray-700">
                            <p className="text-yellow-400 mb-2">
                                {"⭐️".repeat(r.stars)}
                            </p>
                            <p className="text-sm italic mb-4">"{r.review}"</p>
                            <p className="text-sm font-semibold text-gray-300">— {r.name}, <span className="text-gray-500">{r.role}</span></p>
                        </SpotlightCard></div>
                    ))}
                    <div ref={Empty2}><SpotlightCard className="h-35 opacity-1 w-50 animate-pulse" >
                        <div class="flex animate-pulse opacity-1 space-x-4">
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 rounded bg-gray-200"></div>
                                <div class="space-y-8">
                                    <div class="grid grid-cols-3 gap-6">
                                        <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                        <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                    </div>
                                    <div class="h-2 rounded bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard></div>
                </div>
            </div>

            {/* Final Persuasion */}
            <div className="text-center space-y-6">
                <h3 className="text-2xl font-semibold">🎯 Reclaim Your YouTube. Make It Yours.</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Say goodbye to cluttered Watch Later queues, missed tutorials, or algorithmic noise.
                    MarkTube brings focus back to your feed — in just one click.
                </p>
                <button onClick={handleDownload} className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-full font-medium shadow-lg">
                    ✅ Install Now – It's Free
                </button>
                <p className="text-sm text-gray-500 mt-2">Supports Chrome, Edge, Brave. No login required.</p>
            </div>

            {/* Bottom Navigation */}
            <div className="border-t border-gray-700 pt-10 grid md:grid-cols-3 gap-10 text-sm">
                {/* Socials */}
                <div className="space-y-2">
                    <p className="font-semibold text-white">📢 Follow Us</p>
                    <div className="flex gap-4 text-blue-400">
                        <a href="#" className="hover:text-white">GitHub</a>
                        <a href="#" className="hover:text-white">X (Twitter)</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">YouTube</a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <p className="font-semibold text-white">Quick Links</p>
                    <div className="flex flex-col gap-1 text-gray-400">
                        <a href="#" className="hover:text-white">Home</a>
                        <a href="#" className="hover:text-white">Workspace</a>
                        <a href="#" className="hover:text-white">Pricing</a>
                        <a href="#" className="hover:text-white">Blog</a>
                        <a href="#" className="hover:text-white">FAQ</a>
                    </div>
                </div>

                {/* Legal/Final */}
                <div className="space-y-2">
                    <p className="font-semibold text-white">Legal</p>
                    <div className="flex flex-col gap-1 text-gray-400">
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>

            {/* Final Copyright */}
            <div className="pt-10 text-center text-gray-500 text-sm border-t border-gray-700 mt-10">
                © 2025 MarkTube. All rights reserved. Built with 💚 for creators, learners, and organizers.
            </div>
        </section>
    );
};

export default EndOfHomePage;
