import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LatestProject() {
  const [activeFilter, setActiveFilter] = useState("All");
  // const filters = ["All", "MachineLearning", "Website", "Marketing"];

  const projects = [
    {
      id: 1,
      title: "Email Communication",
      description: "Machine Learning",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/8.-email-1.png",
      categories: ["Marketing", "Website"],
      area: "email"
    },
    {
      id: 2,
      title: "Moosa . rent a car",
      description: "Website Development",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/car-web.png",
      categories: ["Website", "Marketing"],
      area: "car"
    },
    {
      id: 3,
      title: "DLX Print",
      description: "Marketing",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/printing-marketing.png",
      categories: ["Marketing"],
      area: "print"
    },
    {
      id: 4,
      title: "Astock",
      description: "Machine Learning",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/1.-stock-trading.png",
      categories: ["MachineLearning", "Website"],
      area: "stock"
    },
    {
      id: 5,
      title: "MIKYAJY",
      description: "Marketing",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/marketing-2.png",
      categories: ["Marketing", "Website"],
      area: "seo"
    },
    {
      id: 6,
      title: "Sheba.xyz",
      description: "Website Development",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/house-web-2.png",
      categories: ["MachineLearning"],
      area: "house"
    }
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  const ProjectCard = ({ project }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`break-inside-avoid  w-full group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
        ${
          project.area === "stock" 
            ? "h-[250px] sm:h-[400px] md:h-[350px] lg:h-[360px]" // Stock remains same
            : project.area === "house"
            ? "h-[250px] sm:h-[400px] md:h-[350px] lg:h-[420px] lg:mt-[-60px]" // Sheba.xyz - taller and shifted up
            : project.area === "print"
            ? "h-[250px] sm:h-[400px] md:h-[350px] lg:h-[300px] " // DLX Print - shorter
            : "h-[250px] sm:h-[400px] md:h-[350px] lg:h-[360px]"
        }`}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={project.image}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div
        className="absolute -bottom-5 left-12 bg-white p-4 rounded-sm shadow-lg transform translate-y-full group-hover:-translate-y-12 transition-transform duration-300 z-10"
        whileHover={{ scale: 1.03 }}
      >
        <div className="absolute left-0 -top-[19px] h-[20px] w-[20px] bg-white z-[-1] [clip-path:polygon(0_0,0%_100%,80%_100%)]" />
        <h3 className="font-medium text-xl text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="bg-secondary w-full md:py-32 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center mb-12 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="title2 mb-6"
          >
            Check our <span className="span">Completed  Projects</span>
          </motion.h1>

          {/* Filters */}
          {/* <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`py-2 rounded-full text-lg font-medium transition-colors ${
                  activeFilter === filter
                    ? "text-[#00ACE4]"
                    : "text-gray-500 hover:text-[#00ACE4]"
                }`}
              >
                {filter}
                <span className="px-1">/</span>
              </motion.button>
            ))}
          </div> */}
        </div>

        {/* 📱 Mobile View: 1 Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-mobile`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 px-6 lg:hidden"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 💻 Desktop View: Custom Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-desktop`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-x-0 gap-4 px-4 grid-cols-4 auto-rows-auto lg:grid hidden"
            style={{
              gridTemplateAreas: `
                "email car car print"
                "stock stock seo house"
              `,
              alignItems: "start"
            }}
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                style={{ 
                  gridArea: project.area,
                  alignSelf: project.area === "house" ? "start" : "stretch"
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 