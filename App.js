import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import Sidebar from "./src/components/Sidebar";
import { useContext, useState } from "react";
import TabContext from "./src/context/TabContext";

const App = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <TabContext.Provider value="">
      <div key={2}>
        <Navbar />
        <div className="grid-cols-3 h-[25%] flex">
          <TabContext.Provider value={{ activeTab, setActiveTab }}>
            <Sidebar />
            <Hero />
          </TabContext.Provider>
        </div>
      </div>
    </TabContext.Provider>
  );
};

export default App;
