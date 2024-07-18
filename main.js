import "./src/css/styles.css";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1 >Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
// define a function that sets min-height of my-element to window.innerHeight:

const setHeight = () => {
  document.getElementById("my-element").style.minHeight =
    window.innerHeight + "px";
};

// define mobile screen size:

let deviceWidth = window.matchMedia("(max-width: 1024px)");

if (deviceWidth.matches) {
  // set an event listener that detects when innerHeight changes:

  window.addEventListener("resize", setHeight);

  // call the function once to set initial height:

  setHeight();
}
