import { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  imageUrl: string;
  imageAlt: string;
  gradientFrom: string;
  gradientTo: string;
  reverse?: boolean;
}

export function FeatureCard({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  imageUrl,
  imageAlt,
  gradientFrom,
  gradientTo,
  reverse = false
}: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-32`}>
      {/* Image Section */}
      <div className="lg:w-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-2 shadow-2xl">
            <ImageWithFallback
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} mb-6 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h3>
          
          <h4 className="text-xl text-white/80 mb-6">
            {subtitle}
          </h4>
          
          <p className="text-white/70 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-white/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}