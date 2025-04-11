import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
      </p>
      <div className="flex justify-center items-center gap-5">
        <p className="font-bold text-6xl text-lightBrown"></p>
        <ExperienceInfo number="Built projects."/>
      </div>
      <p className="text-center">
      With experience in developing interactive web experiences and user-friendly applications, I focus on creating engaging user interactions.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
