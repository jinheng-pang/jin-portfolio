import type { StatsPanelProps } from "../../../types";
import SvgCode from "../../../svgComponents/Code";
import React from "react";

export const LeetCode: StatsPanelProps = {
    icon: React.createElement(SvgCode),
    title: "LeetCode Problems",
    statistic: "187",
    extraInformation: "+12 this month"
}