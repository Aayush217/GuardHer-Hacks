import { Button } from "./ui/button";
import { Shield, Phone, Users, MapPin, Download, Play } from "lucide-react";

export function ModernHero() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg mr-3">
                <img src="./src/images/Logo.png" alt="Shield Icon" className="w-8 h-8 text-white" />
              </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
                  Guard<span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">Her</span>
                </h1>
              </div>
              
              <h2 className="text-2xl lg:text-3xl text-slate-700 leading-relaxed">
                Redefining Personal Safety with Revolutionary Technology
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Experience the future of personal protection with our multi-layered safety ecosystem. 
                From intelligent navigation to offline emergency networks, GuardHer ensures your safety 
                with cutting-edge technology that works anywhere, anytime.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 hover:shadow-lg transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="text-sm font-medium text-slate-700">Smart IVR</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 hover:shadow-lg transition-all duration-300">
                  <Users className="w-6 h-6 text-green-600 mb-2" />
                  <p className="text-sm font-medium text-slate-700">Mesh Network</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 hover:shadow-lg transition-all duration-300">
                  <MapPin className="w-6 h-6 text-purple-600 mb-2" />
                  <p className="text-sm font-medium text-slate-700">Safe Paths</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 hover:shadow-lg transition-all duration-300">
                  <Shield className="w-6 h-6 text-red-600 mb-2" />
                  <p className="text-sm font-medium text-slate-700">Evidence Locker</p>
                </div>
              </div>

            </div>

            {/* Right Content - App Mockup */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-black rounded-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-white/60 text-sm">GuardHer App</div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-white text-lg font-semibold text-center mb-2">Safety Active</h3>
                        <p className="text-white/60 text-sm text-center">All systems monitoring</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <Phone className="w-6 h-6 text-blue-400 mb-2" />
                          <p className="text-white/80 text-sm font-medium">Smart IVR</p>
                          <p className="text-white/60 text-xs">Ready</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <Users className="w-6 h-6 text-green-400 mb-2" />
                          <p className="text-white/80 text-sm font-medium">Mesh Network</p>
                          <p className="text-white/60 text-xs">Connected</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}