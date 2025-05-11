
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
    <section id="testimonials" className="py-16 bg-fintech-darkBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Join thousands of satisfied users who have transformed their financial lives with Squirrelll.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg glass-card overflow-hidden hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/50">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className={i < testimonial.rating ? "fill-fintech-amber text-fintech-amber" : "text-gray-600"} />
                  ))}
                </div>
                <p className="text-white/80 text-sm">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
