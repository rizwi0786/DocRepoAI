// src/pages/Auth/ResetPassword.jsx
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import AuthCard from "../../components/AuthCard";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const passwordChecks = [
    { regex: /.{8,}/, label: "At least 8 characters" },
    { regex: /[A-Z]/, label: "At least one uppercase letter" },
    { regex: /[a-z]/, label: "At least one lowercase letter" },
    { regex: /\d/, label: "At least one number" },
    { regex: /[@$!%*?&]/, label: "At least one special character" },
  ];

  const validatePassword = (password) =>
    passwordChecks.every((check) => check.regex.test(password));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setError("Password does not meet the requirements.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // 🔗 Call reset API
    console.log("Resetting password with token:", token, formData.password);
  };

  return (
    <AuthLayout>
      <AuthCard title="Reset Password">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          {/* ✅ Show checklist only after typing */}
          {formData.password && (
            <ul className="text-sm space-y-1">
              {passwordChecks.map((check, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 ${
                    check.regex.test(formData.password)
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {check.regex.test(formData.password) ? "✔" : "✘"}{" "}
                  {check.label}
                </li>
              ))}
            </ul>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
          >
            Reset Password
          </button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
