import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const About = () => {
  const [clr, setClr] = useState("green");
  const storeName = useSelector((store) => store.testSlice.data);
  useState(() => {
    const interval = setInterval(() => {
      console.log("called", setClr);
      setClr((prevState) => updateSignal(prevState));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const updateSignal = (prevState) => {
    if (prevState == "red") {
      return "yellow";
    } else if (prevState == "yellow") {
      return "green";
    } else return "red";
  };
  return (
    <div>
      <div
        className="signal"
        style={{ background: clr == "red" ? "red" : "lightgray" }}
      ></div>
      <div
        className="signal"
        style={{ background: clr == "yellow" ? "yellow" : "lightgray" }}
      ></div>
      <div
        className="signal"
        style={{ background: clr == "green" ? "green" : "lightgray" }}
      ></div>
      {storeName}
    </div>
  );
};

export default About;
