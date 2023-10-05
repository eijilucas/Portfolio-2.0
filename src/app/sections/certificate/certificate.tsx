import { ChevronRight } from '@/app/components/icons/chevron-right'
import './certificate.scss'
import { ChevronLeft } from '@/app/components/icons/chevron-left'
import { CourseCard } from '@/app/components/course-card/course'

export function Certificate(){
    return(
        <div className="certificate">
            <div className="certificate-content">
                <div className="certificate-title">
                    <ChevronRight/>
                    <h2>Certificados</h2>
                    <ChevronLeft/>
                </div>

                <div className="certificate-card">
                
                </div>
            </div>
        </div>
    )
}