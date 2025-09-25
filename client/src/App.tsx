import { Switch, Route } from "wouter";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Lazy load the booking page for code splitting
const Booking = lazy(() => import("@/pages/booking"));

// Prefetch booking page chunk for instant navigation
const preloadBooking = () => import('@/pages/booking');

// Loading component for Suspense fallback
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-3 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
        <p className="text-brand-white/70 text-lg">Loading...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/booking">
        <Suspense fallback={<LoadingSpinner />}>
          <Booking />
        </Suspense>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Idle prefetch booking page after initial render
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadBooking);
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(preloadBooking, 1500);
    }
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
