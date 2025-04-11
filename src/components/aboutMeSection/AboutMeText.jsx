import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I'm an enthusiastic fresher eager to immerse myself in the world of web development. 
      I have built a solid foundation in technologies such as HTML, CSS, JavaScript, and React. 
      I enjoy the process of transforming design concepts into interactive and responsive digital experiences. 
      Continuously learning and adapting, I view each project as an opportunity to grow my skills and creativity. 
      Excited to bring fresh perspectives and energy to any team, I'm ready to contribute and innovate in this dynamic field.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
