import type { ExperienceProps } from "../../../types"
import "./ExperienceCard.css"

const ExperienceCard: React.FC<ExperienceProps> = ({ jobTitle, company, description}) => {
  return (
    <div className="card">
        <header>
            <h2>{jobTitle}</h2>
            <p>{company}</p>
        </header>
        <p>{description}</p>
    </div>
  )
}

export default ExperienceCard
