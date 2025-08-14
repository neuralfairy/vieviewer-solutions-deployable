import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  features?: string[];
  testimonial?: {
    text: string;
    author: string;
    company: string;
    rating: number;
  };
}

const HeroSection = ({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  features,
  testimonial,
}: HeroSectionProps) => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div className="mb-6 animate-fade-in">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                {badge}
              </Badge>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {title}
            <span className="block text-primary-glow bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elevated" asChild>
              <a href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            {secondaryCta && (
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 shadow-elevated" asChild>
                <a href={secondaryCta.href}>{secondaryCta.text}</a>
              </Button>
            )}
          </div>

          {/* Features List */}
          {features && (
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-primary-glow mr-2" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto animate-scale-in">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-white/90 mb-4 italic">
                "{testimonial.text}"
              </blockquote>
              <cite className="text-white font-medium">
                {testimonial.author}, {testimonial.company}
              </cite>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
