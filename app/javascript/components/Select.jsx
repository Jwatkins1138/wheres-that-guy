import React, { useState, useEffect } from 'react'

const Select = () => {

  const [levels, setLevels] = useState([]);
  const loadLevels = () => {
    const url = "api/v1/levels/index";
    var tempLevels = [];
    fetch(url)
      .then((data) => {
        if (data.ok) {
          console.log(data);
          return data.json();
        }
      throw new Error("network error");
      })
      .then((data) => {
        data.forEach((level) => {
          console.log(level.name);
          tempLevels.push(level.name);
          setLevels(tempLevels);
        })
      })
    console.log(tempLevels);  
    
    console.log(levels);  
  };

  useEffect(() => {
    loadLevels();
  }, [])


  return (
    <div>
      <h2>hello from select</h2>
      <div>{levels}</div>
    </div>
  )
}


export default Select;