import { ChevronRight } from '@/app/components/icons/chevron-right'
import './projects.scss'
import { ChevronLeft } from '@/app/components/icons/chevron-left'
import { Card } from '@/app/components/card/card'

const data = [
    {id: 1, image: '/assets/mongodb-logo.jpg' ,title: 'Rest API', description: 'API para consulta de posts com usuários e comentários vinculados utilizando o banco de dados MongoDB e Spring.'},
    {id: 2, image: '/assets/potifolio-image.png' ,title: 'Portfólio', description: 'Portfólio criado para apresentar meus trabalhos e habilidades'},
    {id: 3, image: '/assets/web-service-image.png' ,title: 'Web Service', description: 'API com objetivo de gerenciar pedidos e compras para plataformas de ecommerce com Spring.'}
]

export function Projects(){
    return(
        <div className="project" id='projects'>
            <div className="project-content">
                <div className="project-title">
                    <ChevronRight/>
                    <h2>Projetos</h2>
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