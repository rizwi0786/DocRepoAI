import AuthLayout from "../../layout/AuthLayout";
import AuthCard from "../../components/AuthCard";

export default function Login() {
  return (
    <AuthLayout>
      <AuthCard title="Login">
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          {/* Forgot password link */}
          <div className="flex justify-end">
            <a
              href="/auth/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold">
            Login
          </button>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <a href="/auth/signup" className="text-blue-400 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
