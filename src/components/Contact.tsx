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
    <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name
              </label>
              <Input id="name" required placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <Input id="email" type="email" required placeholder="your@email.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
              Message
            </label>
            <Textarea
              id="message"
              required
              placeholder="Tell us about your server needs..."
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white py-6">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;