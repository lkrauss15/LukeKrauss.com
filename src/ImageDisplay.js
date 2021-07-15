import './ImageDisplay.css';
import './ArtGallery.css';

/**
 * A single image to display along with an image title.
 * 
 * @param {string} props.imageSource Image URL source
 * @param {string} props.artTitle Title to display below the image / artwork
 * @returns An ImageDisplay functional component
 */
function ImageDisplay(props) {
    return (
      <div className="ImageDisplay">
          <span className="imageContainer">
            <img className="imageDisplayImage" src={props.imageSource}></img>
          </span>
          <p className="artTitle artGalleryText">{props.artTitle}</p>
      </div>
    );
  }
  
  export default ImageDisplay;