import React from "react";
import TextTransition, { presets } from "react-text-transition";

function Library() {
  const TEXTS = [
    // "If you obey all the rules, you miss all the fun ―Katharine Hepburn",
    // "Start each day with a positive thought and a grateful heart. ― Roy T. Bennett",
    // "o what is right, not what is easy nor what is popular. ― Roy T. Bennett ",
    // "into",
    // "Digital",
    // "Reality",
    "Development !",
    "Development !",
    "Development !"
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
        className="d-flex align-items-center justify-content-center"
        style={{
          color: "black",
          fontWeight: "bolder",
          fontFamily: "cursive",
          // marginLeft: 30,
          textShadow: "2px 2px 2px cyan",
          fontSize: "20px",
          marginTop:"5%"
     
          //   width:"20px",
          //   paddingTop:2
        }}
      >
        <TextTransition springConfig={presets.wobbly}>
          <p>{TEXTS[index % TEXTS.length]}&#128187;</p>
        </TextTransition>
      </h1>
    </>
  );
}

export default Library;
