import React from "react";
// import logo from "../logo.jpeg"; // Tell webpack this JS file uses this image
import logo from "./logo.jpeg"; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function LogoImage() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" width="200" height="100" />;
}

export default LogoImage;
