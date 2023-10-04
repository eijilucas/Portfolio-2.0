import './card.scss'

interface CardProps {
    id?: number,
    image: string,
    title: string,
    description: string
}

export function Card({image, title, description} : CardProps){
    return(
        <div className="card">
            <div className="card-image">
            <img src={image} alt="" />
            </div>

            <div className="card-title">
                <h2>{title}</h2>
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
        </div>
    )
}