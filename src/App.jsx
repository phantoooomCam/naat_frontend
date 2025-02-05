import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/register"; // Ruta correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}


