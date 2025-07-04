
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
    <section id="download" className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-full bg-fintech-gold/10 blur-[60px] md:blur-[80px] lg:blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-medium text-fintech-mint/70 bg-fintech-mint/5 px-2 sm:px-3 py-1 rounded-full border border-fintech-mint/10 inline-flex items-center gap-1 sm:gap-1.5">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-fintech-mint/50 rounded-full"></span>
              Coming Soon
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">
            <span className="gradient-text">Squirrelll.ing</span> is Almost Here
          </h2>
          <p className="text-white/70 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-xs sm:text-sm md:text-base px-4">
            Be the first to experience innovative micro-financing. Join our waitlist and get early access when we launch.
          </p>
        </div>
        
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto glass-card p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">Join the Waitlist</h3>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-fintech-mint flex items-center justify-center flex-shrink-0">
                    <Smartphone className="text-fintech-dark" size={16} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-sm sm:text-base">Mobile App</h4>
                    <p className="text-white/60 text-xs sm:text-sm">Coming soon for iOS and Android</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-fintech-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="text-fintech-dark" size={16} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-sm sm:text-base">Early Access</h4>
                    <p className="text-white/60 text-xs sm:text-sm">Get notified when we launch</p>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex flex-col gap-2 sm:gap-3">
                                <Input
                                  placeholder="Enter your email address"
                                  className="h-10 sm:h-12 md:h-14 bg-white/5 border-white/10 text-white/80 placeholder:text-white/30 text-sm sm:text-base"
                                  type="email"
                                  required
                                  aria-label="Email address for waitlist"
                                  {...field}
                                />
                                <Button
                                  type="submit"
                                  className="h-10 sm:h-12 md:h-14 px-4 sm:px-6 bg-gradient-to-r from-fintech-mint to-fintech-amber hover:opacity-90 text-fintech-dark font-medium text-sm sm:text-base"
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
            
            <div className="relative order-1 lg:order-2">
              <div className="glow-amber max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-none mx-auto">
                <img 
                  alt="Squirrelll App Coming Soon" 
                  className="w-full rounded-xl shadow-xl opacity-75" 
                  src="/uploads/79f59e83-3d83-409a-a070-db0311401c9e.jpg"
                  loading="lazy"
                  width="400"
                  height="800"
                />
              </div>
              
              <div className="absolute -top-2 sm:-top-3 md:-top-5 -right-2 sm:-right-3 md:-right-5 bg-fintech-mint text-fintech-dark px-2 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-full font-semibold text-xs sm:text-sm">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-center px-4">
          <p className="text-white/50 text-xs sm:text-sm">
            By joining the waitlist, you agree to our{" "}
            <a href="#" className="underline hover:text-fintech-mint transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-fintech-mint transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
