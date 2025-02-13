import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const About = () => {
  const [clr, setClr] = useState("red");
  const storeName = useSelector((store) => store.testSlice.data);
  useEffect(() => {
    console.log("called", clr);
    if (clr == "red") {
      setTimeout(() => setClr((prevState) => updateSignal(prevState)), 4000);
    } else if (clr == "yellow") {
      setTimeout(() => setClr((prevState) => updateSignal(prevState)), 500);
    } else if (clr == "green") {
      setTimeout(() => setClr((prevState) => updateSignal(prevState)), 3000);
    }
  }, [clr]);

  const updateSignal = (prevState) => {
    console.log(prevState);
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
