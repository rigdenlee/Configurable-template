import React from 'react';
import NavBar from '../components/NavBar';
import Slideshow from '../components/Slideshow';
import Content from '../components/Content';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    render() {
        return (
            <div className="main-div-container">
                <NavBar />
                <Slideshow />
                <Content />
                <Profile />
                <Footer />
            </div>
        )
    }
}