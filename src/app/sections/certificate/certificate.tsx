import { ChevronRight } from '@/app/components/icons/chevron-right'
import './certificate.scss'
import { ChevronLeft } from '@/app/components/icons/chevron-left'

export function Certificate(){
    return(
        <div className="certificate">
            <div className="certificate-content">
                <div className="certificate-title">
                    <ChevronRight/>
                    <h2>Certificates</h2>
                    <ChevronLeft/>
                </div>

                
            </div>
        </div>
    )
}