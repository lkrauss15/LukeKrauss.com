import './App.css';
import ArtGallery from './ArtGallery';
import Copyright from './Copyright'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <LandingPage></LandingPage>
            <Copyright></Copyright>
          </Route>
          <Route path='/AiArtGallery'>
            <title>AI Art Gallery</title>
            <ArtGallery></ArtGallery>
            <Copyright darkMode></Copyright>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
