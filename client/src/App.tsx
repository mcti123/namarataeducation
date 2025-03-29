import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check if reduced motion is stored in localStorage
    const storedPreference = localStorage.getItem('reduced-motion') === 'true';
    setReducedMotion(storedPreference);
  }, []);

  useEffect(() => {
    // Update body class when reducedMotion changes
    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
    // Store preference
    localStorage.setItem('reduced-motion', String(reducedMotion));
  }, [reducedMotion]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-nunito antialiased bg-space text-spaceWhite">
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
