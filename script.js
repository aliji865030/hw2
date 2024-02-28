function Randerdata() {
  return (
    <div class="container">
      <h1>Topics covered</h1>
      <p>
        The following is a list of all the topics we cover in the MDN learning
        area.
      </p>
      <p>
        <a href="https://legacy.reactjs.org/docs/getting-started.html">
          Getting started with the web
        </a>
      </p>
      <p class="left">
        Provides a practical introduction to web development for complete
        beginners.
      </p>
      <p>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">
          HTML-Structuring the web
        </a>
      </p>
      <p class="left">
        HTML is the language that we use to structure the different parts of our
        content and define what their meaning or purpose is. This topic teaches
        HTML in detail.
      </p>
      <p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          CSS-Styling the web
        </a>
      </p>
      <p class="left">
        CSS is the language that we use to control our web content's style and
        layout, as well as adding behavior like animation. This topic provides
        comprehensive coverage of CSS.
      </p>
    </div>
  );
}

ReactDOM.render(<Randerdata />, document.querySelector("#root"));
