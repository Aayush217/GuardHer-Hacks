import { Button } from "./ui/button";
import { Shield, Phone, Users, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1605962571272-40a441b7354b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdhbGtpbmclMjBzYWZlJTIwY2l0eSUyMG5pZ2h0fGVufDF8fHx8MTc1NzY5OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Woman walking safely in city"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/40"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-16 h-16 text-white mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Guard<span className="text-pink-300">Her</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Redefining personal safety with a multi-layered ecosystem designed for every situation
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            From intelligent navigation through the safest routes to revolutionary offline SOS capabilities, 
            GuardHer ensures your safety with cutting-edge technology that works anywhere, anytime.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Phone className="w-5 h-5 text-pink-300 mr-2" />
              <span className="text-white">Smart IVR</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Users className="w-5 h-5 text-blue-300 mr-2" />
              <span className="text-white">Mesh Network</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="w-5 h-5 text-green-300 mr-2" />
              <span className="text-white">Safe Paths</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 rounded-2xl border-0 shadow-2xl">
              Get Started Today
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 rounded-2xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}