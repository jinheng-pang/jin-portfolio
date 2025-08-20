import type { StatsPanelProps } from "../../../types";
import SvgCode from "../../../svgComponents/Code";
import React from "react";

const Project: StatsPanelProps = {
    icon: React.createElement(SvgCode),
    title: "Projects Completed",
    statistic: "2",
    extraInformation: "1 in production"
}