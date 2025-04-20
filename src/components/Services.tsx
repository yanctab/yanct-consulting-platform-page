
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Remote-First Support",
      description: "Ideal for small to mid-sized companies, offering flexible, ongoing support with expert-level embedded Linux and Yocto expertise."
    },
    {
      title: "Full-Time Engagement",
      description: "Full-time, on-site or hybrid consulting, providing hands-on support for day-to-day development and real-time issue resolution."
    },
    {
      title: "Platform Review & Roadmap",
      description: "Tailored review of your platform and processes, with a clear roadmap for improvements and implementation options."
    }
  ];

  return (
    <section id="services" className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Briefcase className="h-8 w-8 text-emerald-600" />
          <h2 className="text-4xl font-bold text-gray-900">Service Packages</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-emerald-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
