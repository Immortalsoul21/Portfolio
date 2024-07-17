

const Experience=()=> {
  return (
    <div className="pt-10 pb-10 bg-[#232325]" id="experience">
        <h2 className="mb-8  text-3xl text-white text-center">My <span> Experience</span></h2>

        <div className="sm:px-10 mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>BNV Softwares Pvt Ltd</p>
        <p className="text-gray-400">(March 2024 - May 2024)</p>
        <p className="text-gray-500">
        Developed an ERP system module using HTML, CSS,JS,PHP,SQL and MVC architecture.
        </p>
        </div>
        <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>
        <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>Pytheos Health Systems Pvt Ltd</p>
        <p className="text-gray-400">(May 2024 - Present)</p>
        <p className="text-gray-500">
        Developed a module for the Healthcare Assistant Portal using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented back-end services and APIs, deployed on AWS with Amplify, and managed data with AWS DynamoDB and Dynamoose. Utilized AWS S3 for storage and collaborated with the team using AWS CodeCommit for version control.
        </p>
        </div>
        

    </div>
  )
}

export default Experience