import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/sonner";

interface WaitlistFormValues {
  email: string;
}

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzcHBATr8lKLLJ_kFUhGxGIDfpe34mofN4MoHGqWUyZ1wMf6zTYj_0bRvJHK69ERorN/exec";

const WaitlistSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WaitlistFormValues>({
    defaultValues: { email: "" }
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true);
    try {
      // ✅ form-encoded body; do NOT set Content-Type manually
      const params = new URLSearchParams();
      params.set("email", data.email);

      const isProd =
        typeof window !== "undefined" &&
        window.location.hostname.includes("squirrelll.ing");

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: isProd ? "no-cors" : "cors",
        body: params,
      });

      // We can't read response in no-cors, but the request is sent
      toast.success("You've been added to the Squirrelll-Byt waitlist!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-fintech-dark border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-medium text-fintech-mint/70 bg-fintech-mint/5 px-2 sm:px-3 py-1 rounded-full border border-fintech-mint/10 inline-flex items-center gap-1 sm:gap-1.5">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-fintech-mint/50 rounded-full text-fintech-gold"></span>
              Coming Soon
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-center mb-2 sm:mb-3 text-white/90 px-2">
            Join <span className="text-fintech-mint">Squirrelll-Byt</span> Waitlist
          </h3>

          <p className="text-white/50 text-sm sm:text-base text-center mb-4 sm:mb-6 max-w-lg mx-auto px-4">
            Be among the first to experience crypto-powered Squirrelll platform.
            Early access to DeFi tools and blockchain-based savings solutions.
          </p>

          <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-lg p-4 sm:p-5 md:p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full squirrelll-byt-waitlist">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Input
                            id="squirrelll-byt-email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your email address"
                            className="h-10 sm:h-12 bg-white/5 border-white/10 text-white/80 placeholder:text-white/30 text-sm sm:text-base flex-1"
                            type="email"
                            required
                            aria-label="Email address for waitlist"
                            {...field}
                          />
                          <Button
                            type="submit"
                            className="h-10 sm:h-12 px-4 sm:px-6 bg-white/10 hover:bg-white/15 text-white/80 text-sm sm:text-base font-normal whitespace-nowrap"
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

            <div className="mt-4 sm:mt-5 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="text-white/40">Crypto Rewards</span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-white/40">DeFi Integration</span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-white/40">Early Access</span>
            </div>
          </div>

          <p className="text-white/30 text-xs sm:text-sm text-center mt-3 sm:mt-4 px-4">
            By joining the waitlist, you agree to receive updates about Squirrelll-Byt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
