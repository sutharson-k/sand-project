import { useRoute, useLocation } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TRUCKS } from "@/lib/data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  deliveryAddress: z.string().min(10, "Address is required"),
  quantity: z.string().min(1, "Quantity is required"),
  notes: z.string().optional(),
});

export default function OrderForm() {
  const [match, params] = useRoute("/buyer/order/:transportId");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const truckId = match ? parseInt(params.transportId) : 1;
  const truck = TRUCKS.find(t => t.id === truckId);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      deliveryAddress: "",
      quantity: "10",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Order Placed Successfully",
        description: "Redirecting to tracking page...",
      });
      setLocation("/buyer/tracking");
    }, 2000);
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="font-heading text-4xl font-bold uppercase mb-8">Finalize Order</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="rounded-none border-2 border-muted shadow-sm">
              <CardHeader className="bg-muted/10 border-b border-muted">
                <CardTitle className="font-heading uppercase">Delivery Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-muted-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="rounded-none h-12 border-2 focus-visible:ring-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-muted-foreground">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 234 567 8900" {...field} className="rounded-none h-12 border-2 focus-visible:ring-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="deliveryAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-muted-foreground">Delivery Site Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter full construction site address..." {...field} className="rounded-none min-h-[100px] border-2 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-muted-foreground">Quantity (Tons)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} className="rounded-none h-12 border-2 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-muted-foreground">Site Instructions (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Gate code, specific drop-off point, etc." {...field} className="rounded-none h-12 border-2 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-primary text-foreground font-heading uppercase text-lg tracking-wide hover:bg-primary/90 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                      {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing Order...</> : "Confirm & Pay"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div>
             <Card className="rounded-none border-2 border-foreground bg-secondary/20 sticky top-24">
               <CardHeader className="bg-foreground text-background py-4">
                 <CardTitle className="font-heading uppercase text-lg">Order Summary</CardTitle>
               </CardHeader>
               <CardContent className="p-6">
                 <div className="space-y-4">
                   <div className="flex justify-between text-sm">
                     <span className="text-muted-foreground">Material Cost</span>
                     <span className="font-mono font-bold">$450.00</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-muted-foreground">Transport ({truck?.name})</span>
                     <span className="font-mono font-bold">${truck?.price}.00</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-muted-foreground">Taxes & Fees</span>
                     <span className="font-mono font-bold">$42.50</span>
                   </div>
                   <Separator className="bg-foreground/20" />
                   <div className="flex justify-between items-end">
                     <span className="font-heading font-bold uppercase text-lg">Total</span>
                     <span className="font-mono font-bold text-3xl text-primary">$742.50</span>
                   </div>
                 </div>
               </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
