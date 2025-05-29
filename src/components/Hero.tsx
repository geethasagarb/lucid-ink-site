
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Alex</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A passionate developer crafting beautiful digital experiences with modern technologies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform"
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform"
          >
            Get In Touch
          </Button>
        </div>

        <div className="mt-16 animate-float">
          <div className="w-12 h-12 mx-auto border-2 border-muted-foreground rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
