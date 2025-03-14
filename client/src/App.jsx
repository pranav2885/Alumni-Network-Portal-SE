import React from "react";
import AllRoutes from "./AllRoutes";
import Footer from "./components/utils/Footer";
import Navbar from "./components/utils/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}
