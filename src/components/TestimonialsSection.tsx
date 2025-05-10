
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [{
  name: "Sarah Johnson",
  title: "Small Business Owner",
  image: "https://i.pravatar.cc/100?img=1",
  content: "Squirrelll has completely transformed how I manage my business finances. The intuitive interface makes tracking expenses and planning for taxes so much easier.",
  rating: 5
}, {
  name: "Michael Chen",
  title: "Software Engineer",
  image: "https://i.pravatar.cc/100?img=3",
  content: "I've tried several fintech apps, but Squirrelll stands out with its powerful analytics and investment features. I've improved my savings rate by 15% in just three months!",
  rating: 5
}, {
  name: "Elena Rodriguez",
  title: "Marketing Director",
  image: "https://i.pravatar.cc/100?img=5",
  content: "The budgeting tools are game-changing. I can finally see where my money goes each month and make adjustments to reach my financial goals faster.",
  rating: 4
}];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-fintech-dark to-fintech-darkBlue">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their financial lives with Squirrelll.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">{testimonial.content}</p>
                
                <div className="flex">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-fintech-amber text-fintech-amber" />
                  ))}
                  {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-white/20" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
