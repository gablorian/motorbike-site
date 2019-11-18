import React from 'react';
import logo from './images/logo-seeko-moto.png'
import './App.css';
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Fade from 'react-reveal/Fade';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whichOneRender: 1
        };
    }
    setForRecipes(){
        this.setState({whichOneRender:1});
    };
    setForAbout(){
        this.setState({whichOneRender:2});
    };
    setForContact(){
        this.setState({whichOneRender:3});
    };




    render() {
        let button = <Main/>;
        if (this.state.whichOneRender===1){
            button = <Main/>;
        } if(this.state.whichOneRender===2){
            button = <About/>;
        } if(this.state.whichOneRender===3) {
            button = <Contact/>;
        }

        return ( (

            <div className="app">
                <Fade top>
                <section className='header'>
                    <div className='logo'>
                        <img src={logo} className="mainLogo" alt="seeko logo"/>
                    </div>
                    <div className='menu'>
                        <div className='menuElement' onClick={() => this.setForRecipes()}>
                            <span>
                                Główna
                            </span>
                        </div>
                        <div className='menuElement' onClick={() => this.setForAbout()}>
                            <span>
                                O nas
                            </span>
                        </div>
                        <div className='menuElement' onClick={() => this.setForContact()}>
                            <span >
                                Kontakt
                            </span>
                        </div>
                    </div>
                </section>
                </Fade>
                <section className='pageContent'>
                    {button}
                </section>
                <footer>
                    <span>Copyright &copy; SeekoMoto 2019</span>
                    |
                    <span>Site made by Gabriel Michoński</span>

                </footer>
            </div>
        ))}}
    export default Menu;