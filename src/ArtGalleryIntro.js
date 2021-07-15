import './ArtGalleryIntro.css';

function ArtGalleryIntro(props) {
    return (
        <div className='ArtGalleryIntro'>
            <p className='artGalleryTitle artGalleryText'>AI Art Gallery</p>
            <p className='artGalleryExplanation artGalleryText'>These images were generated using Big Sleep, an AI-powered artwork generator. I hand-picked my favorites!</p>
        </div>
    );
}

export default ArtGalleryIntro;