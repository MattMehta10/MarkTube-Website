import React from "react";

export default function FAQ() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-300 space-y-6">
      <h1 className="text-3xl mb-10 font-bold text-white">Frequently Asked Questions (FAQ)</h1>

      <div>
        <h2 className="text-xl font-semibold text-white">What is MarkTube?</h2>
        <p>MarkTube is a browser extension that helps you organize your YouTube experience by letting you mark videos as "Watched", "Want to Watch", or "Important".</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">Is MarkTube affiliated with YouTube?</h2>
        <p>No. MarkTube is an independent tool and is not affiliated with, sponsored by, or endorsed by YouTube or Google.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">Do I need to sign in to use MarkTube?</h2>
        <p>No, you can use basic features without signing in. However, signing in lets you sync your data across devices.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">Does MarkTube track my YouTube history?</h2>
        <p>No. We do not access or store your YouTube history or credentials. Your privacy is a top priority.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">Can I customize the labels or categories?</h2>
        <p>In the current version, the three main categories are fixed. Custom categories are coming in future updates!</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">Is MarkTube free?</h2>
        <p>Yes! We offer a free version with essential features. Premium plans with advanced analytics and sync are also available.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">How can I report a bug or give feedback?</h2>
        <p>You can reach out to us at <a href="mailto:feedback@marktube.app" className="text-blue-400">feedback@marktube.app</a>.</p>
      </div>
    </div>
  );
}