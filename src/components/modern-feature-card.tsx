import { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ModernFeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  imageUrl: string;
  imageAlt: string;
  accentColor: string;
  reverse?: boolean;
}

export function ModernFeatureCard({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  imageUrl,
  imageAlt,
  accentColor,
  reverse = false
}: ModernFeatureCardProps) {
  const colorMap = {
    blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
    green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
    purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
    red: "from-red-500 to-red-600 bg-red-50 text-red-600 border-red-200"
  };

  const colors = colorMap[accentColor as keyof typeof colorMap] || colorMap.blue;
  const [gradientColors, bgColor, textColor, borderColor] = colors.split(' ');

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-500">
      <div className={`grid lg:grid-cols-2 gap-0 ${reverse ? 'lg:grid-cols-2' : ''}`}>
        {/* Image Section */}
        <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
          <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
            <ImageWithFallback
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-10`}></div>
            
            {/* Floating Icon */}
            <div className="absolute top-8 left-8">
              <div className={`p-4 bg-white rounded-2xl shadow-lg border ${borderColor}`}>
                <Icon className={`w-8 h-8 ${textColor}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-8 lg:p-12 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${bgColor} ${textColor}`}>
            <Icon className="w-4 h-4 mr-2" />
            {subtitle}
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h3>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradientColors} mt-2 mr-4 flex-shrink-0`}></div>
                <p className="text-slate-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}