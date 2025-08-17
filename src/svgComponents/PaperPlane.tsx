import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperPlane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="svg-paperPlane"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="paper-plane_svg__Icons"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    {...props}
  >
    <style>
      {
        ".paper-plane_svg__st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
      }
    </style>
    <path
      d="M26.4 2.9 3.8 15c-.7.4-.7 1.5.1 1.8l20.8 8.7c.6.3 1.3-.2 1.4-.8l1.7-20.8c.1-.9-.7-1.4-1.4-1"
      className="svg-paperPlane-path"
    />
    <path
      d="M26 4 13 20v7.3c0 .9 1.2 1.4 1.8.7l4.2-5"
      className="svg-paperPlane-path"
    />
  </svg>
);
export default SvgPaperPlane;
