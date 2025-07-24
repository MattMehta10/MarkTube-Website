import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-300 space-y-6">
      <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
      <p><strong>Effective Date:</strong> June 24, 2025</p>
      <p>Your privacy matters. This Privacy Policy explains how MarkTube collects and uses your data.</p>

      <h2 className="text-xl font-semibold text-white">1. What We Collect</h2>
      <p>We may collect anonymous usage data, extension settings, and your email (if you sign in to sync).</p>

      <h2 className="text-xl font-semibold text-white">2. What We Do Not Collect</h2>
      <p>We do not collect your YouTube credentials, watch history, or any video content.</p>

      <h2 className="text-xl font-semibold text-white">3. How We Use Data</h2>
      <p>We use your data to provide personalized features, improve product performance, and send updates if you opt in.</p>

      <h2 className="text-xl font-semibold text-white">4. Data Sharing</h2>
      <p>We do not sell or share your data with third parties.</p>

      <h2 className="text-xl font-semibold text-white">5. Cookies</h2>
      <p>Our website may use cookies for basic analytics and session management.</p>

      <h2 className="text-xl font-semibold text-white">6. Your Rights</h2>
      <p>You can request deletion of your synced data and opt out of tracking.</p>

      <h2 className="text-xl font-semibold text-white">7. Contact</h2>
      <p>To manage your data, email us at <a href="mailto:help@marktube.app" className="text-blue-400">privacy@marktube.app</a>.</p>
    </div>
  );
}