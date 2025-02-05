import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register"; // Ruta correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
  );
}


