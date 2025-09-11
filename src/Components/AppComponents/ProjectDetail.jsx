import React from "react";
import { useParams } from "react-router-dom";
import { allProjects ,appData } from "./../../pages/serviceData";
import RelatedProject from "../AppComponents/RelatedProject";
import MobileApps from "../TechnologiesComponent/MobileApps";
import AppFeatures from "../AppComponents/AppFeatures";
import ContactUs from "../../pages/ContactUs";
function ProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2 className="text-center mt-20">Project not found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto md:px-8 lg:py-12 px-4 w-full  ">
      {/* Hero */}
     <section className=" flex flex-col lg:flex-row items-start lg:justify-between   lg:gap-16 gap-4">
      <div className="lg:w-[25%] lg:h-[550px] overflow-hidden  w-full space-y-4"> 
              <h1 className="lg:text-3xl text-2xl leading-tight font-bold">{project.hero.title}</h1>
        <p className="text-lg text-primary text-justify">{project.hero.subtitle}</p>
      </div>
     <div className="lg:w-[75%] w-full bg-gray-200 p-2 rounded-md">
         <img className="rounded-md h-[530px] object-cover w-full" src={project.hero.image} alt={project.hero.title} />

     </div>
      </section>



      {/* Overview */}
      <section className="flex flex-col lg:flex-row items-start  lg:gap-12 justify-between gap-4 mt-20">
       <div className="lg:w-[50%] w-full space-y-4 ">
            <h2 className="text-2xl font-bold">OverView</h2>
            <p className="lg:w-[70%] w-full text-lg text-primary">{project.overview.heading1}</p>
               <p className="lg:w-[70%] w-full text-primary text-lg">{project.overview.heading2}</p>
       </div>
       <div className="lg:w-[50%] w-full space-y-4">
            <h2 className="text-2xl font-bold">Project</h2>
         <ul className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {project.overview.projectTitle.map((title, i) => (
             <li style={{borderRadius: '9999px'}} className=" btn  rounded-full text-center font-semibold" key={i}>{title}</li>
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


<div className="bg-secondary py-5 rounded-lg space-y-8 mt-20">
        <h2 className="lg:text-4xl text-2xl font-bold text-center">Technology Used</h2>
        <div>
          <MobileApps/>
        </div>
      </div>
    
      <AppFeatures/>
      <ContactUs padding="lg:px-0 px-0" />
      <RelatedProject data={appData}/>
      
    </div>
  );
}

export default ProjectDetail;
