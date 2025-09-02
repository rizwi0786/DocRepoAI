
// import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './App.css'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <AppRoutes />
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
    </Router>
  );
}

export default App
