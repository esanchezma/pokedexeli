import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeDark } from "../../store/slice/isDark.slice";

const Settings = () => {        
    const dispatch = useDispatch();
    const [isDark, setisDark] = useState(true);    
  return (
    <div >       
      <h3 className="title">Theme</h3>
      <div >
        <span>Light</span>
          <input 
          type="checkbox" 
          value={isDark}
          onChange={(e) => dispatch(changeDark(e.target.value))}

          />
        <span>Dark</span>
      </div>
    </div>
  );
};

export default Settings;