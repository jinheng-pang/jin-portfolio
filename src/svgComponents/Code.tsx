import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="svg-code"
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      className="svg-code-path"
      stroke="#FFFFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 8-4 3.692L7 16m10-8 4 3.692L17 16M14 4l-4 16"
    />
  </svg>
);
export default SvgCode;
