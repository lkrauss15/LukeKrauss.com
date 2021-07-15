import './Biography.css'

function Biography(props) {
    return (
        <div className='Biography'>
            <img src='Biography/SelfPortrait' className='selfPortrait'></img>
            <p className='biographyText'>
                Hey there! I'm Luke Krauss. I'm a developer and this is my website.
                There isn't much here now, but I'll be adding more stuff soon. For now, check out
                the links below for some stuff I've made. 
            </p>
        </div>
    )
}

export default Biography;