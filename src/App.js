import './App.css';
import ArtGallery from './ArtGallery';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <p>TODO: Create Luke Krauss landing page here, cause this is now my website, bruh</p>
          </Route>
          <Route path='/AiArtGallery'>
            <ArtGallery></ArtGallery>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
