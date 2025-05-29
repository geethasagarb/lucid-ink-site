
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring large React applications with modern tools and patterns.",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "React"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the next generation of web apps.",
      date: "Dec 10, 2023",
      readTime: "8 min read",
      category: "Tech Trends"
    },
    {
      title: "Optimizing Performance in Node.js",
      excerpt: "Techniques and strategies for building high-performance backend applications.",
      date: "Dec 5, 2023",
      readTime: "6 min read",
      category: "Node.js"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Latest Articles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={post.title}
              className="group hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <CardTitle className="text-xl group-hover:gradient-text transition-all">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {post.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:underline font-medium">
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
