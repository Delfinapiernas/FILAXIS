import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import StudentLayout from "./components/StudentLayout";
import MyBookings from "./pages/dashboard/MyBookings";
import Waitlist from "./pages/dashboard/Waitlist";
import Profile from "./pages/dashboard/Profile";
import { useAuth } from "./_core/hooks/useAuth";
import { Redirect } from "wouter";

// Protected student routes
function StudentRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, loading, isAuthenticated } = useAuth();
  if (loading) return null;
  if (!isAuthenticated) return <Redirect to="/" />;
  if (user?.role === "admin") return <Redirect to="/admin" />;
  return (
    <StudentLayout>
      <Component />
    </StudentLayout>
  );
}

function Router() {
  return (
    <Switch>
      {/* Public */}
      <Route path="/" component={Home} />

      {/* Student dashboard */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/reservas">
        <StudentRoute component={MyBookings} />
      </Route>
      <Route path="/dashboard/espera">
        <StudentRoute component={Waitlist} />
      </Route>
      <Route path="/dashboard/perfil">
        <StudentRoute component={Profile} />
      </Route>

      {/* Admin panel */}
      <Route path="/admin" component={Admin} />
      <Route path="/admin/:rest*" component={Admin} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-right" richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
