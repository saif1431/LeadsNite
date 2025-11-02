// pages/WebServices.jsx
import React from "react";

import { appData, webData } from "./serviceData";
import ServiceLayout from "./ServiceLayout";
import RelatedProject from "../Components/AppComponents/RelatedProject";
import MobileApps from "../Components/TechnologiesComponent/MobileApps";
import AppDesignFlowchart from "../Components/AppComponents/AppDesignFlowchart";
import AppFeatures from "../Components/AppComponents/AppFeatures";
import contactUs from "./contactUs";

function AppDevelopmentPage() {
  return <div className="lg:px-38 px-4 md:px-20 lg:py-18 py-4">
      <ServiceLayout data={appData} />
      <div className="bg-secondary py-3 rounded-lg space-y-8 mt-12">
        <h2 className="text-2xl font-bold text-center">Technology Used</h2>
        <div>
          <MobileApps/>
        </div>
      </div>
      <AppDesignFlowchart/>
      <AppFeatures/>
      <contactUs padding="lg:px-0 px-0" />
      <RelatedProject data={appData}/>
  </div>;
}
export default AppDevelopmentPage;

