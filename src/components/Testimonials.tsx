import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "NeoMoti transformed our entire operation. Their AI automation solution cut our processing time by 60% and the team was exceptional to work with.",
      author: "Jennifer Walsh",
      role: "VP of Operations, TechCorp",
      rating: 5,
    },
    {
      quote:
        "Working with NeoMoti was a game-changer. They didn't just build software—they became strategic partners in our digital transformation journey.",
      author: "Marcus Johnson",
      role: "CTO, RetailHub",
      rating: 5,
    },
    {
      quote:
        "The quality of work and atten   j tion to detail is unmatched. Our custom platform has scaled seamlessly from 1,000 to 250,000 users without a hitch.",
      author: "Priya Sharma",
      role: "CEO, FinanceFlow",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border relative"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
          <h3 className="text-2xl font-bold mb-4">Trusted by Leading Organizations</h3>
          <p className="text-muted-foreground mb-8">
            Join hundreds of satisfied clients who have transformed their businesses with NeoMoti.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-foreground">TechCorp</div>
            <div className="text-2xl font-bold text-foreground">RetailHub</div>
            <div className="text-2xl font-bold text-foreground">FinanceFlow</div>
            <div className="text-2xl font-bold text-foreground">HealthPro</div>
            <div className="text-2xl font-bold text-foreground">EduLearn</div>
          </div>
        </div>
      </div>
    </section>
  );
};
