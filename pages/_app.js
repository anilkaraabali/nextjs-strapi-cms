import '../styles/global.scss'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { DefaultSeo } from 'next-seo'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import { Footer, Header } from '../components'
import SEO from '../next-seo.config'
import { theme } from '../theme'

const MyApp = ({ Component, pageProps, err }) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <React.Fragment>
            <DefaultSeo {...SEO} />

            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Header />
                <main>
                    <Component {...pageProps} err={err} />
                </main>
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
}

export default MyApp
