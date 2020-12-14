import {createMuiTheme} from "@material-ui/core"
import {green, purple} from "@material-ui/core/colors"

const CavemanTheme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[300]
        }
    }
})

export default CavemanTheme
