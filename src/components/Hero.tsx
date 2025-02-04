import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl space-y-8 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Expert Server Configuration & Hardware Selection
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
            We help hobbyists and enterprises build their perfect server setup. Get started with free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="default"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300"
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