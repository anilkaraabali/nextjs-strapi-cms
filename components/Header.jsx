import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = makeStyles(() => ({
    toolbar: {
        alignItems: 'stretch'
    },
    logoContainer: {
        display: 'flex'
    },
    logo: {
        width: 'auto',
        height: 40
    },
    menuContainer: {
        alignSelf: 'stretch'
    },
    menu: {
        height: '100%'
    }
}))

const MENU = [
    { name: 'HOME', href: '/' },
    { name: 'BLOG', href: '/blog' }
]

const Header = () => {
    const classes = useStyles()
    const router = useRouter()

    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Grid container alignItems="center">
                    <Grid item xs={6} md={3}>
                        <Grid container alignItems="center">
                            <Link href="/" className={classes.logoContainer}>
                                <img src="/logo.png" alt="company logo" className={classes.logo} />
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid item xs={6} md={9} className={classes.menuContainer}>
                        <Grid container justify="flex-end" className={classes.menu}>
                            {MENU.map(({ name, href }) => (
                                <Link key={name} href={href} passHref>
                                    <Button
                                        size="large"
                                        disableElevation
                                        color={href === router.pathname ? 'primary' : 'default'}>
                                        {name}
                                    </Button>
                                </Link>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
