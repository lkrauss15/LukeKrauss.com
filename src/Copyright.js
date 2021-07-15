import './Copyright.css'

function Copyright(props) {
    return (
        <div className={'Copyright ' + (props.darkMode ? 'copyrightDark' : 'copyrightLight')}>
            <footer className='copyrightText'>&copy; Luke Krauss 2021</footer>
        </div>
    )
}

export default Copyright;