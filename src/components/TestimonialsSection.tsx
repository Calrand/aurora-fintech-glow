
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
    <section id="testimonials" className="py-12 sm:py-14 md:py-16 lg:py-20 bg-fintech-darkBlue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 px-2">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base px-4">
            Join thousands of satisfied users who have transformed their financial lives with Squirrelll.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg glass-card overflow-hidden hover:-translate-y-1 transition-all">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm sm:text-base truncate">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-white/50 truncate">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      size={14} 
                      className={`${i < testimonial.rating ? "fill-fintech-amber text-fintech-amber" : "text-gray-600"} sm:w-4 sm:h-4`} 
                    />
                  ))}
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
