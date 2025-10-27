import { Target, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We empower organizations to reshape their business landscape with modern technology solutions.",
    },
    {
      icon: Users,
      title: "Partnership First",
      description: "Your success is our success. We build lasting relationships based on trust and transparency.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we deliver, from code to customer service.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">NeoMoti</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded on the principles of innovation and excellence, NeoMoti is more than a tech solutions
            provider—we're your strategic partner in digital transformation. Our team of experienced
            professionals brings together decades of expertise in AI, software development, and business
            strategy to deliver solutions that not only meet today's needs but anticipate tomorrow's
            challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Story</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              NeoMoti was born from a simple yet powerful vision: to bridge the gap between cutting-edge
              technology and real-world business needs. What started as a small team of passionate
              technologists has grown into a full-service product studio trusted by organizations across
              industries.
            </p>
            <p>
              Today, we stand at the forefront of digital innovation, helping businesses leverage AI,
              automation, and custom software solutions to stay competitive in an ever-evolving landscape.
              Our commitment to excellence, combined with our deep technical expertise, enables us to
              transform ambitious visions into tangible digital realities.
            </p>
            <p className="font-medium text-foreground">
              We don't just build technology—we build partnerships that drive lasting success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
