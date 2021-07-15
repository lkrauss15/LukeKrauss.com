import './LandingPage.css'
import Biography from './Biography'
import LinksToCreations from './LinksToCreations'


function LandingPage(props) {
    return (
        <div className='LandingPage'>
            <Biography></Biography>
            <LinksToCreations></LinksToCreations>
        </div>
    )
}

export default LandingPage;