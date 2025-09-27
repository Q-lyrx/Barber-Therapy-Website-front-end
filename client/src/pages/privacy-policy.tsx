import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Header */}
      <header className="bg-brand-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <h1 className="text-2xl font-bold text-brand-gold cursor-pointer">
                Barber Therapy
              </h1>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-brand-white/80">
              Your privacy is important to us at Barber Therapy
            </p>
          </div>

          <div className="bg-brand-black/50 rounded-lg p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">Introduction</h2>
              <p className="text-brand-white/90 leading-relaxed">
                At Barber Therapy, we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you 
                visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">Information We Collect</h2>
              <div className="space-y-4 text-brand-white/90">
                <div>
                  <h3 className="text-lg font-semibold text-brand-gold mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    When you book an appointment or contact us, we may collect:
                  </p>
                  <ul className="mt-2 ml-6 list-disc space-y-1">
                    <li>Name and contact information (phone number, email address)</li>
                    <li>Appointment preferences and service history</li>
                    <li>Payment information (processed securely through our payment providers)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-gold mb-2">Website Usage Information</h3>
                  <p className="leading-relaxed">
                    We may automatically collect information about your visit, including:
                  </p>
                  <ul className="mt-2 ml-6 list-disc space-y-1">
                    <li>Browser type and device information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>IP address and general location information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">How We Use Your Information</h2>
              <div className="text-brand-white/90">
                <p className="leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Schedule and manage your appointments</li>
                  <li>Communicate with you about your bookings and our services</li>
                  <li>Process payments securely</li>
                  <li>Improve our website and services</li>
                  <li>Send you promotional information (only with your consent)</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">Information Sharing</h2>
              <p className="text-brand-white/90 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except when necessary to provide our services (such as payment processing through Calendly 
                and other booking platforms) or when required by law.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">Data Security</h2>
              <p className="text-brand-white/90 leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">Third-Party Services</h2>
              <p className="text-brand-white/90 leading-relaxed">
                Our website uses Calendly for appointment booking. Please review Calendly's privacy 
                policy to understand how they handle your data. We are not responsible for the privacy 
                practices of third-party services.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">Your Rights</h2>
              <div className="text-brand-white/90">
                <p className="leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of promotional communications</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">Contact Us</h2>
              <p className="text-brand-white/90 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, 
                please contact us:
              </p>
              <div className="mt-4 space-y-2 text-brand-white/90">
                <p><strong>Phone:</strong> 647-746-7861</p>
                <p><strong>Address:</strong> 34 Denlow Drive, Brampton, ON L6Y2L4</p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">Policy Updates</h2>
              <p className="text-brand-white/90 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on 
                this page with an updated effective date. We encourage you to review this policy 
                periodically.
              </p>
              <p className="text-brand-white/70 mt-4 text-sm">
                <strong>Last Updated:</strong> September 27, 2025
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}