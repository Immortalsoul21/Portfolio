import pro1 from "../../src/assets/proj1.png";
import pro2 from "../../src/assets/proj3.png";

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
  <a
    href="/"
    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
  >
    <img
      src={pro1}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>{/*create a gradient overlay effect on the image. This gradient overlay helps in achieving a visual effect where the image appears to fade from a darker shade at the bottom to a transparent one at the top  */}
  </a>
  
  
</div>

    </div>
  );
};

export default Work;
