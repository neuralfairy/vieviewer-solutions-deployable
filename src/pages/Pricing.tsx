import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Zap, Shield, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small sales teams getting started with lead management.",
      popular: false,
      icon: Zap,
      features: [
        "Up to 1,000 leads/month",
        "Basic lead scoring",
        "Email integration", 
        "Standard reporting",
        "Mobile app access",
        "Email support",
        "2 team members",
        "Basic automation"
      ],
      cta: {
        text: "Start Free Trial",
        href: "https://salescentri.com/get-started/free-trial"
      }
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Advanced features for growing sales teams that need more power.",
      popular: true,
      icon: Users,
      features: [
        "Up to 10,000 leads/month",
        "Advanced AI lead scoring",
        "Multi-channel integration",
        "Advanced analytics & reporting",
        "Mobile app + API access",
        "Priority support",
        "10 team members",
        "Advanced automation",
        "Custom fields",
        "Data enrichment",
        "Pipeline management",
        "Team collaboration tools"
      ],
      cta: {
        text: "Start Free Trial",
        href: "https://salescentri.com/get-started/free-trial"
      }
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex needs.",
      popular: false,
      icon: Shield,
      features: [
        "Unlimited leads",
        "Custom AI models",
        "Enterprise integrations",
        "White-label options",
        "Dedicated infrastructure",
        "24/7 dedicated support",
        "Unlimited team members",
        "Custom automation",
        "Advanced security",
        "SLA guarantees",
        "Custom onboarding",
        "Training & consulting"
      ],
      cta: {
        text: "Contact Sales",
        href: "https://salescentri.com/contact/sales-inquiry"
      }
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "The 30-day free trial includes full access to all Professional plan features with no limitations. No credit card required to start."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
    },
    {
      question: "Do you offer custom pricing for large teams?",
      answer: "Yes, we offer custom Enterprise pricing for organizations with 50+ users or specific compliance requirements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, ACH transfers, and can arrange annual invoicing for Enterprise customers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We include free onboarding and training to help you get started quickly."
    },
    {
      question: "What if I need more leads than my plan allows?",
      answer: "You can easily upgrade to a higher plan or add lead capacity to your existing plan. We'll notify you before any overage charges."
    }
  ];

  const addOns = [
    {
      name: "Additional Lead Capacity",
      price: "$0.05 per lead",
      description: "Add more leads to your existing plan"
    },
    {
      name: "Premium Support",
      price: "$299/month",
      description: "Dedicated success manager and priority support"
    },
    {
      name: "Custom Integrations",
      price: "Starting at $499",
      description: "Custom API integrations with your existing tools"
    },
    {
      name: "Advanced Training",
      price: "$199 per session",
      description: "1-on-1 training sessions for your team"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        badge="💰 Transparent Pricing"
        title="Choose the Perfect"
        subtitle="Plan for Your Team"
        description="Start with our free trial and scale as you grow. All plans include core features with no hidden fees."
        primaryCta={{
          text: "Start Free Trial",
          href: "https://salescentri.com/get-started/free-trial"
        }}
        secondaryCta={{
          text: "View Plans Overview",
          href: "https://salescentri.com/pricing/plans-overview"
        }}
        features={["30-Day Free Trial", "No Setup Fees", "Cancel Anytime"]}
      />

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Pricing Plans</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your team size and requirements. All plans include our core lead management features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative border-0 shadow-elevated hover:shadow-glow transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-primary' : ''}`} 
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <a href={plan.cta.href}>
                        {plan.cta.text}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enterprise Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom solution for your organization?
            </p>
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/pricing/enterprise-custom">
                Explore Enterprise Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Optional Add-ons</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Enhance Your Plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Add extra features and services to customize your iLMS experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-0 shadow-elevated">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">{addon.price}</div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elevated border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Calculate Your ROI
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    See how much revenue you could generate with better lead management
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Average Customer Results</h3>
                    <div className="space-y-4">
                      {[
                        "40% increase in qualified leads",
                        "25% faster deal closure", 
                        "60% improvement in sales efficiency",
                        "3x ROI within 6 months"
                      ].map((result, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span className="text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground mb-6">
                      <div className="text-4xl font-bold mb-2">$150K+</div>
                      <div className="text-lg">Average Annual Revenue Increase</div>
                    </div>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://salescentri.com/contact/sales-inquiry/request-quote">
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Frequently Asked Questions</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Pricing Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-elevated border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions about pricing?
            </p>
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/contact/sales-inquiry">
                Contact Our Sales Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their sales process with iLMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start 30-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Schedule a Demo
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

export default Pricing;