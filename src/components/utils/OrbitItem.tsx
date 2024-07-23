"use client"

import React from 'react'

interface OrbitItemProps {
    orbitImage: string;
    className?: string;
    setHoverTech?: React.Dispatch<React.SetStateAction<string>>;
    tech?: string;
}
function OrbitItem({orbitImage, className = "orbit_md", setHoverTech, tech} : OrbitItemProps) {

  const hoverHandler = () => {
    if (setHoverTech) {
      setHoverTech(tech || "");
    }
  }

  return (
    <div className={"orbit-item " + className} onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
        <img src={orbitImage} alt="orbit-image"/>
    </div>
  )
}

export default OrbitItem