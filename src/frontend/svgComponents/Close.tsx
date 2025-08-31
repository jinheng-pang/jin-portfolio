import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.7em"
    height="1.7em"
    fill="none"
    stroke="#000"
    strokeWidth={0}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      className="svg-close-path"
      fill="var(--fill-secondary)"
      fillRule="evenodd"
      stroke="none"
      d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;
