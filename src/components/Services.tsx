import { Brain, Code, Rocket, Lightbulb, Headphones, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Automation Solutions",
      description:
        "Boost efficiency and streamline operations with custom automation and AI-based systems that learn and adapt to your business needs.",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Web, mobile, and cloud solutions tailored to your unique requirements. Built with modern technologies and best practices.",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "Upgrade legacy processes, migrate to digital-first workflows, and scale your business for tomorrow's challenges.",
    },
    {
      icon: Lightbulb,
      title: "Technology Consulting",
      description:
        "Strategic guidance, architecture design, and hands-on support for ambitious organizations looking to innovate.",
    },
    {
      icon: Rocket,
      title: "Product Innovation Studio",
      description:
        "Design, build, and launch new products that solve real-market problems with cutting-edge technology and user-centric design.",
    },
    {
      icon: Headphones,
      title: "Support & Training",
      description:
        "Ensure technical onboarding and sustained performance with expert support, documentation, and training programs.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive technology solutions designed to empower your business and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Need something custom? We'd love to discuss your unique requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Let's talk about your project →
          </a>
        </div>
      </div>
    </section>
  );
};
