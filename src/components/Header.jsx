import React from "react";
import Toggle from './Toggle';

const Header = ({ darkMode, onClick}) => {
  return (
    <>
      <div className="header">
        <h1>ReactHooks</h1>
        <Toggle darkMode={darkMode} onClick={onClick}>
          {/* {darkMode ? "Dark Mode" : "Light Mode"} */}
        </Toggle>
      </div>
      <style jsx="true">
        {`
        
        `}
      </style>
    </>
  );
};

export default Header;
