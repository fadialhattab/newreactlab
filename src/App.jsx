import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/footer";

import Support from "./pages/Support";
import Enterprize from "./pages/Enterprize";
import Features from "./pages/Features";
import Headline from "./pages/Headline";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Headline/>}/>
          <Route  path="support" element={<Support/>}/>
          <Route path="enterprise" element={<Enterprize/>}/>
          <Route path="features" element={<Features/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
