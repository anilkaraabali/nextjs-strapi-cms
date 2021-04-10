import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

const PostEmpty = () => (
    <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <img src="/empty.svg" alt="empty posts" />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justify="center">
                    <Typography variant="h5" color="primary">
                        Looks like you have not created a blog yet...
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justify="center">
                    <Link href="/" passHref>
                        <Button size="large" color="primary" variant="contained">
                            Go Home
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    </Container>
)

export default PostEmpty
