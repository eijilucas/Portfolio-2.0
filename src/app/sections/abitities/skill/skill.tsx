import Image from "next/image";
import './skill.scss'

interface SkillProps {
    title: string,
    description: string,
    svg: string
}

export function Skill(props : SkillProps) {

    return (
        <div className="skill-section">
            <div className="skill-text">
                <div className="skill-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="skill-description">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="skill-svg">
                <Image src={props.svg} alt="" />
            </div>
        </div>
    )
}