import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import AuthView from './components/Views/Auth';
import RegisterView from './components/Views/Register';
import ProfileView from "./components/Views/Profile";
import TestView from "./components/Views/Test";
import ErrorView from "./components/Views/Error";
import './App.scss';
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PrivateRoute from "./components/Routing/PrivateRoute";

class App extends Component {
    render() {
        return (
            <Route render={({location}) => (
                <div className="App">
                    <Navbar/>
                    <section className="section main">
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={600} classNames='fade'>
                                <Switch>
                                    <Route path='/login' component={AuthView}/>
                                    <Route path='/register' component={RegisterView}/>
                                    <PrivateRoute path='/else' component={TestView}/>
                                    <PrivateRoute path='/profile' component={ProfileView}/>
                                    <Route path='/something_went_wrong' component={ErrorView}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </section>
                    <Footer/>
                </div>
            )}/>
        );
    }
}

export default App;
