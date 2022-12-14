import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={10}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.942.307c.049.047.255.225.425.39 1.07.972 2.82 3.505 3.354 4.83.086.202.267.71.279.983 0 .26-.06.509-.182.746-.17.295-.437.532-.753.662-.22.084-.875.214-.887.214-.717.13-1.883.201-3.171.201-1.228 0-2.346-.071-3.074-.178-.012-.012-.827-.142-1.106-.284C.317 7.611 0 7.101 0 6.557V6.51c.013-.355.33-1.101.34-1.101C.877 4.155 2.54 1.68 3.647.686c0 0 .284-.28.462-.402.255-.19.57-.284.886-.284.353 0 .681.106.949.307Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
