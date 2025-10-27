import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background/95" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Transforming Your Vision into{" "}
            <span className="text-accent">Digital Reality</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Professional tech solutions provider and product studio, specializing in AI-driven
            innovation, custom software, and digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary-foreground text-primary-foreground bg-primary-foreground/10 font-semibold text-lg px-8 py-6 rounded-full"
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">98%</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">24/7</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary-foreground/60 hover:text-accent transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
