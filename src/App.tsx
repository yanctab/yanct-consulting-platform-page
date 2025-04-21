
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

// Create a wrapper component to handle URL parameters if needed
const AppContent = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Log when the app starts to help with debugging
    console.log("App initialized with path:", location.pathname);
    console.log("URL params:", location.search);
    
    // Force a repaint to handle any rendering issues
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Create the query client outside of the component to avoid recreation on render
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Enable debugging information
    console.log("App component mounted");
    
    // Check if we're in a new tab by examining the URL
    const urlParams = new URLSearchParams(window.location.search);
    const forceHideBadge = urlParams.get('forceHideBadge');
    
    if (forceHideBadge) {
      console.log("Running in forceHideBadge mode, ensuring proper initialization");
    }
    
    return () => {
      console.log("App component unmounted");
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
