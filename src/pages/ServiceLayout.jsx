// Components/ServiceLayout.jsx
import React from "react";

function ServiceLayout({ data }) {
  return (
    <div className="">
      {/* Hero Section */}
      <section className=" flex flex-col lg:flex-row items-start lg:justify-between  lg:gap-12 gap-4">
      <div className="lg:w-[50%] w-full space-y-4"> 
              <h1 className="lg:text-4xl text-3xl leading-tight font-bold">{data.hero.title}</h1>
        <p className="text-lg text-primary">{data.hero.subtitle}</p>
      </div>
     <div className="lg:w-[50%] w-full bg-gray-300 p-2 rounded-md">
         <img className="rounded-md w-full" src={data.hero.image} alt={data.hero.title} />
        
     </div>
      </section>


      {/* Overview */}
      <section className="flex flex-col lg:flex-row items-start  lg:gap-12 gap-4 mt-12">
       <div className="lg:w-[50%] w-full space-y-4 ">
            <h2 className="text-2xl font-bold">OverView</h2>
            <p className="lg:w-[70%] w-full text-primary">{data.overview.heading1}</p>
               <p className="lg:w-[70%] w-full text-primary">{data.overview.heading2}</p>
       </div>
       <div className="lg:w-[50%] w-full space-y-4">
            <h2 className="text-2xl font-bold">Project</h2>
         <ul className="space-y-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
           {data.overview.projectTitle.map((title, i) => (
             <li className=" border border-gray-600  py-3 px-3 rounded-full text-center font-semibold" key={i}>{title}</li>
           ))}
         </ul>
         <div className="space-y-2 mt-8">
            <p className="text-lg text-primary "><span className="text-black font-semibold">Location /  </span> {data.overview.location}</p>
            <p className="text-lg text-primary"><span className="text-black font-semibold">Project / </span> {data.overview.project}</p>
            <p className="text-lg text-primary"><span className="text-black font-semibold">Category / </span> {data.overview.category}</p>
            <p className="text-lg text-primary"><span className="text-black font-semibold">Design By / </span> {data.overview.designBy}</p>
            <p className="text-lg text-primary"><span className="text-black font-semibold">Date / </span> {data.overview.Date}</p>
         </div>
       </div>
      </section>
    </div>
  );
}

export default ServiceLayout;
