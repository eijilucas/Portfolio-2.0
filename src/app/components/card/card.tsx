import Link from 'next/link'
import './card.scss'

interface CardProps {
    id?: number,
    image: string,
    title: string,
    description: string
}

export function Card({ image, title, description }: CardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <img src={image} alt="" width={350} height={275} />
                </div>

                <div className="card-title">
                    <h2>{title}</h2>
                </div>
                <div className="card-information">
                    <div className="card-description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="card-button">
                    <Link href='https://github.com/eijilucas' target='_blank'>
                        <button type='submit'>Saiba mais</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}