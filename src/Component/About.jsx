import about4 from "../../src/assets/about4.jpeg";

const About = () => {
  return (
    <div className="bg-[#333333] py-10 text-white  h-auto " id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={about4}
              alt=""
              className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3"></div>
            <h3 className="text-4xl font-semibold mb-5">
              About<span className="primary-color">Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              Hello, my name is Tushar Mondal, a Computer Science and
              Engineering graduate from Visvesvaraya Technological University
              with a 9.0 CGPA. I am proficient in Python, PHP, and the MERN
              stack (MongoDB, Express.js, React, Node.js), and have practical
              experience with AWS from my internship at Pytheos Health Systems.
              Skilled in Git, GitHub, and Visual Studio Code, I have published
              research on salient object detection. As Secretary of the
              Humanitarian Club, I developed strong leadership skills and am
              dedicated to continuous learning and collaboration.
            </p>
          </div>
          <div className="flex ml-2 mt-10 items-center gap-7">
            <div className="p5-rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                5<span className="primary-color">+</span>{" "}
              </h3>
              <p className="md:text-2xl text-xl font-semibold text-white">
                Certifications
              </p>
            </div>
            <div className=" p5-rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                3<span className="primary-color">+</span>{" "}
              </h3>
              <p className="md:text-2xl text-xl font-semibold text-white">
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
