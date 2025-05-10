
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/sonner";

interface WaitlistFormValues {
  email: string;
}

const WaitlistSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<WaitlistFormValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true);
    
    // Simulating API call
    try {
      // In a real implementation, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("You've been added to the Squirrelll-Byt waitlist!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-fintech-dark to-fintech-darkBlue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm text-fintech-mint font-medium">Coming Soon</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join the <span className="gradient-text">Squirrelll-Byt</span> Waitlist
          </h2>
          
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Be among the first to experience our crypto-powered financial platform. 
            Secure your spot in line for early access to DeFi tools, crypto rewards, 
            and blockchain-based savings solutions.
          </p>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 mb-8">
            <div className="flex flex-col space-y-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Input
                              placeholder="Enter your email address"
                              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                              {...field}
                            />
                            <Button 
                              type="submit" 
                              className="h-12 px-8 bg-gradient-to-r from-fintech-mint to-fintech-amber text-fintech-dark font-medium"
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
            
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-fintech-mint"></div>
                <span className="text-white/70 text-sm">Crypto Rewards</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-fintech-amber"></div>
                <span className="text-white/70 text-sm">DeFi Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-white/70"></div>
                <span className="text-white/70 text-sm">Early Access</span>
              </div>
            </div>
          </div>
          
          <p className="text-white/40 text-sm">
            By joining the waitlist, you agree to receive updates about Squirrelll-Byt.
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
