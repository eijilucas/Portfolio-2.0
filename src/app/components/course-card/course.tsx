import { CalendaryIcon } from "../icons/calendary"
import { InstitutionIcon } from "../icons/institution-icon"
import { OpenBookIcon } from "../icons/open-book"
import Link from 'next/link';

interface CourseCardProps {
    title: string,
    instructor: string,
    institution: string,
    duration: number,
    certificateLink: string
}

export function CourseCard({title, instructor, institution, duration, certificateLink} : CourseCardProps){
    return(
        <div className="course-card">
            <div className="course-content">
                <div className="title">
                    <h2>{title}</h2>
                </div>

                <div className="infos">
                    <div className="instructor">
                        <div className="instructor-icon">
                            <OpenBookIcon/>
                        </div>
                        <div className="instructor-info">
                            <p>Instructor</p>
                            {instructor}
                        </div>
                    </div>

                    <div className="intitution">
                        <div className="institution-icon">
                            <InstitutionIcon/>
                        </div>
                        <div className="instituction-info">
                            <p>Instution</p>
                            {institution}
                        </div>
                    </div>
                </div>

                <div className="duration">
                    <div className="duration-time">
                        {duration}
                    </div>

                    <div className="duration-icon">
                        <CalendaryIcon/>
                        <p>Hours</p>
                    </div>
                </div>

                <div className="btns">
                    <Link href={certificateLink}>
                        <button>Certificado</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}