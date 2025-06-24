import React from "react";

export default function CookiePolicy() {
  return (
    <div className="p-6 max-w-4xl h-100vh mx-auto text-gray-300 space-y-6">
      <h1 className="text-3xl font-bold text-white mb-20">Cookie Policy</h1>
      <p>This policy explains how MarkTube uses cookies to enhance your experience.</p>

      <h2 className="text-xl font-semibold text-white">1. What Are Cookies?</h2>
      <p>Cookies are small files stored in your browser to help remember preferences and analyze site traffic.</p>

      <h2 className="text-xl font-semibold text-white">2. What We Use</h2>
      <ul className="list-disc pl-6">
        <li>Session management cookies</li>
        <li>Anonymous analytics cookies</li>
        <li>Theme preference storage</li>
      </ul>

      <h2 className="text-xl font-semibold text-white">3. What We Don’t Use</h2>
      <ul className="list-disc pl-6">
        <li>No advertising cookies</li>
        <li>No cross-site tracking</li>
      </ul>

      <h2 className="text-xl font-semibold text-white">4. How to Manage Cookies</h2>
      <p>You can clear or block cookies anytime through your browser settings.</p>
    </div>
  );
}