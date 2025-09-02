// src/pages/Auth/ForgotPassword.jsx
import { useState } from "react";
import AuthLayout from "../../layout/AuthLayout";
import AuthCard from "../../components/AuthCard";
import { toast } from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Reset link has been sent to your email.");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard title="Forgot Password">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                Sending...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>

          <p className="text-center text-sm text-gray-400">
            Remembered your password?{" "}
            <a href="/auth/login" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
