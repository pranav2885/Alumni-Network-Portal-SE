import React from "react";
import AllRoutes from "./AllRoutes";
import Navbar from './utils/Navbar'
import Footer from './utils/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] border">
      <Navbar />
      <div className="mt-16">
        <AllRoutes />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
