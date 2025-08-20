import type { StatsPanelProps } from "../../../types";
import SvgCode from "../../../svgComponents/Code";
import React from "react";

export const Goal: StatsPanelProps = {
    icon: React.createElement(SvgCode),
    title: "Current Goal",
    statistic: "10%",
    extraInformation: "Computer Networks"
}