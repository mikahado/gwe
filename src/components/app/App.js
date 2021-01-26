// React
import React,{useState} from 'react';

// React Components
import {
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

// Sub-Components
import Splash from '../../views/splash/splash';
import Library from '../../views/library/library';
import {MaterialRouter} from "../../utilities/material";

// Style Sheets
import './App.css';
import './colors.css';
import './fonts.css';
import './elements.css';
import './animations.css';
import {Table} from "../table";

export function App(props){

    const [language,setLanguage] = useState('eng')

    function changeLanguage(){
        setLanguage(language === 'eng' ? 'spa' : 'eng')
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>

            <div className="App">

                <Route exact path="/"
                    component={( props ) =>(

                        <Splash {...props}
                            language={ language }
                            changeLanguage={ changeLanguage }
                        />
                   )}
                />

                <Route path="/library/"
                    component={(props) =>(
                        <Library {...props}
                                language={ language }
                                changeLanguage={ changeLanguage }
                        />
                    )}
                />

                <Route path={['/s:sessionId/p:partNo/:next','/s:sessionId/p:partNo','/s:sessionId']}
                    component={ (props) =>(

                        <MaterialRouter
                            language={language}
                            changeLanguage={changeLanguage}
                        />
                    )}
                />

                <Route exact path="/table"
                       component={( props ) =>(

                           <Table/>
                       )}
                />

            </div>

        </Router>
    )
}
