import { motion } from 'motion/react';
import React from 'react';

const blogs = [
  {
    title: "What is MarkTube & How I Came to Make It",
    date: "July 25, 2025",
    author: "Yash",
    content: (
      <>
        <p>
          <strong>MarkTube</strong> is a productivity tool for YouTube learners. It lets you mark videos as{' '}
          <span className="text-emerald-400 font-semibold">watched</span>,{' '}
          <span className="text-yellow-400 font-semibold">to-watch</span>, or{' '}
          <span className="text-red-400 font-semibold">important</span>, track your progress, and organize your learning journey.
        </p>
        <p>
          The idea for MarkTube came from my own struggles as a self-taught developer. I was constantly saving YouTube links, losing track of what I’d watched, and wishing for a way to organize my learning. Existing tools were either too generic or didn’t fit the YouTube workflow.
        </p>
        <p>
          So, I decided to build MarkTube—a focused, beautiful, and simple app to help learners like me. It started as a weekend project and quickly grew as I realized how many people face the same problem. Now, MarkTube supports marking, stats, dark mode, and more, with many features planned for the future!
        </p>
        <p>
          Thanks for checking out MarkTube. Stay tuned for more updates and features!
        </p>
      </>
    ),
  },
  // You can add more blog posts here
];

const Blog = () => {
  return (
    <div className="min-h-screen w-full text-white px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          MarkTube Blog
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Stories, updates & insights from the MarkTube journey
        </p>
      </div>

      <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.5,delay:.5}}  className="space-y-12">
        {blogs.map((blog, idx) => (
          <article
            key={idx}
            className="bg-[#1c1e26]  border-l-4 border-emerald-400/60 hover:border-emerald-300/90 rounded-2xl shadow-xl hover:shadow-emerald-900/30 transition-transform transform hover:scale-[1.015] p-8 sm:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{blog.title}</h2>
            <div className="flex items-center flex-wrap gap-2 text-sm text-gray-400 mb-4">
              <span className="font-medium">{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
            <hr className="border-gray-700 mb-6" />
            <div className="prose prose-invert prose-sm sm:prose-base max-w-none leading-relaxed text-gray-200">
              {blog.content}
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
