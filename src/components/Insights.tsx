import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Insights = () => {
  const posts = [
    {
      title: "The Future of AI in Business: Trends to Watch in 2025",
      excerpt:
        "Explore how artificial intelligence is reshaping industries and what it means for your business strategy.",
      date: "March 15, 2024",
      category: "AI & Innovation",
      readTime: "5 min read",
    },
    {
      title: "Digital Transformation: A Step-by-Step Guide",
      excerpt:
        "Learn the essential steps to successfully transform your legacy systems into modern, scalable solutions.",
      date: "March 10, 2024",
      category: "Digital Strategy",
      readTime: "8 min read",
    },
    {
      title: "Building Scalable Cloud Architecture",
      excerpt:
        "Best practices for designing cloud infrastructure that grows with your business needs.",
      date: "March 5, 2024",
      category: "Cloud & DevOps",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Insights & <span className="text-accent">Thought Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay ahead with industry insights, technical guides, and thought leadership from our team of
            experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-teal/10" />
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
};
