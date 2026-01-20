import { RevealOnScroll } from "../components/reveal-onscroll";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "
    >
      <div className="text-center z-10 px-4">
        <RevealOnScroll variant="fadeInUp" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-primary bg-clip-text leading-right">
            Sorawiss
          </h1>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeInUp" delay={0.4}>
          <p className="text-primary/70 text-lg mb-2 max-w-lg mx-auto">
            "At the intersection of code, design, and the human experience.
            I'm driven by a desire to build systems that are both technically sound and emotionally intelligent."
          </p>

          <div className="Button flex w-fit mx-auto gap-2 ">
            <a target="_blank" href="https://drive.google.com/file/d/1wAcdu-XST-tuQr7pqVepPuQ5QMV4CLSh/view?usp=sharing" className="px-2 py-1 w-20 border border-primary/20 rounded-2xl cursor-pointer  hover:bg-gray-300 dark:hover:bg-gray-500
              transition-all duration-300 ">
              Resume
            </a>

            <a href="https://github.com/sorawiss" className="px-2 py-1 w-20 border border-primary/20 rounded-2xl cursor-pointer  hover:bg-gray-300 dark:hover:bg-gray-500
              transition-all duration-300 ">
              GitHub
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
