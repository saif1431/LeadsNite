import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProjects ,appData } from "./../../pages/serviceData";
import RelatedProject from "../AppComponents/RelatedProject";
import MobileApps from "../TechnologiesComponent/MobileApps";

import AppDesignFlowchart from "../AppComponents/AppDesignFlowchart";
import ChallengesSolutions from "./ChallengesSolutions";
import ContactUs from "../../pages/ContactUs";
function MlProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  if (!project) {
    return <h2 className="text-center mt-20">Project not found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto lg:py-12 md:px-8 px-4 w-full">
      {/* Hero */}
     <section className="mt-12 flex flex-col lg:flex-row items-start lg:justify-between   lg:gap-16 gap-4 md:gap-12">
      <div className="lg:w-[25%] lg:h-[550px] w-full space-y-4"> 
              <h1 className="lg:text-3xl text-2xl leading-tight font-bold">{project.hero.title}</h1>
        <p className="text-lg text-primary text-justify">{project.hero.subtitle}</p>
      </div>
     <div className="lg:w-[75%] w-full bg-gray-200 p-2 rounded-md">
         <img
          onClick={() => setIsModalOpen(true)}
         className="rounded-md lg:h-[530px] md:h-[300px] h-[200px] object-cover w-full" src={project.hero.image} alt={project.hero.title} />

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
      <section className="flex flex-col lg:flex-row items-start  lg:gap-12 justify-between gap-4 mt-28">
       <div className="lg:w-[50%] w-full space-y-4 ">
            <h2 className="text-2xl font-bold">OverView</h2>
            <p className="lg:w-[70%] w-full text-lg text-primary">{project.overview.heading1}</p>
               <p className="lg:w-[70%] w-full text-primary text-lg">{project.overview.heading2}</p>
       </div>
       <div className="lg:w-[50%] w-full space-y-4">
            <h2 className="text-2xl font-bold">Project</h2>
         <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
           {project.overview.projectTitle.map((title, i) => (
             <li  style={{borderRadius: "9999px", }} className=" btn  rounded-full  text-center font-semibold text-nowrap" key={i}>{title}</li>
           ))}
         </ul>
         <div className="space-y-2 mt-8">
            <p className="text-lg text-primary "><span className="text-black font-semibold">Location /  </span> {project.overview.location}</p>
            <p className="text-lg text-primary"><span className="text-black font-semibold">Project / </span> {project.overview.project}</p>
            <p className="text-lg text-primary"><span className="text-black font-semibold">Category / </span> {project.overview.category}</p>
            <p className="text-lg text-primary"><span className="text-black font-semibold">Design By / </span> {project.overview.designBy}</p>
            <p className="text-lg text-primary"><span className="text-black font-semibold">Date / </span> {project.overview.Date}</p>
         </div>
       </div>
      </section>
<div className="w-full space-y-8 h-[70%] mt-28 ">
  <h2 className="lg:text-4xl text-2xl font-bold text-center">WorkFlow</h2>
     <img
     onClick={() => setIsModalOpen2(true)}
     className="object-cover w-full h-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFjaGluZSUyMExlYXJuaW5nfGVufDB8fDB8fHww" alt="" />
</div>

   {/* Image Modal */}
      {isModalOpen2 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-90 p-4"
          onClick={() => setIsModalOpen2(false)}
        >
          <button
            className="absolute top-4 right-4 text-black text-4xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={() => setIsModalOpen2(false)}
          >
            ×
          </button>
          <img
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFjaGluZSUyMExlYXJuaW5nfGVufDB8fDB8fHww" alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

<div className="border-t border-gray-300 border-b py-5 rounded-lg space-y-8 mt-24">
        <h2 className="lg:text-4xl text-2xl font-bold text-center">Technology Used</h2>
        <div>
          <MobileApps/>
        </div>
      </div>
    <ChallengesSolutions/>

      <ContactUs padding="lg:px-0 px-0 mt-16" />
      <RelatedProject data={appData}/>
      
    </div>
  );
}

export default MlProjectDetail
