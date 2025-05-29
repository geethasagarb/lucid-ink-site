
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", 
    "MongoDB", "PostgreSQL", "AWS", "Docker"
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6">
              Building the future, one line at a time
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a full-stack developer with 5+ years of experience creating 
              scalable web applications. I love turning complex problems into 
              simple, beautiful, and intuitive solutions.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or hiking in the mountains.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <Card 
                  key={skill} 
                  className="p-3 text-center hover:scale-105 transition-transform cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in">
            <Card className="p-8 bg-gradient-to-br from-background to-muted/50">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Experience</h4>
                  <p className="text-muted-foreground">5+ years in full-stack development</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Focus</h4>
                  <p className="text-muted-foreground">Modern web technologies & user experience</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
