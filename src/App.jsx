import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const TechnojamLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white p-4">
      {/* Logo Container */}
      <div className="mb-12 border-4 border-blue-500 rounded-full p-8 bg-gray-800">
        <div className="w-24 h-24 flex items-center justify-center text-2xl font-bold">
          <img
            src="https://res.cloudinary.com/dyfhbqtjm/image/upload/f_auto,q_auto/nvpkmaabzlvihppq7d0o"
            alt=""
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Team Technojam
        </h1>
        <div className="space-y-4">
          <p className="text-3xl font-light text-gray-300">Coming Soon</p>
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            We&apos;re crafting something amazing. Stay tuned.
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex space-x-8">
        <a
          href="https://github.com/technojam"
          className="transform hover:scale-110 transition-transform duration-200 hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.instagram.com/teamtechnojam"
          className="transform hover:scale-110 transition-transform duration-200 hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={32} />
        </a>
        <a
          href="https://www.linkedin.com/company/technojam"
          className="transform hover:scale-110 transition-transform duration-200 hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={32} />
        </a>
      </div>
    </div>
  );
};

export default TechnojamLanding;
