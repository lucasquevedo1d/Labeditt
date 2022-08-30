import {createMuiTheme} from '@material-ui/core/styles'
import { corPrimaria, corNeutra } from './Color'

const theme = createMuiTheme({
    palette:{
        primary:{
            main:corPrimaria,
            contrastText:"white"
        },
        text:{
            primary:corNeutra
        }
    }
})

export default theme