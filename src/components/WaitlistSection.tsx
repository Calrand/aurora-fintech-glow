
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
      email: ""
    }
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true);

    // Simulating API call
    try {
      // In a real implementation, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("You've been added to the Squirrelll-Byt waitlist!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-fintech-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-3">
            <span className="text-xs font-medium text-fintech-mint/70 bg-fintech-mint/5 px-3 py-1 rounded-full border border-fintech-mint/10 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-fintech-mint/50 rounded-full"></span>
              Coming Soon
            </span>
          </div>
          
          <h3 className="text-2xl font-medium text-center mb-3 text-white/90">
            Join <span className="text-fintech-mint">Squirrelll-Byt</span> Waitlist
          </h3>
          
          <p className="text-white/50 text-sm text-center mb-6 max-w-lg mx-auto">
            Be among the first to experience our crypto-powered financial platform.
            Early access to DeFi tools and blockchain-based savings solutions.
          </p>
          
          <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-lg p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField control={form.control} name="email" render={({
                field
                }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Input 
                          placeholder="Enter your email address" 
                          className="h-10 bg-white/5 border-white/10 text-white/80 placeholder:text-white/30 text-sm" 
                          {...field} 
                        />
                        <Button 
                          type="submit" 
                          className="h-10 px-4 bg-white/10 hover:bg-white/15 text-white/80 text-sm font-normal" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Joining..." : "Join Waitlist"}
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )} />
              </form>
            </Form>
            
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
              <span className="text-white/40">Crypto Rewards</span>
              <span className="text-white/40">•</span>
              <span className="text-white/40">DeFi Integration</span>
              <span className="text-white/40">•</span>
              <span className="text-white/40">Early Access</span>
            </div>
          </div>
          
          <p className="text-white/30 text-xs text-center mt-4">
            By joining the waitlist, you agree to receive updates about Squirrelll-Byt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
