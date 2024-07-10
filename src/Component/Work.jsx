import pro1 from "../../src/assets/proj1.png";
import pro2 from "../../src/assets/proj3.png";
import Cards from "./Cards";
import data from "./data";



// eslint-disable-next-line react/prop-types
const Work = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Projects</span>
            </h2>
            <p className="text-gray-500"> This are my latest Projects</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 px-9 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
 {data.map((element) => <Cards key={element.id} id={element.id} link={element.link} img={element.img} />)}
    
  
  
</div>

    </div>
  );
};

export default Work;
