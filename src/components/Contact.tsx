import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-text-secondary text-lg">Get in touch for a free consultation about your server needs</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8 bg-section-bg p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-text-primary">
                Name
              </label>
              <Input 
                id="name" 
                required 
                placeholder="Your name"
                className="border-gray-200 focus:border-secondary focus:ring-secondary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="your@email.com"
                className="border-gray-200 focus:border-secondary focus:ring-secondary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-text-primary">
              Message
            </label>
            <Textarea
              id="message"
              required
              placeholder="Tell us about your server needs..."
              className="min-h-[150px] border-gray-200 focus:border-secondary focus:ring-secondary"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;