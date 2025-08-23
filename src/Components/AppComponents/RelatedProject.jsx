import { Link, useNavigate } from "react-router-dom";

function RelatedProject({ data }) {
        const navigate = useNavigate();

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-center mb-6 font-bold">Related Projects</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.relatedProjects.map((relatedProject) => (
          <div
            className="flex flex-col bg-white rounded-md items-start shadow-lg py-12 gap-4"
            key={relatedProject.id}
          >
            <img
              className="rounded-md"
              src={relatedProject.image}
              alt={relatedProject.title}
            />
            <div className="px-6 space-y-4">
              <h3 className="text-2xl font-semibold">{relatedProject.title}</h3>

              {/* Project Detail Link */}
              <button
                className="btn font-semibold"
                
                onClick={() => 
                {
window.scrollTo(0, 0);
                      navigate(`/projects/${relatedProject.id}`)}
                  }
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default RelatedProject;
