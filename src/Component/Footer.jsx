import { FaGithubSquare,FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center" id="contact">
     <p className="my-5 text-gray-500">
        Tushar Mondal<br />
        Engineering Intern<br />
        Email: tushar.m@humanfractal.io<br />
        Phone: 701-934-3703
      </p>
    <div className="inline-flex text-gray-500 text-3xl space-x-4">
      <FaGithubSquare className="text-4xl" />
      <FaInstagram className="text-4xl" />
    </div>
  </div>
  )
}

export default Footer