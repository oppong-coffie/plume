import { useState } from "react";
import Layout from "./components/Layout/Layout";

// Page Imports
import Dashboard from "./pages/Dashboard";
import Packages from "./pages/Packages";
import Users from "./pages/Users";
import Network from "./pages/Network";
import Settings from "./pages/Settings";
import { HomePassView, WorkPassView, UpriseView } from "./pages/PackageDetail";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
      case "dashboard":
      case "panorama":
        return <Dashboard />;

      case "Packages":
      case "packages":
        return <Packages setActivePage={setActivePage} />;

      case "Users":
      case "users":
      case "frontline":
        return <Users />;

      case "Signal Monitor":
      case "signal":
      case "Network":
        return <Network />;

      case "Settings":
        return <Settings />;

      case "homepass":
        return <HomePassView setActivePage={setActivePage} />;
      case "workpass":
        return <WorkPassView setActivePage={setActivePage} />;
      case "uprise":
        return <UpriseView setActivePage={setActivePage} />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
