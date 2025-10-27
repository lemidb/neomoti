import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise AI Platform",
      description:
        "Built a comprehensive AI automation platform that reduced operational costs by 40% for a Fortune 500 client.",
      tags: ["AI/ML", "Cloud", "Python"],
      metrics: "40% cost reduction, 10k+ users",
    },
    {
      title: "E-Commerce Transformation",
      description:
        "Complete digital transformation of retail operations with custom mobile and web applications.",
      tags: ["React", "Node.js", "AWS"],
      metrics: "3x revenue increase, 250k+ customers",
    },
    {
      title: "HealthTech Platform",
      description:
        "Developed a HIPAA-compliant telemedicine platform connecting patients with healthcare providers.",
      tags: ["React Native", "Security", "PostgreSQL"],
      metrics: "50k+ consultations, 4.9/5 rating",
    },
    {
      title: "Financial Analytics Dashboard",
      description:
        "Real-time financial data processing and visualization platform for investment management.",
      tags: ["TypeScript", "D3.js", "Real-time"],
      metrics: "$2B+ assets tracked",
    },
    {
      title: "Smart IoT Solution",
      description:
        "Industrial IoT platform for predictive maintenance and operational efficiency optimization.",
      tags: ["IoT", "Edge Computing", "Analytics"],
      metrics: "85% downtime reduction",
    },
    {
      title: "EdTech Learning Platform",
      description:
        "Interactive learning management system with AI-powered personalized education paths.",
      tags: ["AI", "Education", "Scalable"],
      metrics: "100k+ active students",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results for real businesses. Here's a glimpse of the transformative solutions we've
            delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground">{project.metrics}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            These are just a few examples. Every project is unique and tailored to our clients' needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Discuss your project →
          </a>
        </div>
      </div>
    </section>
  );
};
