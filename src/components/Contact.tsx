import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-text-secondary text-lg">Get in touch for a free consultation about your server needs</p>
        </div>
        <div className="space-y-8 bg-section-bg p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Mail className="w-6 h-6 text-secondary" />
            <a href="mailto:contact@server-sculptors.com" className="hover:text-secondary transition-colors">
              contact@server-sculptors.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Phone className="w-6 h-6 text-secondary" />
            <a href="tel:+1234567890" className="hover:text-secondary transition-colors">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;