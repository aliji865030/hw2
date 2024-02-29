const heading = React.createElement("h1", {}, "Topics covered");
const paraFirst = React.createElement(
  "p",
  {},
  "The following is a list of all the topics we cover in the MDN learning area."
);
const aFirst = React.createElement(
  "a",
  { href: "https://legacy.reactjs.org/docs/getting-started.html" },
  "Getting started with the web"
);
const paraSecond = React.createElement(
  "p",
  { style: { marginLeft: "20px" } },
  "Provides a practical introduction to web development for complete beginners."
);
const aSecond = React.createElement(
  "a",
  { href: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
  "HTML-Structuring the web"
);
const paraThird = React.createElement(
  "p",
  { style: { marginLeft: "20px" } },
  `HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.`
);
const aThird = React.createElement(
  "a",
  { href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  "CSS-Styling the web"
);
const paraForth = React.createElement(
  "p",
  { style: { marginLeft: "20px" } },
  `CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.`
);

const DIV = React.createElement("div", { className: "content" }, [
  heading,
  paraFirst,
  aFirst,
  paraSecond,
  aSecond,
  paraThird,
  aThird,
  paraForth,
]);
ReactDOM.render(DIV, document.querySelector("#root"));
