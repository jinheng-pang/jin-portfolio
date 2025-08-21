import type { StatsPanelProps } from "../../types";
import StatsPanel from "./statsPanel/StatsPanel";
import { LeetCode } from "./statsItems/leetcode";
import { Project } from "./statsItems/project";
import { Goal } from "./statsItems/goal";

import "./dashboard.css";

const statsItems: StatsPanelProps[] = [LeetCode, Project, Goal];

const DashBoard = () => {
  return (
    <div className="dashboard body-panel">
      <div className="stats">
        <h2 className="heading">Statistics</h2>
        <div className="stats-panels">
          {statsItems.map((item) => (
            <StatsPanel {...item} />
          ))}
        </div>
      </div>
      <div className="projects">
        <h2 className="heading"></h2>
      </div>
    </div>
  );
};

export default DashBoard;
