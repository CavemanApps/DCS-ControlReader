import React from "react"
import {BrowserRouter as Router, Link, Switch} from "react-router-dom"
import Routes from "../utils/routes/routes"
import {MuiThemeProvider} from "@material-ui/core"
import CavemanTheme from "../utils/style/theme"

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={CavemanTheme}>
            <Router>
                <div>Hello World</div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/dumb-component">Dumb Component</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Routes />
            </Router>
        </MuiThemeProvider>
    )
}

export default App
