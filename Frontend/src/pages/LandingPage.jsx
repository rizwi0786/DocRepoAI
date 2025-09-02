// src/pages/LandingPage.jsx

import { useState } from "react";
import {
  ArrowRight,
  FileText,
  Brain,
  MessageSquare,
  Shield,
  Search,
  Tags,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import CustomCursor from "../components/CustomCursor";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(formData);

    try {
      const response = await fetch(
        "http://localhost:5000/api/contactUs/submit-contact-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error, please try again ⚠️");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page bg-gray-950 text-white flex flex-col relative overflow-hidden">
      {/* Global Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Enhanced Gradient Orbs - positioned to cover full page */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/15 via-blue-400/10 to-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/20 via-blue-500/12 to-pink-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-blue-400/10 to-purple-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-gradient-to-tl from-blue-500/18 via-purple-400/12 to-cyan-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "5s" }}
        ></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 w-full h-[500vh]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "gridMove 25s linear infinite",
            }}
          ></div>
        </div>

        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0 w-full h-[500vh]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 40%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
              `,
              animation: "waveMove 20s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Moving Data Streams - multiple layers */}
        <div
          className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          style={{ animation: "slideRight 10s linear infinite" }}
        ></div>
        <div
          className="absolute top-2/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent"
          style={{
            animation: "slideRight 12s linear infinite",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute top-3/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{
            animation: "slideRight 14s linear infinite",
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="absolute top-4/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent"
          style={{
            animation: "slideRight 16s linear infinite",
            animationDelay: "6s",
          }}
        ></div>
        <div
          className="absolute top-5/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
          style={{
            animation: "slideRight 18s linear infinite",
            animationDelay: "8s",
          }}
        ></div>

        {/* Floating Neural Network Nodes - distributed across page */}
        <div
          className="absolute top-[10%] left-[10%] w-3 h-3 bg-blue-400/50 rounded-full animate-ping"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-[15%] right-[15%] w-2 h-2 bg-purple-400/40 rounded-full animate-ping"
          style={{ animationDelay: "1s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-[30%] left-[20%] w-4 h-4 bg-cyan-400/35 rounded-full animate-ping"
          style={{ animationDelay: "2s", animationDuration: "6s" }}
        ></div>
        <div
          className="absolute top-[45%] right-[25%] w-2 h-2 bg-blue-300/45 rounded-full animate-ping"
          style={{ animationDelay: "3s", animationDuration: "4.5s" }}
        ></div>
        <div
          className="absolute top-[60%] left-[30%] w-3 h-3 bg-purple-300/40 rounded-full animate-ping"
          style={{ animationDelay: "4s", animationDuration: "5.5s" }}
        ></div>
        <div
          className="absolute top-[75%] right-[20%] w-2 h-2 bg-cyan-300/45 rounded-full animate-ping"
          style={{ animationDelay: "5s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-[90%] left-[40%] w-3 h-3 bg-blue-400/40 rounded-full animate-ping"
          style={{ animationDelay: "6s", animationDuration: "5s" }}
        ></div>

        {/* Scanning Lines */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent w-2 opacity-50"
          style={{ animation: "scanHorizontal 8s linear infinite" }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/12 to-transparent h-2 opacity-40"
          style={{
            animation: "scanVertical 12s linear infinite",
            animationDelay: "4s",
          }}
        ></div>
      </div>

      {/* Add custom keyframe animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes waveMove {
          0%,
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) scale(1.02) rotate(0.5deg);
          }
          50% {
            transform: translateY(0) scale(0.98) rotate(-0.5deg);
          }
          75% {
            transform: translateY(15px) scale(1.02) rotate(0.3deg);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes scanHorizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        @keyframes scanVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>

      {location.pathname === "/" && <CustomCursor />}
      {/* <CustomCursor />  */}

      {/* Navbar */}
      <header className="w-full px-8 py-6 flex justify-between items-center border-b border-gray-800 fixed top-0 left-0 z-50 bg-gray-950/90 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-blue-400">DocuAI</h1>
        <nav className="space-x-8 hidden md:flex">
          <a href="#features" className="hover:text-blue-400">
            Features
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
        <Link
          to="/auth/signup"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium">
            Get Started
          </button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20 pt-20 w-full relative z-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            Talk to Your <span className="text-blue-400">Documents</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Upload PDFs, images, or scanned files — and let AI handle the rest.
            Instantly search, auto-tag, summarize, and chat with your documents
            powered by OCR + LLM.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/auth/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                Try Now <ArrowRight size={18} />
              </button>
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <video
            src="/images/LandingPage.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[600px] h-[350px] md:w-[700px] md:h-[400px] rounded-2xl shadow-lg shadow-blue-900/50 object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="h-screen px-10 md:px-20 py-20 bg-gray-900/50 backdrop-blur-sm w-full flex flex-col justify-center relative z-10"
      >
        <h3 className="text-4xl font-bold text-center mb-16">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FileText className="text-blue-400" size={32} />}
            title="Smart OCR"
            desc="Extract text from PDFs and images with high accuracy."
          />
          <FeatureCard
            icon={<Brain className="text-blue-400" size={32} />}
            title="AI Insights"
            desc="Summarize, search, and analyze large documents instantly."
          />
          <FeatureCard
            icon={<MessageSquare className="text-blue-400" size={32} />}
            title="Chat with Docs"
            desc="Ask questions and get answers directly from your files."
          />
          <FeatureCard
            icon={<Search className="text-blue-400" size={32} />}
            title="Smart Search"
            desc="Find documents quickly using filename, content, or tags."
          />
          <FeatureCard
            icon={<Tags className="text-blue-400" size={32} />}
            title="Auto-Tagging"
            desc="AI automatically generates tags from document content."
          />
          <FeatureCard
            icon={<Shield className="text-blue-400" size={32} />}
            title="Secure Storage"
            desc="Enterprise-grade encryption keeps your files safe."
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-20 w-full relative z-10"
      >
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h3 className="text-3xl font-bold mb-6">About DocuAI</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            DocuAI is an AI-powered{"  "}
            <span className="text-blue-400 font-semibold">
              document repository
            </span>
            {"  "}where you can securely upload and organize all your important
            files. Our intelligent system automatically{" "}
            <span className="text-blue-400 font-semibold">tags documents</span>
            {"  "}based on their content, making them easy to find. You can{" "}
            <span className="text-blue-400 font-semibold">
              search by filename, tags, or full text
            </span>
            , and even{" "}
            <span className="text-blue-400 font-semibold">
              chat with your documents
            </span>{" "}
            to extract insights instantly.
          </p>
        </div>

        {/* Right: Illustration / Mockup */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="/images/webMarkup.png"
            alt="AI Document Repository"
            className="w-[400px] rounded-xl shadow-lg shadow-blue-900/50"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen px-10 md:px-20 py-20 bg-gray-900/50 backdrop-blur-sm flex flex-col justify-center w-full relative z-10"
      >
        <h3 className="text-4xl font-bold text-center mb-10">Contact Us</h3>
        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950/90 backdrop-blur-sm text-gray-400 text-center p-6 border-t border-gray-800 w-full relative z-10">
        © {new Date().getFullYear()} DocuAI. All rights reserved. Made with ❤️
        by Shafiullah.
      </footer>
    </div>
  );
}

// Reusable Feature Card
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-blue-900/50 transition border border-gray-700/50">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
