// src/layouts/AuthLayout.jsx
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Enhanced Gradient Orbs with stronger visibility */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-blue-400/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/25 via-blue-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-blue-400/15 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          ></div>
        </div>
        
        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
              `,
              animation: 'waveMove 15s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        {/* Moving Data Streams */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" style={{animation: 'slideRight 8s linear infinite'}}></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" style={{animation: 'slideRight 10s linear infinite', animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" style={{animation: 'slideRight 12s linear infinite', animationDelay: '4s'}}></div>
        
        {/* Floating Neural Network Nodes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400/60 rounded-full animate-ping" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400/50 rounded-full animate-ping" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-cyan-400/40 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-48 right-48 w-2 h-2 bg-blue-300/60 rounded-full animate-ping" style={{animationDelay: '3s', animationDuration: '3.5s'}}></div>
        <div className="absolute top-60 left-1/2 w-3 h-3 bg-purple-300/50 rounded-full animate-ping" style={{animationDelay: '4s', animationDuration: '4.5s'}}></div>
        
        {/* Scanning Lines */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent w-2 opacity-60"
          style={{animation: 'scanHorizontal 6s linear infinite'}}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/15 to-transparent h-2 opacity-50"
          style={{animation: 'scanVertical 8s linear infinite', animationDelay: '3s'}}
        ></div>
      </div>

      {/* Add custom keyframe animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes waveMove {
          0%, 100% { transform: translateY(0) scale(1); }
          33% { transform: translateY(-10px) scale(1.05); }
          66% { transform: translateY(10px) scale(0.95); }
        }
        
        @keyframes slideRight {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes scanHorizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes scanVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>

      {/* Navbar */}
      <header className="w-full px-6 md:px-8 py-4 flex justify-between items-center border-b border-gray-800 bg-gray-950/95 backdrop-blur-sm relative z-10">
        <h1 className="text-2xl font-bold text-blue-400">DocuAI</h1>
        <a href="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
          Back to Home
        </a>
      </header>

      {/* Main content - Improved spacing and layout */}
      <main className="flex-1 flex items-center justify-center px-6 py-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left - Info Section */}
            <div className="space-y-8 lg:pr-8 relative">
              {/* Subtle glow behind content */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent rounded-3xl blur-xl"></div>
              
              <div className="relative">
                {/* Hero Text */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                    Welcome to <span className="text-blue-400 relative">
                      DocuAI
                      <div className="absolute -inset-1 bg-blue-400/20 blur-lg rounded-lg opacity-75 animate-pulse"></div>
                    </span>
                  </h2>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                    A smarter way to manage and interact with your documents.  
                    Create your account and unlock powerful AI features.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">
                    What you'll get:
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300"></div>
                      <span className="text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        Securely store and organize all your files in one place
                      </span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300"></div>
                      <span className="text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        Search documents instantly with AI-powered smart search
                      </span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300"></div>
                      <span className="text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        Chat with your files to extract quick insights
                      </span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300"></div>
                      <span className="text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        Enterprise-grade security for peace of mind
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2 group">
                      <span className="w-3 h-3 bg-green-500 rounded-full group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300"></span>
                      <span className="group-hover:text-gray-300 transition-colors duration-300">Secure & Private</span>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <span className="w-3 h-3 bg-blue-500 rounded-full group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"></span>
                      <span className="group-hover:text-gray-300 transition-colors duration-300">AI-Powered</span>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <span className="w-3 h-3 bg-purple-500 rounded-full group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"></span>
                      <span className="group-hover:text-gray-300 transition-colors duration-300">Fast & Reliable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Auth Card */}
            <div className="flex justify-center lg:justify-end relative">
              {/* Glow effect behind auth card */}
              <div className="absolute inset-0 bg-gradient-to-l from-purple-500/10 via-blue-500/5 to-transparent rounded-3xl blur-2xl"></div>
              
              <div className="w-full max-w-md lg:max-w-lg relative z-10">
                {children}
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}