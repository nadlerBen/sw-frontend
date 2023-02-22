import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import DataController from "./components/DataController";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <AppLayout>
        <DataController>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </DataController>
      </AppLayout>
    </Router>
  );
}
