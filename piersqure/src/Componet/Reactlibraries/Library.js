import React from "react";
import TextTransition, { presets } from "react-text-transition";

function Library() {
  const TEXTS = [
    "Sometimes later becomes never.DO IT NOW",
    "If you can dream it,you can achieve it",
    "Get motivated.Stay",
    // "into",
    // "Digital",
    // "Reality",
  ];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <h1
        // className="p-2"
        style={{
          color: "black",
          fontWeight: "bolder",
          fontFamily:"cursive",
          // marginLeft: 30,
          textShadow:"2px 2px 5px cyan",
        fontSize:"50px",
        //   width:"20px",
        //   paddingTop:2
        }}
      >
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    </>
  );
}

export default Library;
