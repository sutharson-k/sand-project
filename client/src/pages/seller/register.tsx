import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, CheckCircle } from "lucide-react";

export default function BecomeSeller() {
  return (
    <Layout>
      <div className="bg-secondary/20 min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
             <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">Partner With Us</h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join the fastest growing construction logistics network. Register your quarry or fleet today.</p>
          </div>

          <Tabs defaultValue="supplier" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-16 p-1 bg-muted/50 rounded-none border-2 border-transparent">
              <TabsTrigger value="supplier" className="h-full rounded-none font-heading uppercase text-lg data-[state=active]:bg-primary data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all">
                Sand Supplier
              </TabsTrigger>
              <TabsTrigger value="transport" className="h-full rounded-none font-heading uppercase text-lg data-[state=active]:bg-primary data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all">
                Transporter
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="supplier">
                <Card className="rounded-none border-2 border-muted shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl uppercase">Supplier Registration</CardTitle>
                    <CardDescription>Verify your quarry and start selling directly to contractors.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Business Name</Label>
                        <Input placeholder="RockSolid Aggregates LLC" className="rounded-none h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label>Quarry Location ID</Label>
                        <Input placeholder="GPS Coordinates or ID" className="rounded-none h-12" />
                      </div>
                    </div>

                    <div className="space-y-4 border-2 border-dashed border-muted p-6 bg-muted/5">
                      <h4 className="font-bold uppercase text-sm flex items-center gap-2">
                        <FileText className="h-4 w-4" /> Required Documents
                      </h4>
                      
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between p-4 bg-background border border-muted">
                           <div>
                             <p className="font-bold text-sm">Mining License / Permit</p>
                             <p className="text-xs text-muted-foreground">PDF or JPG only</p>
                           </div>
                           <Button variant="outline" size="sm" className="rounded-none">
                             <Upload className="mr-2 h-3 w-3" /> Upload
                           </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-background border border-muted">
                           <div>
                             <p className="font-bold text-sm">Quality Certificate (ISO)</p>
                             <p className="text-xs text-muted-foreground">Sand analysis report</p>
                           </div>
                           <Button variant="outline" size="sm" className="rounded-none">
                             <Upload className="mr-2 h-3 w-3" /> Upload
                           </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                         <Label>Primary Material Types</Label>
                         <div className="grid grid-cols-2 gap-2">
                            {['River Sand', 'M-Sand', 'Pit Sand', 'Aggregate'].map((type) => (
                              <div key={type} className="flex items-center space-x-2 border border-muted p-3">
                                <input type="checkbox" id={type} className="rounded-none h-4 w-4 accent-primary" />
                                <label htmlFor={type} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  {type}
                                </label>
                              </div>
                            ))}
                         </div>
                    </div>

                    <Button className="w-full h-14 bg-foreground text-background font-heading uppercase tracking-wide hover:bg-foreground/90 rounded-none text-lg">
                      Submit Application
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="transport">
                <Card className="rounded-none border-2 border-muted shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl uppercase">Transporter Registration</CardTitle>
                    <CardDescription>Register your fleet and get access to consistent loads.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Company / Owner Name</Label>
                        <Input placeholder="Rapid Transport Inc" className="rounded-none h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label>Fleet Size</Label>
                        <Input type="number" placeholder="Number of vehicles" className="rounded-none h-12" />
                      </div>
                    </div>

                    <div className="space-y-4 border-2 border-dashed border-muted p-6 bg-muted/5">
                      <h4 className="font-bold uppercase text-sm flex items-center gap-2">
                        <FileText className="h-4 w-4" /> Compliance Documents
                      </h4>
                      
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between p-4 bg-background border border-muted">
                           <div>
                             <p className="font-bold text-sm">Commercial Vehicle Registration</p>
                             <p className="text-xs text-muted-foreground">For all vehicles</p>
                           </div>
                           <Button variant="outline" size="sm" className="rounded-none">
                             <Upload className="mr-2 h-3 w-3" /> Upload
                           </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-background border border-muted">
                           <div>
                             <p className="font-bold text-sm">Driver's Licenses & Insurance</p>
                             <p className="text-xs text-muted-foreground">Consolidated PDF</p>
                           </div>
                           <Button variant="outline" size="sm" className="rounded-none">
                             <Upload className="mr-2 h-3 w-3" /> Upload
                           </Button>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full h-14 bg-foreground text-background font-heading uppercase tracking-wide hover:bg-foreground/90 rounded-none text-lg">
                      Register Fleet
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
