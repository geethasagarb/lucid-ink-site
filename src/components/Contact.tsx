
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6">
              Let's work together
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best 
              to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex-shrink-0"></div>
                <span>alex@example.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex-shrink-0"></div>
                <span>San Francisco, CA</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex-shrink-0"></div>
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>
          
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input placeholder="First name" />
                </div>
                <div>
                  <Input placeholder="Last name" />
                </div>
              </div>
              
              <Input placeholder="Email address" type="email" />
              
              <Input placeholder="Subject" />
              
              <Textarea 
                placeholder="Your message" 
                rows={5}
                className="resize-none"
              />
              
              <Button className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
