import Header from "./components/Header";
import Footer from "./components/Footer";
import {Main} from "./pages/Main";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {AllCharacters} from './pages/AllCharacters'
import {AllEpisode} from './pages/AllEpisode'
import {AllLocation} from './pages/AllLocation'
import {About} from './pages/About'
import {NotFound} from './pages/NotFound'
import {Personality} from "./pages/Personality";
import {Location} from "./pages/Location";
import {SingleEpisode} from "./pages/SingleEpisode";


function App() {
  return (
    <>
    <Router basename='/rick-and-morty'>
        <Header/>
        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About} />
            <Route exact path='/character' component={AllCharacters} />
            <Route path='/allEpisode' component={AllEpisode} />
            <Route path='/allLocation' component={AllLocation} />
            <Route  exact path='/character/:id' component={Personality} />
            <Route path='/Episode/:id' component={SingleEpisode} />
            <Route path='/Location/:id' component={Location} />
            <Route  component={NotFound} />
          </Switch>
        </main>
        <Footer/>
    </Router>
    
    </>
  );
}

export default App;
