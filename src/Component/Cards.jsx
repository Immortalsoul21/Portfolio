import React from 'react'

function Cards({id,link,img}) {
  return (
    <div>
        <a
    key={id}
    // eslint-disable-next-line react/prop-types
    href={link}
    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
  >
    <img
      // eslint-disable-next-line react/prop-types
      src={img}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>{/*create a gradient overlay effect on the image. This gradient overlay helps in achieving a visual effect where the image appears to fade from a darker shade at the bottom to a transparent one at the top  */}
  </a></div>
  )
}

export default Cards