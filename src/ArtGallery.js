import React from 'react';
import './ArtGallery.css';
import ImageDisplay from './ImageDisplay';

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
    fetch("http://localhost:3001/GetArtGalleryInfo", {
      method: 'POST',
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((imageDisplayData) => {
          const newImageDisplayData = [];

          //Transform server response into local data array
          imageDisplayData.forEach(imageDisplayInfo => {
            newImageDisplayData.push({
              imageSource: imageDisplayInfo.imageSource,
              artTitle: imageDisplayInfo.artTitle,
            });
          });

          this.setState({imageDisplayData: newImageDisplayData});
        })
      }

      //Do nothing if we receive some kind of error (response code other than 200)
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
      return null;
    }

    return (
      <div className="ArtGallery">
        {this.state.imageDisplayData.map((imageDisplayInfo, idx) => (
          <ImageDisplay key={idx} imageSource={imageDisplayInfo.imageSource} artTitle={imageDisplayInfo.artTitle}></ImageDisplay>
        ))}
      </div>
    );
  }

}

/*
        <ImageDisplay imageSource={"/strange_attractor.png"} artTitle="strange attractor"></ImageDisplay>

        <ImageDisplay imageSource={attractor} artTitle="strange attractor"></ImageDisplay>
        <ImageDisplay imageSource={beautiful} artTitle="creating something beautiful"></ImageDisplay>
        <ImageDisplay imageSource={creator} artTitle="creator of the universe"></ImageDisplay>
        <ImageDisplay imageSource={eight} artTitle="eight men hovering around something unknown"></ImageDisplay>
        <ImageDisplay imageSource={mirror} artTitle="looking at yourself without a mirror"></ImageDisplay>
        <ImageDisplay imageSource={plastic} artTitle="plastic being recycled within the mind"></ImageDisplay>
        <ImageDisplay imageSource={ribcage} artTitle="ribcage with no belongings"></ImageDisplay>
        <ImageDisplay imageSource={sculpture} artTitle="a woman creating a sculpture of herself"></ImageDisplay>
        <ImageDisplay imageSource={shattered} artTitle="a life shattered and torn into pieces"></ImageDisplay>
        <ImageDisplay imageSource={something} artTitle="why there is something rather than nothing"></ImageDisplay>
        <ImageDisplay imageSource={torus} artTitle="a torus that does not belong"></ImageDisplay>
        <ImageDisplay imageSource={wheel} artTitle="the wheel of time turning in my mind"></ImageDisplay>
*/

export default ArtGallery;