// pages/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { allProjects, appData } from "../../pages/serviceData";
import MobileApps from "../TechnologiesComponent/MobileApps";
import AppDesignFlowchart from "./AppDesignFlowchart";
import AppFeatures from "./AppFeatures";
import ContactUs from "../../pages/ContactUs";
import RelatedProject from "./RelatedProject";

function ProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2 className="text-center mt-20">Project not found</h2>;
  }

  return (
    <div className="lg:px-38 px-4 md:px-20 lg:py-18 py-4">
      {/* Hero */}
      <section className="flex flex-col lg:flex-row items-start lg:justify-between lg:gap-12 gap-4">
    
        <div className="lg:w-[50%] w-full space-y-4">
           <h1 className="text-4xl font-bold">{project.hero.title}</h1>
          <p className="text-lg text-primary">{project.hero.subtitle}</p>
        </div>
        <div className="lg:w-[50%] w-full bg-gray-300 p-2 rounded-md">
          <img
            className="rounded-md w-full"
            src={project.hero.image}
            alt={project.hero.title}
          />
        </div>
      </section>

      {/* Overview */}
      <section className="flex flex-col lg:flex-row items-start lg:gap-12 gap-4 mt-12">
        <div className="lg:w-[50%] w-full space-y-4 ">
          <h2 className="text-2xl font-bold">OverView</h2>
          <p className="lg:w-[70%] w-full text-primary">
            {project.overview.heading1}
          </p>
          <p className="lg:w-[70%] w-full text-primary">
            {project.overview.heading2}
          </p>
        </div>
        <div className="lg:w-[50%] w-full space-y-4">
          <h2 className="text-2xl font-bold">Project</h2>
          <ul className="space-y-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.overview.projectTitle.map((title, i) => (
              <li
                className="border border-gray-600 py-3 px-3 rounded-full text-center font-semibold"
                key={i}
              >
                {title}
              </li>
            ))}
          </ul>
          <div className="space-y-2 mt-8">
            <p className="text-lg text-primary ">
              <span className="text-black font-semibold">Location / </span>
              {project.overview.location}
            </p>
            <p className="text-lg text-primary">
              <span className="text-black font-semibold">Project / </span>
              {project.overview.project}
            </p>
            <p className="text-lg text-primary">
              <span className="text-black font-semibold">Category / </span>
              {project.overview.category}
            </p>
            <p className="text-lg text-primary">
              <span className="text-black font-semibold">Design By / </span>
              {project.overview.designBy}
            </p>
            <p className="text-lg text-primary">
              <span className="text-black font-semibold">Date / </span>
              {project.overview.Date}
            </p>
          </div>
        </div>
      </section>
      <div className="bg-secondary py-3 rounded-lg space-y-8 mt-12">
        <h2 className="text-2xl font-bold text-center">Technology Used</h2>
        <div>
          <MobileApps/>
        </div>
      </div>
      <AppDesignFlowchart/>
      <AppFeatures/>
      <ContactUs padding="lg:px-0 px-0" />
      <RelatedProject data={appData}/>
    </div>
  );
}

export default ProjectDetail;
