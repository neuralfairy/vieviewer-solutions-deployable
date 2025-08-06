import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    solutions: [
      { name: "PSA Suite", href: "https://salescentri.com/solutions/psa-suite" },
      { name: "Lead Generation", href: "https://salescentri.com/platforms/lead-management/lead-generation" },
      { name: "Voice AI Agent", href: "https://salescentri.com/platforms/lead-management/voice-ai-agent" },
      { name: "Use Case Navigator", href: "https://salescentri.com/solutions/use-case-navigator" },
    ],
    company: [
      { name: "About Us", href: "https://salescentri.com/company/about-us" },
      { name: "Careers", href: "https://salescentri.com/company/careers" },
      { name: "Partners", href: "https://salescentri.com/company/partners-affiliates" },
      { name: "Leadership", href: "https://salescentri.com/company/about-us/leadership-team" },
    ],
    resources: [
      { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
      { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
      { name: "API Docs", href: "https://salescentri.com/docs/api-reference" },
      { name: "User Guide", href: "https://salescentri.com/docs/user-guide" },
    ],
    support: [
      { name: "Contact Sales", href: "https://salescentri.com/contact/sales-inquiry" },
      { name: "Support Request", href: "https://salescentri.com/contact/support-request" },
      { name: "Live Chat", href: "https://salescentri.com/contact/support-request/live-chat" },
      { name: "Submit Ticket", href: "https://salescentri.com/contact/support-request/submit-ticket" },
    ],
  };

  return (
    <footer className="bg-gradient-surface border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">V</span>
              </div>
              <span className="font-bold text-xl text-foreground">Vieviewer</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Streamline and score your leads for more efficient sales follow-ups with our professional iLMS platform.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Buffalo, NY</p>
              <p>1-800-VIE-VIEW</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <a 
                href="https://salescentri.com/trust/security-privacy" 
                className="hover:text-primary transition-colors"
              >
                Security & Privacy
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 Vieviewer Solutions. All rights reserved.
            </div>
          </div>
          
          {/* Strategic Partner Link */}
          <div className="mt-4 pt-4 border-t text-center">
            <a 
              href="https://salescentri.com?utm_source=vieviewer.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;