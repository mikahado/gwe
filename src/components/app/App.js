// React
import React,{useState} from 'react';

// React Components
import {
    HashRouter as Router,
    Route,
} from "react-router-dom";

// Sub-Components
import {Splash} from '../../views/splash/splash';
import Library from '../../views/library/library';
import SessionMap from "../../views/sessionScreen/sessionMap";
import {materialRouter} from "../../utilities/material";

import books from "../../data/books/books";

// Style Sheets
import './App.css';
import './colors.css';
import './fonts.css';
import './elements.css';
import './animations.css';
import {Resources} from "../../views/resources/resources";
import {Read} from "../../views/read/read";

import '../../data/curriculum/curriculum';

export function App(props){

    const [language,setLanguage] = useState('eng');

    function changeLanguage(){
        setLanguage(language === 'eng' ? 'spa' : 'eng');
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>

            <div className="App container-fluid">

                <Route exact path="/"
                       component={( props ) =>(
                           <Splash {...props} language={ language } changeLanguage={changeLanguage} />
                       )}
                />

                <Route path={['/map/s-:sessionId',"/map/"]}
                       component={(props) =>(
                           <SessionMap {...props} language={ language } changeLanguage={changeLanguage} />
                       )}
                />

                <Route path="/library/"
                       component={(props) =>(
                           <Library {...props} language={ language } changeLanguage={changeLanguage} />
                       )}
                />

                <Route path={[
                    '/s:sessionId/p:partNo/:next',
                    '/s:sessionId/p:partNo',
                    '/s:sessionId'
                ]}
                       render={ ( { match }) =>{

                           return materialRouter(match.params,language,changeLanguage)
                       } }
                />

                <Route path={'/read/book/:contentId'}
                       render={ ( { match }) =>{

                           const content = books[match.params.contentId]

                           return(
                               <Read
                                   content={content}
                                   language={language}
                                   changeLanguage={changeLanguage}
                                   imgPreloads={content.imgPreloads}
                                   audioPreloads={content.audioPreloads}
                               />
                           )
                       }}
                />

                <Route path="/resources"
                       component={ (props) =>(
                           <Resources
                               language={language}
                               changeLanguage={changeLanguage}
                           />
                       )}
                />

            </div>

        </Router>
    )
}
