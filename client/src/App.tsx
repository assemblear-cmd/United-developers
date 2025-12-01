import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Team from "@/pages/Team";
import Portfolio from "@/pages/Portfolio";
import MaQingyun from "@/pages/MaQingyun";
import CasablancaPlanning from "@/pages/CasablancaPlanning";
import XixianCBD from "@/pages/XixianCBD";
import JinqiaoGuopei from "@/pages/JinqiaoGuopei";
import HuyaoOffice from "@/pages/HuyaoOffice";
import Contacts from "@/pages/Contacts";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/team" component={Team} />
      <Route path="/ma-qingyun" component={MaQingyun} />
      <Route path="/casablanca" component={CasablancaPlanning} />
      <Route path="/xixian" component={XixianCBD} />
      <Route path="/jinqiao" component={JinqiaoGuopei} />
      <Route path="/huyao" component={HuyaoOffice} />
      <Route path="/contact" component={Contacts} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
