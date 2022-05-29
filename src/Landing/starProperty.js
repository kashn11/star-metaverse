import './stylesLanding.css'
import Icon1 from './landing-images/icon.svg'
import Icon2 from './landing-images/icon-1.svg'
import Icon3 from './landing-images/icon-2.svg'
import Icon4 from './landing-images/icon-3.svg'
import { Row , Col } from 'react-bootstrap'
export default function StarProperties(){
    return(
        <div className="startProperties">
                <h4 className='headingLg'>STAR PROPERTIES</h4>
                <div className='rowStarProperties'>
                    <div className="cols">
                        <img src={Icon1} alt="icon" className='iconImg'/>
                        <p className='starName'>LAND</p>
                    </div>
                    <div className="cols">
                    <img src={Icon2} alt="icon" className='iconImg'/>
                        <p className='starName'>BUILDINGS</p>
                    </div>
                    <div className="cols">
                    <img src={Icon3} alt="icon" className='iconImg'/>
                        <p className='starName'>BIZ ESTABLISHMENT</p>
                    </div>
                    <div className="cols">
                    <img src={Icon4} alt="icon" className='iconImg'/>
                        <p className='starName'>ADVERTISEMENT BOARDS</p>
                    </div>
                </div>
        </div>
    )
}