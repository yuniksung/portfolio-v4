import React, { Component } from "react";
import './MainPage.scss'

// Components
import PageAboutMe from '../../component/MainPage-component/PageAboutMe'

class MainPage extends Component{

    render() {

        return(
            <div>
                <PageAboutMe />
            </div>
        )
    }
}

export default MainPage;