// pages/WebServices.jsx
import React from "react";

import { webData } from "./serviceData";
import ServiceLayout from "./ServiceLayout";
import Websites from "../Components/TechnologiesComponent/Websites";

function WebDevelopmentPage() {
  return <div className="lg:px-38 px-4 md:px-20 lg:py-18 py-4">
    <ServiceLayout data={webData} />
    <div className="bg-secondary py-3 rounded-lg space-y-8 mt-12">
        <h2 className="text-2xl font-bold text-center">Technology Used</h2>
        <div>
          <Websites/>
        </div>
      </div>
  </div>;
}


export default WebDevelopmentPage;
