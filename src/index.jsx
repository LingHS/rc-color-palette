import React from "react";
import { render } from "react-dom";
import ColorPalettes from "./components/rc-color-palettes";

render(
  <ColorPalettes
  // onChange={(c) => {
  //   console.log(c);
  // }}
  />,
  document.getElementById("root")
);
