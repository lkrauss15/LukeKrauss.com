import './Biography.css'

function Biography(props) {
    return (
        <div className='Biography'>
            <img src='Biography/SelfPortrait' className='selfPortrait'></img>
            <p className='biographyText'>
                Hey there! I'm Luke Krauss, a full-stack developer. 
                <br></br>
                Welcome to my website.
            </p>
            <div className='biographyLinks'>
                <a href='/Biography/Resume' target='_blank'>Resume</a>
                <a href='https://www.linkedin.com/in/lukekrauss/' target='_blank'>LinkedIn</a>
                <a href='https://github.com/lkrauss15/' target='_blank'>GitHub</a>
            </div>
        </div>
    )
}

export default Biography;