import { Switch, Route } from "wouter";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Lazy load the booking pages for code splitting
const Booking = lazy(() => import("@/pages/booking"));
const BeardBooking = lazy(() => import("@/pages/beard-booking"));
const BeardHotTowelBooking = lazy(() => import("@/pages/beard-hot-towel-booking"));
const HaircutBooking = lazy(() => import("@/pages/haircut-booking"));
const HaircutBeardBooking = lazy(() => import("@/pages/haircut-beard-booking"));
const HaircutBeardHotTowelBooking = lazy(() => import("@/pages/haircut-beard-hot-towel-booking"));
const FullServiceBooking = lazy(() => import("@/pages/full-service-booking"));
const UltimatePackageBooking = lazy(() => import("@/pages/ultimate-package-booking"));
const EssentialsPackageBooking = lazy(() => import("@/pages/essentials-package-booking"));
const TagTeamPackageBooking = lazy(() => import("@/pages/tag-team-package-booking"));
const CustomPackageBooking = lazy(() => import("@/pages/custom-package-booking"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));

// Prefetch booking page chunks for instant navigation
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
      <Route path="/beard-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <BeardBooking />
        </Suspense>
      </Route>
      <Route path="/beard-hot-towel-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <BeardHotTowelBooking />
        </Suspense>
      </Route>
      <Route path="/haircut-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <HaircutBooking />
        </Suspense>
      </Route>
      <Route path="/haircut-beard-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <HaircutBeardBooking />
        </Suspense>
      </Route>
      <Route path="/haircut-beard-hot-towel-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <HaircutBeardHotTowelBooking />
        </Suspense>
      </Route>
      <Route path="/full-service-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <FullServiceBooking />
        </Suspense>
      </Route>
      <Route path="/ultimate-package-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <UltimatePackageBooking />
        </Suspense>
      </Route>
      <Route path="/essentials-package-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <EssentialsPackageBooking />
        </Suspense>
      </Route>
      <Route path="/tag-team-package-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <TagTeamPackageBooking />
        </Suspense>
      </Route>
      <Route path="/custom-package-booking">
        <Suspense fallback={<LoadingSpinner />}>
          <CustomPackageBooking />
        </Suspense>
      </Route>
      <Route path="/privacy-policy">
        <Suspense fallback={<LoadingSpinner />}>
          <PrivacyPolicy />
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
