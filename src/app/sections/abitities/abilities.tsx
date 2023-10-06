import { ChevronLeft } from "@/app/components/icons/chevron-left";
import { ChevronRight } from "@/app/components/icons/chevron-right";

import './abilities.scss'

export function Abilities(){
    return(
        <div className="abilities">
            <div className="abilities-content">
                <div className="abilities-title">
                    <ChevronRight/>
                    <h2>Habilidades</h2>
                    <ChevronLeft/>
                </div>

                <div className="skill">
                    <div className="skill-text">
                        <div className="skill-title">
                            <h3>{}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}