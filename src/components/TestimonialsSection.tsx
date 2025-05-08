
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Small Business Owner",
    image: "https://i.pravatar.cc/100?img=1",
    content: "Aurora has completely transformed how I manage my business finances. The intuitive interface makes tracking expenses and planning for taxes so much easier.",
    rating: 5
  },
  {
    name: "Michael Chen",
    title: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=3",
    content: "I've tried several fintech apps, but Aurora stands out with its powerful analytics and investment features. I've improved my savings rate by 15% in just three months!",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    title: "Marketing Director",
    image: "https://i.pravatar.cc/100?img=5",
    content: "The budgeting tools are game-changing. I can finally see where my money goes each month and make adjustments to reach my financial goals faster.",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-fintech-mint/10 blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Users Say</span></h2>
          <p className="text-white/70 max-w-xl mx-auto">Don't just take our word for it. Here's what our community of users has to say about their experience with Aurora.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-fintech-darkBlue border-white/5">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-fintech-amber" />
                  ))}
                </div>
                
                <p className="text-white/90 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
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
