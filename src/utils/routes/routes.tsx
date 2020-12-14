import React from "react"
import {Route, Switch, Link} from "react-router-dom"
import HelloWorld from "../../components/HelloWorld/HelloWorld"
import DumbComponent from "../../components/DumbComponent/DumbComponent"

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={HelloWorld} />
            <Route path="/dumb-component" component={DumbComponent} />
        </Switch>
    )
}

export default Routes
