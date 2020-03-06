import React from "react";
import Navbar from "../components/Navigation/NavBar";
import ChartsContent from "../components/ChartsContent/ChartsContent";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <main className="DashboardPage">
        <ChartsContent />
      </main>
    </div>
  );
}

export default DashboardPage;
