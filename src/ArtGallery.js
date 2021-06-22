import './ArtGallery.css';
import attractor from './assets/attractor.png';
import beautiful from './assets/beautiful.png';
import creator from './assets/creator.png';
import eight from './assets/eight.png';
import mirror from './assets/mirror.png';
import plastic from './assets/plastic.png';
import ribcage from './assets/ribcage.png';
import sculpture from './assets/sculpture.png';
import shattered from './assets/shattered.png';
import something from './assets/something.png';
import torus from './assets/torus.png';
import wheel from './assets/wheel.png';
import ImageDisplay from './ImageDisplay';

function ArtGallery(props) {
    return (
      <div className="ArtGallery">
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
      </div>
    );
  }

  export default ArtGallery;