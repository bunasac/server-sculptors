import { Server, Shield, Cpu } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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
    <div id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-section-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                <CardDescription className="text-text-secondary">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;