import { Code, Smartphone, Globe, Palette } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies to help your business stand out online.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps designed to engage your customers on any device.",
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Full-stack web applications with robust functionality and seamless user experiences.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that prioritize user experience and drive conversions.",
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <section className="py-12 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-[rgb(39,89,83)] mb-4 sm:mb-6 drop-shadow-lg">Our Services</h1>
            <p className="text-lg sm:text-xl text-[rgb(39,89,83)] max-w-3xl mx-auto px-4 drop-shadow">
              We specialize in building digital solutions that help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 hover:bg-white transition-colors shadow-lg"
              >
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[rgb(39,89,83)] mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl text-[rgb(39,89,83)] mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
