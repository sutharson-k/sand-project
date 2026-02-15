import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, Home, MapPin, Truck } from "lucide-react";
import { useEffect, useState } from "react";

// Mock simulation steps
const STEPS = [
  { status: "Processing", label: "Order Confirmed", icon: CheckCircle2 },
  { status: "Loading", label: "Loading at Quarry", icon: Factory },
  { status: "In Transit", label: "Out for Delivery", icon: Truck },
  { status: "Arrived", label: "Arriving at Site", icon: Home },
];

export default function OrderTracking() {
  const [currentStep, setCurrentStep] = useState(0);

  // Simulate progress
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, 4000); // Change step every 4 seconds for demo
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
        {/* Sidebar Info */}
        <div className="w-full md:w-1/3 bg-background border-r border-border p-6 md:p-10 z-10">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold uppercase mb-2">Live Tracking</h1>
            <p className="text-sm text-muted-foreground font-mono">ORDER ID: #SAND-8821X</p>
          </div>

          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-muted -z-10"></div>

            {STEPS.map((step, index) => {
               const isActive = index === currentStep;
               const isCompleted = index < currentStep;
               
               return (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-start gap-4 ${isActive ? 'scale-105 origin-left' : 'opacity-70'} transition-all duration-500`}
                 >
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 transition-colors duration-500 ${
                     isActive || isCompleted 
                       ? 'bg-primary border-primary text-foreground' 
                       : 'bg-background border-muted text-muted-foreground'
                   }`}>
                     <step.icon className="h-4 w-4" />
                   </div>
                   <div>
                     <h3 className={`font-heading text-lg font-bold uppercase ${isActive ? 'text-primary' : ''}`}>
                       {step.status}
                     </h3>
                     <p className="text-sm text-muted-foreground">{step.label}</p>
                     {isActive && (
                       <motion.div 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="text-xs font-mono mt-1 text-green-600 bg-green-100 px-2 py-0.5 w-fit"
                       >
                         UPDATED JUST NOW
                       </motion.div>
                     )}
                   </div>
                 </motion.div>
               );
            })}
          </div>

          <Card className="mt-10 rounded-none border-2 border-foreground bg-secondary/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Driver" />
                </div>
                <div>
                   <h4 className="font-heading font-bold uppercase">Driver: Mike R.</h4>
                   <p className="text-xs text-muted-foreground">White Dump Truck • Lic: 882-JKA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Area */}
        <div className="flex-1 bg-gray-200 relative overflow-hidden flex items-center justify-center">
            {/* Stylized Map Background (CSS Grid/Pattern) */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                   backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }}>
            </div>
            
            {/* Map Roads */}
            <svg className="absolute inset-0 w-full h-full stroke-gray-400 stroke-[20] fill-none" preserveAspectRatio="none">
               <path d="M-100,500 Q400,300 600,600 T1200,400" />
            </svg>
            <svg className="absolute inset-0 w-full h-full stroke-white stroke-[16] fill-none" preserveAspectRatio="none">
               <path d="M-100,500 Q400,300 600,600 T1200,400" />
            </svg>

            {/* Moving Truck */}
            <motion.div
              className="absolute z-20"
              animate={{ 
                offsetDistance: ["0%", "100%"]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                offsetPath: "path('M-100,500 Q400,300 600,600 T1200,400')",
                offsetRotate: "auto"
              }}
            >
              <div className="bg-primary p-2 rounded-full border-2 border-white shadow-xl relative -top-4 -left-4">
                 <Truck className="h-6 w-6 text-foreground" />
              </div>
            </motion.div>

            {/* Pins */}
            <div className="absolute left-[10%] top-[60%] flex flex-col items-center">
               <Factory className="h-8 w-8 text-gray-700 mb-2" />
               <span className="bg-white px-2 py-1 text-xs font-bold uppercase border border-gray-300 shadow-sm">North Quarry</span>
            </div>
            
            <div className="absolute right-[10%] top-[40%] flex flex-col items-center">
               <MapPin className="h-8 w-8 text-red-600 mb-2 drop-shadow-md" />
               <span className="bg-white px-2 py-1 text-xs font-bold uppercase border border-gray-300 shadow-sm">Delivery Site</span>
            </div>
        </div>
      </div>
    </Layout>
  );
}
