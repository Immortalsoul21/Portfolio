

function Contact() {
  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id="contact">
        <div className="max-w-[1200px] mx-auto">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    
                    <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
                        <h1 className="text-4xl sm:text-5xl text-white">Contact <span>Me</span>
                        </h1>
                        <p className="text-white py-4">Let's Connect on LinkedIn <br/> or send me an Email </p>
                        <div className="flex items-center mt-2 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z "/></svg>{/*svg to show email icon */}
                            <div className="ml-4 text-md tracking-wide w-40">
                                <p>Tushar</p>
                            </div>
                        </div>
                    </div>
                    <form action="https://getform.io/f/blljjkmb" method="POST" className="p-6 flex-col justify-center max-w-[700px]">
                        <div className="flex flex-col">
                           <input type="name" name="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#ccd6f6]"/>
                        </div>
                        <div className="flex flex-col">
                           <input type="email" name="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#ccd6f6]"/>

                        </div>
                        <div className="flex flex-col">
                           <textarea name="message" placeholder="Your Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#ccd6f6]"/> 
                        </div>
                        <button className=" bg-primary color text-white py-3 px-6 rounded-lg mt-3 bg-[#6b2b72] w-full ">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact