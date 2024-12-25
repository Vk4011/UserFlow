import { Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <Rocket className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to User Registration Portal
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A modern platform for managing user registrations efficiently. Register new users
            and view all registered users in an intuitive dashboard.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Register Now
            </a>
            <a
              href="/dashboard"
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              View Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}