import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
export const theme = createMuiTheme({
    palette: {
        primary: {
            // main: '#0076FFE6'
            main: '#1d1b84'
        }
    },
    overrides: {
        MuiButton: {
            outlined: {}
        },
        MuiAppBar: {
            colorPrimary: {
                color: 'rgba(0,0,0, .87)',
                backgroundColor: '#fff',
                boxShadow: 'inset 0 -1px 0 0 #dadce0'
            }
        }
    }
})
