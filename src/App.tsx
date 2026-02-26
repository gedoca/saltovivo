import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // Cambia BrowserRouter por HashRouterimport Layout from "./components/Layout";
import Index from "./pages/Index";
import Programa from "./pages/Programa";
import Filosofia from "./pages/Filosofia";
import Equipo from "./pages/Equipo";
import Comunidad from "./pages/Comunidad";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programa" element={<Programa />} />
            <Route path="/filosofia" element={<Filosofia />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
