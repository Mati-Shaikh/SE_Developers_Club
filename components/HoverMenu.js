'use client';
const HoverMenu = ({ items }) => {
    return (
      <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-48">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item}
          </a>
        ))}
      </div>
    )
  }
  
  export default HoverMenu