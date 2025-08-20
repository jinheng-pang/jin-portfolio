import type { StatsPanelProps } from "../../../types"

import './statsPanel.css'

const StatsPanel: React.FC<StatsPanelProps> = ({icon, title, statistic, extraInformation}) => {
  return (
    <div className='stats-panel'>

        <header className='stats-title'>{title}
            <span className="stats-icon">{icon}</span>
        </header>
        <p className="stats-main">{statistic}</p>
        <p className="stats-extra-info">{extraInformation}</p>
    </div>
  )
}

export default StatsPanel