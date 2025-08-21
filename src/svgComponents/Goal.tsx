import type { SVGProps } from "react";
const SvgGoal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    className="goal_svg__icon goal_svg__line-color"
    data-name="Line Color"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="m15 9-2.5 2.5M15 6v3h3l3-3h-3V3Z"
      style={{
        fill: "none",
        stroke: "red",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      d="M12.33 3H12a9 9 0 1 0 9 9v-.33"
      style={{
        fill: "none",
        stroke: "#FFFFFF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      d="M16.9 13A5 5 0 1 1 11 7.1"
      data-name="primary"
      style={{
        fill: "none",
        stroke: "#FFFFFF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default SvgGoal;
