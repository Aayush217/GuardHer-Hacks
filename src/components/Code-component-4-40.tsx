import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Shield, ArrowLeft, Smartphone, Lock, Eye, EyeOff } from "lucide-react";

interface MobileSignInProps {
  onBack: () => void;
}

export function MobileSignIn({ onBack }: MobileSignInProps) {
  const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    emergencyContact: ''
  });

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      setStep('profile');
    }
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final signup/signin
    alert('Account created successfully! Welcome to GuardHer.');
    onBack();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={onBack}
              className="border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-purple-600" />
              <span className="font-bold text-slate-900">
                Guard<span className="text-purple-600">Her</span>
              </span>
            </div>
            <div className="w-16"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'phone' ? 'bg-purple-600 text-white' : 
                step === 'otp' || step === 'profile' ? 'bg-green-500 text-white' : 
                'bg-slate-200 text-slate-600'
              }`}>
                <Smartphone className="w-4 h-4" />
              </div>
              <div className={`w-12 h-1 rounded-full ${
                step === 'otp' || step === 'profile' ? 'bg-green-500' : 'bg-slate-200'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'otp' ? 'bg-purple-600 text-white' : 
                step === 'profile' ? 'bg-green-500 text-white' : 
                'bg-slate-200 text-slate-600'
              }`}>
                <Lock className="w-4 h-4" />
              </div>
              <div className={`w-12 h-1 rounded-full ${
                step === 'profile' ? 'bg-green-500' : 'bg-slate-200'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'profile' ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                <Shield className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/50 p-8">
            {step === 'phone' && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Mobile Sign In</h2>
                  <p className="text-slate-600">Enter your mobile number to get started with GuardHer</p>
                </div>

                <form onSubmit={handlePhoneSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-slate-500">+91</span>
                      </div>
                      <Input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="9876543210"
                        className="pl-12 py-3 rounded-xl border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send OTP
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600">
                    By continuing, you agree to GuardHer's{' '}
                    <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                  </p>
                </div>
              </div>
            )}

            {step === 'otp' && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Verify OTP</h2>
                  <p className="text-slate-600">
                    We've sent a 6-digit code to +91 {phoneNumber}
                  </p>
                </div>

                <form onSubmit={handleOtpSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Enter OTP
                    </label>
                    <Input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="123456"
                      className="text-center text-2xl tracking-widest py-4 rounded-xl border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                      maxLength={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Verify OTP
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <button 
                    onClick={() => setStep('phone')}
                    className="text-sm text-purple-600 hover:underline"
                  >
                    Change phone number
                  </button>
                  <span className="text-slate-400 mx-2">•</span>
                  <button className="text-sm text-purple-600 hover:underline">
                    Resend OTP
                  </button>
                </div>
              </div>
            )}

            {step === 'profile' && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Complete Profile</h2>
                  <p className="text-slate-600">Set up your GuardHer safety profile</p>
                </div>

                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="py-3 rounded-xl border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="py-3 rounded-xl border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Create Password
                    </label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Create a secure password"
                        className="py-3 pr-12 rounded-xl border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Emergency Contact
                    </label>
                    <Input
                      type="tel"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                      placeholder="Emergency contact number"
                      className="py-3 rounded-xl border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Create Account
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Security Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm text-green-700 font-medium">
                Your data is encrypted and secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}