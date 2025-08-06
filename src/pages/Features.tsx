import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Smartphone,
  Shield,
  Globe,
  MessageSquare,
  Brain,
  TrendingUp,
  Clock,
  Filter,
  Webhook,
  Database
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Target,
      title: "AI-Powered Lead Scoring",
      description: "Advanced machine learning algorithms analyze 50+ data points to score leads automatically.",
      details: ["Predictive lead scoring", "Custom scoring models", "Real-time score updates", "Lead quality insights"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive dashboards and reports to track performance and optimize your sales process.",
      details: ["Custom dashboards", "Real-time analytics", "Sales forecasting", "Performance metrics"]
    },
    {
      icon: Users,
      title: "Team Collaboration Tools",
      description: "Built-in collaboration features to keep your sales team aligned and productive.",
      details: ["Team assignments", "Activity tracking", "Communication logs", "Shared pipelines"]
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and create custom workflows to streamline your sales process.",
      details: ["Custom triggers", "Multi-step workflows", "Email automation", "Task automation"]
    },
    {
      icon: Filter,
      title: "Advanced Lead Filtering",
      description: "Sophisticated filtering and segmentation tools to organize and prioritize your leads.",
      details: ["Custom filters", "Smart segments", "Bulk actions", "Saved searches"]
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Leverage AI to predict deal outcomes and identify the best opportunities.",
      details: ["Deal probability", "Revenue forecasting", "Churn prediction", "Opportunity scoring"]
    }
  ];

  const platformFeatures = [
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Native mobile apps for iOS and Android with full feature parity.",
      category: "Platform"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with advanced security and data protection.",
      category: "Security"
    },
    {
      icon: Globe,
      title: "API & Integrations",
      description: "Connect with 150+ tools via APIs and pre-built integrations.",
      category: "Integrations"
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Communication",
      description: "Engage leads across email, SMS, social media, and voice.",
      category: "Communication"
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description: "Automatically enrich lead profiles with company and contact data.",
      category: "Data"
    },
    {
      icon: Webhook,
      title: "Real-Time Sync",
      description: "Keep all your tools in sync with real-time data synchronization.",
      category: "Integration"
    }
  ];

  const interactiveDemo = {
    title: "See iLMS in Action",
    description: "Experience our interactive demo to see how iLMS can transform your lead management process.",
    features: [
      "Lead scoring in real-time",
      "Pipeline management",
      "Analytics dashboard",
      "Automation workflows"
    ]
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        badge="🎯 Comprehensive Feature Set"
        title="Powerful Features for"
        subtitle="Sales Excellence"
        description="Explore the complete suite of tools designed to streamline your lead management and accelerate sales growth."
        primaryCta={{
          text: "Try Interactive Demo",
          href: "https://salescentri.com/solutions/use-case-navigator/demo"
        }}
        secondaryCta={{
          text: "Start Free Trial",
          href: "https://salescentri.com/get-started/free-trial"
        }}
        features={["All Features Included", "No Setup Fees", "24/7 Support"]}
      />

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Capabilities</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Advanced Lead Management Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools designed to help you capture, score, nurture, and convert leads more effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-elevated hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elevated border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge variant="outline" className="mb-4">Interactive Experience</Badge>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {interactiveDemo.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {interactiveDemo.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {interactiveDemo.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button size="lg" asChild>
                      <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                        Launch Interactive Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                    <div className="bg-white/20 rounded-lg p-6 mb-4">
                      <BarChart3 className="h-16 w-16 text-white mx-auto mb-4" />
                      <div className="text-white">
                        <div className="text-2xl font-bold">Live Demo</div>
                        <div className="text-white/80">Experience the Platform</div>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm">
                      No registration required • Takes 5 minutes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Platform & Infrastructure</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Enterprise-Grade Platform
            </h2>
            <p className="text-xl text-muted-foreground">
              Built for scale, security, and seamless integration with your existing tech stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-elevated hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.category}
                      </Badge>
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

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Vieviewer iLMS?
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we compare to other lead management solutions
            </p>
          </div>

          <Card className="shadow-elevated">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 text-foreground font-semibold">Vieviewer iLMS</th>
                      <th className="text-center py-4 px-4 text-muted-foreground">Basic CRM</th>
                      <th className="text-center py-4 px-4 text-muted-foreground">Enterprise CRM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AI Lead Scoring", true, false, true],
                      ["Predictive Analytics", true, false, true],
                      ["Workflow Automation", true, true, true],
                      ["Mobile Apps", true, false, true],
                      ["API Access", true, false, true],
                      ["24/7 Support", true, false, true],
                      ["Custom Integrations", true, false, true],
                      ["Data Enrichment", true, false, false],
                    ].map(([feature, vieviewer, basic, enterprise], index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4 px-4 text-foreground">{feature}</td>
                        <td className="py-4 px-4 text-center">
                          {vieviewer ? (
                            <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {basic ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {enterprise ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your free trial and see how iLMS can transform your lead management process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;