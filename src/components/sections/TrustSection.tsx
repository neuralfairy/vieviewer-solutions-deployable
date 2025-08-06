import { Shield, Award, Users, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TrustSection = () => {
  const certifications = [
    { name: "SOC 2 Type II", icon: Shield },
    { name: "GDPR Compliant", icon: CheckCircle },
    { name: "ISO 27001", icon: Award },
    { name: "CCPA Ready", icon: Shield },
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "500M+", label: "Leads Processed" },
    { number: "150+", label: "Integrations" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Trusted by Industry Leaders</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your data security is our top priority. We maintain the highest standards of compliance and security.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{cert.name}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-elevated">
          <h3 className="text-2xl font-bold text-center mb-8">Security Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "256-bit SSL Encryption",
              "Advanced Threat Protection",
              "Regular Security Audits",
              "Data Backup & Recovery",
              "Access Control & Monitoring",
              "Compliance Reporting",
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;