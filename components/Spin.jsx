import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

const Spin = () => (
    <Container>
        <Grid container justify="center" alignItems="center">
            <CircularProgress />
        </Grid>
    </Container>
)

export default Spin
