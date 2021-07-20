import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// useLocation detects everytime we change our url

const ScrollTop = () => {
  // const {location} = useLocation();
  // console.log(location);
  const { pathname } = useLocation();
  //console.log(pathname);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
