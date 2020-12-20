import React from "react"
import {Link, BrowserRouter} from "react-router-dom"
import {MuiThemeProvider} from "@material-ui/core"
import CavemanTheme from "../utils/style/theme"
import {Routes} from "../utils/routes/routes"
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={CavemanTheme}>
                <div>Hello World</div>
                <div>
                    <div>
                        {/*<BrowserRouter>*/}
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/dumb">Dumb Component</Link>
                                </li>
                            </ul>
                        </nav>
                        {/*<BrowserRouter>*/}
                    </div>
                    <div>{Routes()}</div>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
    )
}

export default App
