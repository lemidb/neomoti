import { Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Team = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "15+ years in enterprise software. Former tech lead at Fortune 100 companies.",
      expertise: ["Strategy", "AI/ML", "Leadership"],
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Expert in scalable architectures. Built systems serving 10M+ users.",
      expertise: ["Cloud", "DevOps", "Security"],
    },
    {
      name: "Aisha Patel",
      role: "Head of Product",
      bio: "Product innovator with a track record of successful launches in tech startups.",
      expertise: ["UX", "Product Strategy", "Innovation"],
    },
    {
      name: "James Morrison",
      role: "Lead AI Engineer",
      bio: "PhD in Machine Learning. Published researcher in AI and automation.",
      expertise: ["AI/ML", "Data Science", "Research"],
    },
    {
      name: "Elena Volkov",
      role: "Head of Design",
      bio: "Award-winning designer creating intuitive experiences for global brands.",
      expertise: ["UI/UX", "Brand Design", "Accessibility"],
    },
    {
      name: "David Kim",
      role: "Senior Solutions Architect",
      bio: "Designs robust, future-proof systems for complex business challenges.",
      expertise: ["Architecture", "Integration", "Consulting"],
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A diverse group of passionate technologists, designers, and strategists committed to your
            success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/20 to-teal/20 flex items-center justify-center">
                <div className="text-4xl font-bold text-accent">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.expertise.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 pt-4 border-t border-border">
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
