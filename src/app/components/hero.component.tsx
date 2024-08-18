import React from "react";

interface Props {}

export const Hero: React.FC<Props> = (props) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center overflow-hidden">
      <div className="text-center text-cadesi-font">
        <img src={'https://res.cloudinary.com/otfusion/image/upload/v1723948202/Cadesi_fnrfyg.png'} className="h-auto w-full object-cover"/>
      </div>
    </div>
  );
}