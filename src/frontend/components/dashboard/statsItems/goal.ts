import type { StatsPanelProps } from "../../../types";
import SvgGoal from "../../../svgComponents/Goal";
import React from "react";

export const Goal: StatsPanelProps = {
    icon: React.createElement(SvgGoal),
    title: "Current Goal",
    statistic: "10%",
    extraInformation: "Computer Networks"
}