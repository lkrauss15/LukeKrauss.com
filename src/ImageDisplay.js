import './ImageDisplay.css';

function ImageDisplay(props) {
    return (
      <div className="ImageDisplay">
          <span class="imageContainer">
          <img class="imageDisplayImage" src={props.imageSource}></img>
          </span>
          <p class="artTitle">{props.artTitle}</p>
      </div>
    );
  }
  
  export default ImageDisplay;