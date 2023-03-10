import React from "react";

function CitiesButton({setCity}) {
  const cities = [
    {
      id: 1,
      title: "New York",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Sydney",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "London",
    },
  ];

  return <div className="flex items-center justify-around my-6 ">
  {cities.map((item)=>(
    <button onClick={()=>setCity({ q:item.title })} key={item.id} className="text-white text-lg transition ease-out hover:scale-110">{item.title}</button>
  ))}  
  </div>;
}

export default CitiesButton;
