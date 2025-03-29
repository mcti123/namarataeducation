import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import SubjectsPage from "@/pages/SubjectsPage";
import ProgressPage from "@/pages/ProgressPage";
import RewardsPage from "@/pages/RewardsPage";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";

function Router({ 
  reducedMotion, 
  setReducedMotion 
}: { 
  reducedMotion: boolean;
  setReducedMotion: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // Get current location to determine if we need to show navbar
  const [location] = useLocation();
  
  // Determine if we should show navbar based on route
  const showNavbar = !location.includes("test");

  return (
    <>
      {showNavbar && <Navbar reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} />}
      <Switch>
        <Route path="/" component={() => <Home reducedMotion={reducedMotion} />} />
        <Route path="/subjects" component={() => <SubjectsPage reducedMotion={reducedMotion} />} />
        <Route path="/progress" component={() => <ProgressPage reducedMotion={reducedMotion} />} />
        <Route path="/rewards" component={() => <RewardsPage reducedMotion={reducedMotion} />} />
        <Route component={NotFound} />
      </Switch>
    </>
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
        <Router reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
