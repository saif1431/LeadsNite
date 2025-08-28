import React from "react";
import { useParams } from "react-router-dom";
import { allProjects ,appData } from "./../../pages/serviceData";
import RelatedProject from "../AppComponents/RelatedProject";
import MobileApps from "../TechnologiesComponent/MobileApps";
import ContactUs from "../../pages/ContactUs";
import Template1 from "./Template1";
import AppDesignFlowchart from "../AppComponents/AppDesignFlowchart";
function MlProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2 className="text-center mt-20">Project not found</h2>;
  }

  return (
    <div className="px-4  lg:px-48 md:px-20 py-18 ">
      {/* Hero */}
     <section className=" flex flex-col lg:flex-row items-start lg:justify-between   lg:gap-22 gap-4">
      <div className="lg:w-[35%] w-full space-y-4"> 
              <h1 className="lg:text-4xl text-3xl leading-tight font-bold">{project.hero.title}</h1>
        <p className="text-lg text-primary text-justify">{project.hero.subtitle}</p>
      </div>
     <div className="lg:w-[65%] w-full bg-gray-200 p-2 rounded-md">
         <img className="rounded-md h-[600px] object-cover w-full" src={project.hero.image} alt={project.hero.title} />

     </div>
      </section>


      {/* Overview */}
      <section className="flex flex-col lg:flex-row items-start  lg:gap-12 justify-between gap-4 mt-12">
       <div className="lg:w-[50%] w-full space-y-4 ">
            <h2 className="text-2xl font-bold">OverView</h2>
            <p className="lg:w-[70%] w-full text-lg text-primary">{project.overview.heading1}</p>
               <p className="lg:w-[70%] w-full text-primary text-lg">{project.overview.heading2}</p>
       </div>
       <div className="lg:w-[50%] w-full space-y-4">
            <h2 className="text-2xl font-bold">Project</h2>
         <ul className="space-y-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
           {project.overview.projectTitle.map((title, i) => (
             <li className=" border border-gray-600  py-3 px-3 rounded-full text-center font-semibold" key={i}>{title}</li>
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
<div className="w-full mt-12 h-screen">
     <img className="object-cover w-full h-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFjaGluZSUyMExlYXJuaW5nfGVufDB8fDB8fHww" alt="" />
</div>

<div className="bg-secondary py-3 rounded-lg space-y-8 mt-12">
        <h2 className="text-2xl font-bold text-center">Technology Used</h2>
        <div>
          <MobileApps/>
        </div>
      </div>
    <Template1/>

      <ContactUs padding="lg:px-0 px-0" />
      <RelatedProject data={appData}/>
      
    </div>
  );
}

export default MlProjectDetail
