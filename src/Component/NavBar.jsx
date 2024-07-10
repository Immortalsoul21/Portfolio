import { useState}from "react"
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai" //react-icons

const NavBar = () => {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className="text-gray-500 flex justify-between items-center  max-w-[1240px] mx-auto h-24 px-4 text-l">
            <h1 className="w-full text-3xl font-bold primary-color ml-4">Tushar</h1>
            <ul className="hidden md:flex">{/*hides the element by default displays as flexbox on medium screens and larger (the list)*/}
                <li className="p-2"><a href="#home">Home</a></li>
                <li className="p-2"><a href="#about">About</a></li>
                <li className="p-2"><a href="#work">Work</a></li>
                <li className="p-2"><a href="#experience">Experience</a></li>
                <li className="p-2"><a href="#contact">Contact</a></li>
            </ul>
        

        <div onClick={handleNav} className="block md:hidden"> {/*displays the element as block by defa */}
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        {/*after clicking icon */}
        <div className = {nav ?'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-300 bg-[#000300]':'fixed left-[-100%]'}>
        <h1 className="text-3xl primary-color m-4">Tushar</h1>
            <ul className="p-8 text-2l">{/*if screen size is big then it will show* else it will hide*/}
            <li className="p-2"><a href="#home">Home</a></li>
                <li className="p-2"><a href="#about">About</a></li>
                <li className="p-2"><a href="#work">Work</a></li>
                <li className="p-2"><a href="#experience">Experience</a></li>
                <li className="p-2"><a href="#contact">Contact</a></li>
            </ul>
    </div>
</div>
  )
}

export default NavBar
