import React from 'react';

const blogs = [
  {
    title: "What is MarkTube & How I Came to Make It",
    date: "July 25, 2025",
    author: "Yash",
    content: (
      <>
        <p className="mb-4">
          <strong>MarkTube</strong> is a productivity tool for YouTube learners. It lets you mark videos as <span className="text-emerald-400 font-bold">watched</span>, <span className="text-yellow-400 font-bold">to-watch</span>, or <span className="text-red-400 font-bold">important</span>, track your progress, and organize your learning journey.
        </p>
        <p className="mb-4">
          The idea for MarkTube came from my own struggles as a self-taught developer. I was constantly saving YouTube links, losing track of what I’d watched, and wishing for a way to organize my learning. Existing tools were either too generic or didn’t fit the YouTube workflow.
        </p>
        <p className="mb-4">
          So, I decided to build MarkTube—a focused, beautiful, and simple app to help learners like me. It started as a weekend project and quickly grew as I realized how many people face the same problem. Now, MarkTube supports marking, stats, dark mode, and more, with many features planned for the future!
        </p>
        <p>
          Thanks for checking out MarkTube. Stay tuned for more updates and features!
        </p>
      </>
    ),
  },
  // Add more blog posts here as objects
];

const Blog = () => {
  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-br from-[#10121b] via-[#181a20] to-[#0e1016] flex flex-col items-center py-12 px-2 font-[gilroy]">
      <h1 className="text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">Blog</h1>
      <p className="text-lg text-gray-400 mb-8 font-medium">Stories, updates & insights from the MarkTube journey</p>
      <div className="w-full max-w-2xl flex flex-col gap-12">
        {blogs.map((blog, idx) => (
          <article
            key={idx}
            className="bg-[#181a20]/90 rounded-3xl shadow-2xl p-10 border-l-4 border-emerald-400/60 hover:border-emerald-300/90 transition-all duration-300 text-white hover:scale-[1.025] hover:shadow-emerald-900/30"
          >
            <h2 className="text-3xl font-bold mb-2 tracking-tight">{blog.title}</h2>
            <div className="flex items-center gap-4 mb-6 text-gray-400 text-base">
              <span className="font-semibold">{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
            <hr className="border-gray-700 mb-6" />
            <div className="prose prose-invert max-w-none text-lg leading-relaxed">
              {blog.content}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;