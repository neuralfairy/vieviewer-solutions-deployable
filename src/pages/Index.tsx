import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/ui/hero-section";
import TrustSection from "@/components/sections/TrustSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  ArrowRight, 
  Star,
  CheckCircle,
  Smartphone,
  Shield,
  Clock
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Lead Scoring Engine",
      description: "AI-powered lead scoring that identifies your highest-value prospects automatically.",
    },
    {
      icon: BarChart3,
      title: "Sales Pipeline Analytics",
      description: "Real-time insights into your sales funnel with predictive analytics and forecasting.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that keep your entire sales team aligned and productive.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline repetitive tasks with intelligent automation and custom workflows.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your leads and manage your pipeline from anywhere with our mobile app.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and advanced data protection.",
    },
  ];

  const testimonials = [
    {
      text: "Vieviewer's iLMS transformed our sales process. We've seen a 40% increase in qualified leads and faster deal closure.",
      author: "Sarah Chen",
      company: "TechFlow Solutions",
      rating: 5,
    },
    {
      text: "The lead scoring accuracy is incredible. We're now focusing on the right prospects and seeing better conversion rates.",
      author: "Michael Rodriguez",
      company: "Growth Dynamics",
      rating: 5,
    },
    {
      text: "Implementation was seamless and the ROI was immediate. Our sales team loves the intuitive interface.",
      author: "Emily Johnson",
      company: "Scale Ventures",
      rating: 5,
    },
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Monday.com", 
    "Slack", "Microsoft Teams", "Zapier", "Google Workspace"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        badge="🚀 Buffalo's #1 Lead Management Platform"
        title="Streamline Your"
        subtitle="Lead Management"
        description="Transform your sales process with iLMS - the intelligent lead management system that scores, prioritizes, and nurtures your prospects for maximum conversion."
        primaryCta={{
          text: "Start Free Trial",
          href: "https://salescentri.com/get-started/free-trial"
        }}
        secondaryCta={{
          text: "Book Demo",
          href: "https://salescentri.com/get-started/book-demo"
        }}
        features={["30-Day Free Trial", "No Credit Card Required", "Setup in 5 Minutes"]}
        testimonial={{
          text: "Increased our sales efficiency by 60% in just 3 months. Game-changing platform!",
          author: "David Thompson",
          company: "Buffalo Tech Group",
          rating: 5
        }}
      />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Features</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Everything You Need to Close More Deals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive iLMS platform provides all the tools your sales team needs to identify, qualify, and convert leads efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-elevated hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Calculate Your ROI with iLMS
              </h2>
              <p className="text-xl text-muted-foreground">
                See how much revenue you could generate with better lead management
              </p>
            </div>

            <Card className="shadow-elevated">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Average Customer Results
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-foreground">40% increase in qualified leads</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-foreground">25% faster deal closure</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-foreground">60% improvement in sales efficiency</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-foreground">3x ROI within 6 months</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                      <div className="text-5xl font-bold mb-2">$150K+</div>
                      <div className="text-lg">Average Annual Revenue Increase</div>
                    </div>
                    <Button size="lg" className="mt-6 w-full" asChild>
                      <a href="https://salescentri.com/get-started/calendly">
                        Get Custom ROI Analysis
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Customer Success</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers are saying about their iLMS experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-elevated">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-foreground font-medium">
                    {testimonial.author}, {testimonial.company}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Seamless Integrations
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with your existing tools and workflows
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-card rounded-lg px-6 py-3 shadow-sm border"
              >
                <span className="text-sm font-medium text-foreground">{integration}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/solutions/psa-suite/integrations">
                View All Integrations
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have revolutionized their lead management with iLMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start 30-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/contact/sales-inquiry">
                Talk to Sales
              </a>
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            No credit card required • Setup in minutes • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
