
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Smartphone, Mail } from "lucide-react";

interface WaitlistFormValues {
  email: string;
}

const DownloadSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<WaitlistFormValues>({
    defaultValues: {
      email: ""
    }
  });
  
  const onSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true);

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("You've been added to the Squirrelll waitlist!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="download" className="py-16 md:py-20 relative">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-fintech-gold/10 blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-xs font-medium text-fintech-mint/70 bg-fintech-mint/5 px-3 py-1 rounded-full border border-fintech-mint/10 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-fintech-mint/50 rounded-full"></span>
              Coming Soon
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">Squirrelll</span> is Almost Here
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Be the first to experience innovative micro-financing. Join our waitlist and get early access when we launch.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Join the Waitlist</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-fintech-mint flex items-center justify-center">
                    <Smartphone className="text-fintech-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Mobile App</h4>
                    <p className="text-white/60 text-sm">Coming soon for iOS and Android</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-fintech-gold flex items-center justify-center">
                    <Mail className="text-fintech-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Early Access</h4>
                    <p className="text-white/60 text-sm">Get notified when we launch</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex flex-col sm:flex-row gap-3">
                                <Input
                                  placeholder="Enter your email address"
                                  className="h-12 md:h-14 bg-white/5 border-white/10 text-white/80 placeholder:text-white/30"
                                  type="email"
                                  required
                                  aria-label="Email address for waitlist"
                                  {...field}
                                />
                                <Button
                                  type="submit"
                                  className="h-12 md:h-14 px-6 bg-gradient-to-r from-fintech-mint to-fintech-amber hover:opacity-90 text-fintech-dark font-medium"
                                  disabled={isSubmitting}
                                >
                                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                                </Button>
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glow-amber">
                <img 
                  alt="Squirrelll App Coming Soon" 
                  className="w-full rounded-xl shadow-xl opacity-75" 
                  src="/uploads/79f59e83-3d83-409a-a070-db0311401c9e.jpg"
                  loading="lazy"
                  width="400"
                  height="800"
                />
              </div>
              
              <div className="absolute -top-3 md:-top-5 -right-3 md:-right-5 bg-fintech-mint text-fintech-dark px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold text-sm">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-16 text-center">
          <p className="text-white/50 text-xs md:text-sm">By joining the waitlist, you agree to our <a href="#" className="underline hover:text-fintech-mint">Terms of Service</a> and <a href="#" className="underline hover:text-fintech-mint">Privacy Policy</a></p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
