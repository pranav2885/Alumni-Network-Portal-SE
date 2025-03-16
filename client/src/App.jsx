import React from "react";
import AllRoutes from "./AllRoutes";
import Navbar from './utils/Navbar'
import Footer from './utils/Footer'

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
