import React from "react";
import IconProps from "./types";

const ShieldBadge: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={15} cy={15} r={14.5} stroke="#FFB300" />
      <path
        d="M15 24a.55.55 0 01-.165-.026c-1.81-.57-3.35-1.666-4.578-3.256-.967-1.252-1.741-2.81-2.301-4.63C7.01 13.018 7 10.282 7 10.167c0-.276.212-.506.49-.533.042-.004 4.256-.43 7.191-2.532a.549.549 0 01.638 0c2.935 2.102 7.149 2.528 7.19 2.532.279.027.491.257.491.533 0 .115-.01 2.85-.956 5.921-.56 1.82-1.334 3.378-2.301 4.63-1.228 1.59-2.769 2.685-4.577 3.256A.549.549 0 0115 24zM8.1 10.636c.046.898.22 2.965.901 5.166 1.162 3.756 3.18 6.144 5.999 7.1 2.826-.959 4.846-3.354 6.006-7.124.676-2.197.85-4.249.894-5.142-1.216-.175-4.364-.767-6.9-2.449-2.536 1.682-5.684 2.274-6.9 2.449z"
        fill="#FFB300"
      />
      <path
        d="M14.71 18.105a.547.547 0 01-.353-.128l-1.961-1.654a.53.53 0 01-.06-.754.548.548 0 01.765-.06l1.525 1.287 3.024-3.91a.548.548 0 01.76-.102.53.53 0 01.103.75l-3.372 4.36a.544.544 0 01-.431.211z"
        fill="#FFB300"
      />
    </svg>
  );
};

export default React.memo(ShieldBadge);
