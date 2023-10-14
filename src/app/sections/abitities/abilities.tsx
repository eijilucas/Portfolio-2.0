import { ChevronLeft } from "@/app/components/icons/chevron-left";
import { ChevronRight } from "@/app/components/icons/chevron-right";

import './abilities.scss'

const data = [
    {}
]

export function Abilities() {

    return (
        <div className="abilities" id="abilities">
            <div className="abilities-content">
                <div className="abilities-title">
                    <ChevronRight />
                    <h2>Habilidades</h2>
                    <ChevronLeft />
                </div>

                <div className="skill-content">
                    
                </div>
            </div>
        </div>
    )
}