import { useState } from "react";
import { Navigation } from "./components/navigation";
import { ModernHero } from "./components/modern-hero";
import { ModernFeatureCard } from "./components/modern-feature-card";
import { MobileSignIn } from "./components/mobile-sign-in";
import { Dashboard } from "./components/dashboard";
import { Phone, Users, MapPin, Shield, Download, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'signin' | 'dashboard'>('home');

  const handleSignInClick = () => {
    setCurrentView('signin');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleSignInSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleSignOut = () => {
    setCurrentView('home');
  };

  if (currentView === 'signin') {
    return <MobileSignIn onBack={handleBackToHome} onSignInSuccess={handleSignInSuccess} />;
  }

  if (currentView === 'dashboard') {
    return <Dashboard onSignOut={handleSignOut} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation onSignInClick={handleSignInClick} />
      {/* Hero Section */}
      <ModernHero />

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Revolutionary Safety Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Every Feature Designed for
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                Your Complete Safety
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Powered by cutting-edge technology and community-driven innovation, 
              GuardHer provides multiple layers of protection that work together seamlessly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-24">
            {/* Smart IVR Feature */}
            <ModernFeatureCard
              title="Smart IVR & Digital Pukaar"
              subtitle="Voice-Activated Emergency Response"
              description="Our revolutionary IVR system acts as your digital guardian, providing multiple layers of protection through voice commands, location triangulation, and intelligent call features that work even in the most challenging situations."
              features={[
                "Location via Missed Call Triangulation: Automatic location detection through cell tower triangulation, even without GPS connectivity",
                "Voice-Activated Distress Commands: Simply say 'Help' or 'Bachao' to trigger the highest alert level without pressing any buttons",
                "Pretend-a-Call Feature: Receive fake authoritative calls that act as powerful deterrents in suspicious situations"
              ]}
              icon={Phone}
              imageUrl="https://images.unsplash.com/photo-1755372740351-8d7d0fcd582c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzY5OTg2OHww&ixlib=rb-4.1.0&q=80&w=1080"
              imageAlt="Smart phone emergency interface"
              accentColor="blue"
            />

            {/* Community Mesh Network */}
            <ModernFeatureCard
              title="Community Mesh SOS Network"
              subtitle="The Rakshak Ring - Offline First Safety"
              description="Revolutionary peer-to-peer mesh network that creates a human-powered safety net, ensuring your SOS reaches help even in the most disconnected environments like basements, tunnels, or remote areas."
              features={[
                "Bluetooth Low Energy (BLE) mesh network connecting nearby GuardHer users within 100-meter range",
                "Encrypted distress signals relay from phone to phone until reaching internet connectivity",
                "Works in basements, tunnels, rural areas - anywhere traditional networks fail completely",
                "Creates an invisible safety web of community protection that grows stronger with every user"
              ]}
              icon={Users}
              imageUrl="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3Njk5ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              imageAlt="Network connectivity technology"
              accentColor="green"
              reverse={true}
            />

            {/* SafePaths */}
            <ModernFeatureCard
              title="Crowdsourced Safety Heatmaps"
              subtitle="SafePaths - Navigate the Safest Route"
              description="Go beyond fastest routes with our intelligent navigation system that uses real-time, crowdsourced data to guide you through the safest, best-lit paths to your destination, adapting to real-world conditions."
              features={[
                "Real-time safety heatmaps based on crowdsourced data from thousands of active users",
                "Community-tagged safety zones including verified shops, police booths, and designated safe areas",
                "Dynamic route optimization avoiding poorly lit areas and recently flagged unsafe zones",
                "Time-of-day aware routing that adapts to changing safety conditions throughout different hours"
              ]}
              icon={MapPin}
              imageUrl="https://images.unsplash.com/photo-1583409065388-a1b9f93e703d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmF2aWdhdGlvbiUyMG1hcHxlbnwxfHx8fDE3NTc2OTk4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              imageAlt="City navigation map interface"
              accentColor="purple"
            />

            {/* Digital Evidence Locker */}
            <ModernFeatureCard
              title="Digital Evidence Locker"
              subtitle="Secure Evidence Collection"
              description="When every second counts, our automatic evidence collection system captures crucial proof and stores it securely in the cloud, ensuring justice even if your device is compromised or destroyed."
              features={[
                "Automatic audio recording activation when SOS is triggered for comprehensive incident documentation",
                "Burst photo capture from front and back cameras for complete visual evidence collection",
                "Precise GPS coordinates, cell tower ID, and timestamp logging for accurate incident tracking",
                "Instant encrypted cloud upload ensures evidence survives even if phone is destroyed or confiscated"
              ]}
              icon={Shield}
              imageUrl="https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHN0b3JhZ2UlMjBzZWN1cml0eXxlbnwxfHx8fDE3NTc2OTk4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              imageAlt="Cloud storage security system"
              accentColor="red"
              reverse={true}
            />
          </div>
        </div>
      </section>


      {/* Testimonial Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Trusted by Users Worldwide
            </h2>
            <p className="text-xl text-slate-600">
              Real stories from people who trust GuardHer for their safety
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "The mesh network feature saved me when I was in a basement parking garage with no signal. 
                My SOS reached help through other users' phones. Incredible technology!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Ananya Sharma</p>
                  <p className="text-slate-600 text-sm">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "SafePaths changed how I navigate the city. I feel so much safer knowing 
                I'm always taking the most secure route home, especially during late hours."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  P
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Priya Patel</p>
                  <p className="text-slate-600 text-sm">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "The voice commands are a game-changer. Being able to just say 'Help' 
                without fumbling with my phone gives me incredible peace of mind."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  R
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Rhea Singh</p>
                  <p className="text-slate-600 text-sm">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Your Safety Journey
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                Starts Today
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who trust GuardHer for their personal safety. 
              Download the app and experience the future of personal protection.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-white/80">Verified by the Government</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-white/80">No Hidden Costs</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-white/80">Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="p-2 bg-white rounded-lg mr-3">
                <img src="./src/images/Logo.png" alt="Shield Icon" className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Guard<span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Her</span>
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-2">
                © 2025 GuardHer. Redefining personal safety for everyone.
              </p>
              <p className="text-slate-500 text-sm">
                Your safety is our mission. Privacy is our promise.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}