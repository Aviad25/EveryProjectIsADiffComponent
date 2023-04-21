import { useEffect, useState } from 'react';
import './BoxAnimationCss13.2.css'






const Box = ({ removeBox }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeBox();
    }, 4000);

    return () => clearTimeout(timer);
  }, [removeBox]);

  return <div className="box"></div>;
};

export default Box;


