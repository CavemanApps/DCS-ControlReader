import React from "react"
import {Route, Switch} from "react-router-dom"
import HelloWorld from "../../components/HelloWorld/HelloWorld"
import DumbComponent from "../../components/DumbComponent/DumbComponent"

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/">
                {/*<HelloWorld />*/}
                <DumbComponent />
            </Route>
            <Route path="/dumb">
                {/*<DumbComponent />*/}
                <HelloWorld />
            </Route>
        </Switch>
    )
}

export default Routes
