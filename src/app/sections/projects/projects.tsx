import { ChevronRight } from '@/app/components/icons/chevron-right'
import './projects.scss'
import { ChevronLeft } from '@/app/components/icons/chevron-left'
import { Card } from '@/app/components/card/card'


export function Projects(){
    return(
        <div className="project" id='projects'>
            <div className="project-content">
                <div className="project-title">
                    <ChevronRight/>
                    <h2>Projects</h2>
                    <ChevronLeft/>
                </div>

                <div className="project-cards">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}