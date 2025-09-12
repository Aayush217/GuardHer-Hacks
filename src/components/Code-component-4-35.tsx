import { useState } from "react";
import { Button } from "./ui/button";
import { Shield, Menu, X, Smartphone } from "lucide-react";

interface NavigationProps {
  onSignInClick: () => void;
}

export function Navigation({ onSignInClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">
              Guard<span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">Her</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#safety" className="text-slate-600 hover:text-slate-900 transition-colors">
              Safety
            </a>
            <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">
              Reviews
            </a>
            <a href="#download" className="text-slate-600 hover:text-slate-900 transition-colors">
              Download
            </a>
          </div>

          {/* Desktop Sign In Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={onSignInClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-slate-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#safety" 
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Safety
              </a>
              <a 
                href="#testimonials" 
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="#download" 
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <Button 
                onClick={() => {
                  onSignInClick();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-4"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}