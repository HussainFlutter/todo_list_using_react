import React from "react";

const Nav_Bar = () => {
  return (
    <nav className="bg-slate-300 h-7 p-8 flex flex-row justify-between items-center">

      <div className="font-bold inline mx-10">iTodo</div>

      <div className="flex flex-row gap-5 mx-10">
        <a href="">Home</a>
        <a href="">Your Tasks</a>
      </div>

    </nav>
  );
};

export default Nav_Bar;
