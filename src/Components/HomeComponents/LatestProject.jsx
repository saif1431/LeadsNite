import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LatestProject() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "MachineLearning", "Website", "Marketing"];

  // Project data with varying aspect ratios
  const projects = [
    {
      id: 1,
      title: "Email Communication",
      description: "Machine Learning",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/8.-email-1.png",
      categories: ["Marketing", "Website"],
      aspect: "aspect-[4/3]"
    },
    {
      id: 2,
       title: "MIKYAJY",
      description: "Marketing",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/marketing-2.png",
      categories: ["Marketing", "Website"],
      aspect: "aspect-[3/2]"
    },
    {
      id: 3,
      title: "Moosa . rent a car",
      description: "Website Development",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/car-web.png",
      categories: ["Website", "Marketing"],
      aspect: "aspect-[3/4]"
    },
    {
      id: 4,
      title: "Astock",
      description: "Machine Learning",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/1.-stock-trading.png",
      categories: ["MachineLearning", "Website"],
      aspect: "aspect-square"
    },
    {
      id: 5,
      title: "DLX Print",
      description: "Marketing",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/printing-marketing.png",
      categories: ["Marketing"],
      aspect: "aspect-[4/3]"
    },
    {
      id: 6,
      title: "Sheba.xyz",
      description: "Website Develoopment",
      image: "https://leadsnite.com/wp-content/uploads/2024/03/house-web-2.png",
      categories: ["MachineLearning"],
      aspect: "aspect-[5/4]"
    },
  ];

  const filteredProjects = 
    activeFilter === "All" ? projects : projects.filter(p => p.categories.includes(activeFilter));

  const ProjectCard = ({ project }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`break-inside-avoid mb-6 ${project.aspect}`}
    >
      <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        {/* Image with Scaling Effect */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={project.image} // Important for animation
        />
        
        {/* Black Shadow Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Info Box with Triangle Pointer */}
        <motion.div 
          className="absolute w-[60%] -bottom-5 left-12 bg-white p-4 rounded-sm shadow-lg transform translate-y-full group-hover:-translate-y-12 transition-transform duration-300 z-10"
          whileHover={{ scale: 1.03 }}
        >
          <div className="absolute left-0 -top-[19px] h-[20px] w-[20px] bg-white z-[-1] [clip-path:polygon(0_0,0%_100%,80%_100%)]" />
          <h3 className="font-medium text-xl text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-secondary w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6 md:mb-0"
          >
            Check our latest & Completed Projects
          </motion.h2>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter 
                    ? "text-[#00ACE4]" 
                    : "text-gray-500 hover:text-[#00ACE4]"
                }`}
              >
                {filter}
                <span className="px-1">/</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Masonry Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter} // Triggers animation on filter change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6"
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}