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

// import CustomCursor from "../components/CustomCursor";

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
    <div className=" landing-page bg-gray-950 text-white flex flex-col">
      {/* <CustomCursor />  */}
      {/* Navbar */}
      <header className="w-full px-8 py-6 flex justify-between items-center border-b border-gray-800 fixed top-0 left-0 z-50 bg-gray-950">
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
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20 pt-20 w-full">
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
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              Try Now <ArrowRight size={18} />
            </button>
            <button className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <video
            src="/images/DOC_AI2.mp4"
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
        className="h-screen px-10 md:px-20 py-20 bg-gray-900 w-full flex flex-col justify-center"
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
        className="h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-20 w-full"
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
        className="h-screen px-10 md:px-20 py-20 bg-gray-900 flex flex-col justify-center w-full"
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
      <footer className="bg-gray-950 text-gray-400 text-center p-6 border-t border-gray-800 w-full">
        © {new Date().getFullYear()} DocuAI. All rights reserved. Made with ❤️
        by Shafiullah.
      </footer>
    </div>
  );
}

// Reusable Feature Card
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-blue-900/50 transition">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
