import type { ExperienceProps } from "../../../types"
import "./ExperienceCard.css"

const ExperienceCard: React.FC<ExperienceProps> = ({ jobTitle, company, description}) => {
  return (
    <div className="card">
        <h2 className="job-title">{jobTitle}</h2>
        <p className="company">{company}</p>
        <p className="description">{description}</p>
    </div>
  )
}

export default ExperienceCard
