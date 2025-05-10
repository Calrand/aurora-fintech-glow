
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
    <section className="py-20 bg-fintech-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't take our word for it. Here's what our community of users have to say about their experience with Squirrelll.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={i < testimonial.rating ? "text-fintech-amber fill-fintech-amber" : "text-gray-400"} 
                      size={18}
                    />
                  ))}
                </div>
                <p className="text-white/80 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.title}</p>
                  </div>
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
