import Header from "./components/Header";
import Footer from "./components/Footer";
import {Main} from "./pages/Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AllCharacters} from './pages/Character/AllCharacters'
import {AllEpisode} from './pages/Episode/AllEpisode'
import {AllLocation} from './pages/Location/AllLocation'
import {About} from './pages/About'
import {NotFound} from './pages/NotFound'
import {Personality} from "./pages/Character/Personality";
import {Location} from "./pages/Location/Location";
import {SingleEpisode} from "./pages/Episode/SingleEpisode";
import {Provider} from "react-redux";
import {store} from "./redux/contex";

function App() {
    return (
        <Provider store={store}>
            <Router  basename='/rick-and-morty'>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/about' component={About}/>
                        <Route exact path='/character' component={AllCharacters}/>
                        <Route exact path='/episode' component={AllEpisode}/>
                        <Route exact path='/location' component={AllLocation}/>
                        <Route exact path='/character/:id' component={Personality}/>
                        <Route path='/Episode/:id' component={SingleEpisode}/>
                        <Route path='/Location/:id' component={Location}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
