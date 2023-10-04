import { ChevronRight } from '@/app/components/icons/chevron-right'
import './projects.scss'
import { ChevronLeft } from '@/app/components/icons/chevron-left'
import { Card } from '@/app/components/card/card'

const data = [
    {id: 1, image: '', title: '', description: ''},
    {id: 2, image: '', title: '', description: ''},
    {id: 3, image: '', title: '', description: ''}
]

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
                    {data?.map((objData => 
                    <Card key={objData.id}
                    image={objData.image}
                    title={objData.title}
                    description={objData.description}
                    />)
                    )}               
                </div>
            </div>
        </div>
    )
}