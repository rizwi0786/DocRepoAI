// src/components/AuthCard.jsx
export default function AuthCard({ title, children }) {
  return (
    <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-lg hover:shadow-blue-900/50 transition">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      {children}
    </div>
  );
}
