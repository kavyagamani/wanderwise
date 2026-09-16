import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/destination/:city"
          element={<DestinationDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;