import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProjects, webData } from "./../../pages/serviceData";
import RelatedProject from "../AppComponents/RelatedProject";
import MobileApps from "../TechnologiesComponent/MobileApps";
import AppDesignFlowchart from "../AppComponents/AppDesignFlowchart";
import ScrollImageBoxGrid from "../../ResuseableComponents/ScrollHover";
import ContactUs from "../../pages/ContactUs";

function WebCardDetail() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) {
    return <h2 className="text-center mt-20">Project not found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto md:px-8 lg:py-12 px-4 w-full">
      {/* Hero */}
      <section className="mt-12 flex flex-col lg:flex-row items-start lg:justify-between lg:gap-22 gap-4 md:gap-15">
        <div className="lg:w-[25%] lg:h-[550px] overflow-hidden w-full space-y-4">
          <h1 className="lg:text-3xl text-2xl leading-tight font-bold">
            {project.hero.title}
          </h1>
          <p className="text-lg text-primary text-justify">
            {project.hero.subtitle}
          </p>
        </div>
        <div className="lg:w-[75%] w-full bg-gray-200 p-2 rounded-md">
          <img
            className="rounded-md lg:h-[530px] md:h-[380px] h-[230px] object-cover w-full cursor-pointer hover:opacity-90 transition-opacity"
            src={project.hero.image}
            alt={project.hero.title}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-black text-4xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>
          <img
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            src={project.hero.image}
            alt={project.hero.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Overview */}
      <section className="flex flex-col lg:flex-row items-start lg:gap-12 justify-between gap-4 lg:mt-28 mt-16">
        <div className="lg:w-[50%] w-full space-y-4">
          <h2 className="text-2xl font-bold">OverView</h2>
          <p className="lg:w-[70%] w-full text-lg text-primary">
            {project.overview.heading1}
          </p>
          <p className="lg:w-[70%] w-full text-primary text-lg">
            {project.overview.heading2}
          </p>
        </div>
        <div className="lg:w-[50%] w-full mt-6 space-y-4">
          <h2 className="text-2xl font-bold">Project</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {project.overview.projectTitle.map((title, i) => (
              <li
                style={{ borderRadius: "9999px" }}
                className="btn py-3 px-3 rounded-full text-center text-nowrap font-semibold"
                key={i}
              >
                {title}
              </li>
            ))}
          </ul>
          <div className="space-y-2 mt-8">
            <p className="text-lg text-primary">
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

      <div className="border-t border-gray-300 border-b py-5 rounded-lg space-y-8 mt-24">
        <h2 className="lg:text-4xl text-2xl font-bold text-center">
          Technology Used
        </h2>
        <div>
          <MobileApps />
        </div>
      </div>
      <ScrollImageBoxGrid />
      <AppDesignFlowchart />

     <div className="mt-16">
        <ContactUs padding="lg:px-0 px-0 " />
      </div>
      <RelatedProject data={webData} />
    </div>
  );
}

export default WebCardDetail;