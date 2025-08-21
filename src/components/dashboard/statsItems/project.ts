import type { StatsPanelProps } from "../../../types";
import SvgFolder from "../../../svgComponents/Folder";
import React from "react";

export const Project: StatsPanelProps = {
    icon: React.createElement(SvgFolder),
    title: "Projects Completed",
    statistic: "2",
    extraInformation: "1 in production"
}