import React from 'react';
import './ArtGallery.css';
import ImageDisplay from './ImageDisplay';
import ArtGalleryIntro from './ArtGalleryIntro';

/**
 * An entire art gallery to display with several images. There should only be one of these.
 */
class ArtGallery extends React.Component {

  constructor(){
    super();
    this.state = {
      imageDisplayData: [],
    }
  }

  /**
   * Called when the component is inserted into the DOM successfully. 
   * Good place to load data from the server :)
   * More info: https://reactjs.org/docs/react-component.html#componentdidmount
   */
  componentDidMount(){
    fetch("/AiArtGallery/GetArtGalleryInfo", {
      method: 'POST',
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((imageDisplayData) => {
          const newImageDisplayData = [];

          //Transform server response into local data array
          imageDisplayData.forEach(imageDisplayInfo => {
            newImageDisplayData.push({
              artwork: imageDisplayInfo.artwork,
              artTitle: imageDisplayInfo.artTitle,
            });
          });

          this.setState({imageDisplayData: newImageDisplayData});
        })
      }

      //Do nothing if we receive some kind of error (response code other than 200)
    }).catch((error) => {

    })
  }

  /**
   * Code to actually render the component.
   * 
   * @returns {React.Component}
   */
  render() {

    //Don't try to render anything if we have no image display data
    if (this.state.imageDisplayData.length === 0) {
      //return null;
    }

    return (
      <div className="ArtGallery">
        <ArtGalleryIntro></ArtGalleryIntro>
        {this.state.imageDisplayData.map((imageDisplayInfo, idx) => (
          <ImageDisplay key={idx} imageSource={"AiArtGallery/GetArtwork?artwork=" + imageDisplayInfo.artwork} artTitle={imageDisplayInfo.artTitle}></ImageDisplay>
        ))}
      </div>
    );
  }

}

export default ArtGallery;