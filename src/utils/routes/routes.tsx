import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import HelloWorld from "../../components/HelloWorld/HelloWorld"
import DumbComponent from "../../components/DumbComponent/DumbComponent"

export const Routes = (): unknown => {
    return (
        <Switch>
            <Route path="/" component={DumbComponent} />
            <Route path="/dumb" component={HelloWorld} />
        </Switch>
    )
}
