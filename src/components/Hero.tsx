import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Expert Server Configuration & Hardware Selection
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            We help hobbyists and enterprises build their perfect server setup. Get started with free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;