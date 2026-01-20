import { RevealOnScroll } from "../components/reveal-onscroll";
import Project from "../components/project-block";

import projectData from "../store/project-data";



export default function PersonalProjects() {


  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-[8rem]"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((items, index) => (
            <RevealOnScroll
              key={items.id}
              variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={1 + (index * 0.2)}
            >
              <Project
                title={items.title}
                description={items.description}
                URL={items.URL}
                github={items.github}
                skill={items.skill}
              />

            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
