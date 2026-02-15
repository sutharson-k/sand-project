import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BuyerCatalog from "@/pages/buyer/catalog";
import SandDetail from "@/pages/buyer/sand-detail";
import SelectDealer from "@/pages/buyer/select-dealer";
import SelectTransport from "@/pages/buyer/select-transport";
import OrderForm from "@/pages/buyer/order-form";
import OrderTracking from "@/pages/buyer/tracking";
import BecomeSeller from "@/pages/seller/register";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Buyer Routes */}
      <Route path="/buyer/catalog" component={BuyerCatalog} />
      <Route path="/buyer/sand/:id" component={SandDetail} />
      <Route path="/buyer/dealer/:sandId" component={SelectDealer} />
      <Route path="/buyer/transport/:dealerId" component={SelectTransport} />
      <Route path="/buyer/order/:transportId" component={OrderForm} />
      <Route path="/buyer/tracking" component={OrderTracking} />

      {/* Seller/Transport Routes */}
      <Route path="/become-seller" component={BecomeSeller} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
