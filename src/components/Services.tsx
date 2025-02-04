import { Server, Shield, Cpu } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Free Hardware Consultation",
      description: "Get expert advice on the best hardware configuration for your needs, completely free of charge.",
      icon: Cpu,
    },
    {
      title: "Server Configuration",
      description: "Professional server setup and configuration services at affordable rates.",
      icon: Server,
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade solutions with ongoing support and maintenance.",
      icon: Shield,
    },
  ];

  return (
    <div id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-section-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">{service.title}</CardTitle>
                <CardDescription className="text-text-secondary text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;