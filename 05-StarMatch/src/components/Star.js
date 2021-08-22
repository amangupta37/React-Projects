import React, { useEffect, useState } from "react";

const Star = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    for (let i = 1; i < Math.floor(Math.random() * 9) + 1; i++) {
      setstate((val) => [...val, i]);
      console.log(i);
    }
  }, []);

  return (
    <div className="star">
      {state.map((val) => {
        return (
          <div className="starlogo" key={val}>
            <img
              src="https://img.icons8.com/fluency/240/000000/star.png"
              alt=""
            />
            {val}
          </div>
        );
      })}
    </div>
  );
};

export default Star;
