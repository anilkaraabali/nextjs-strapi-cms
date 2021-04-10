import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import PostAuthor from '../../components/post/PostAuthor'
import { request } from '../api/axios'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(8)
    },
    divider: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2)
    },
    figure: {
        marginLeft: 0,
        marginRight: 0
    }
}))

const PostDetail = ({ post }) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Head>
                <title>{post.title}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <Container className={classes.container} maxWidth="md">
                <Container maxWidth="sm">
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h3" gutterBottom>
                                {post.title}
                            </Typography>

                            <Divider className={classes.divider} />

                            <PostAuthor date={post.published_at} author={post.author} />
                        </Grid>
                    </Grid>
                </Container>

                <figure className={classes.figure}>
                    <Image
                        src={post.featured_image.formats.medium.url}
                        alt={post.title}
                        width={post.featured_image.width}
                        height={post.featured_image.height}
                    />
                </figure>

                <Container maxWidth="sm" id="blog-markdown">
                    <ReactMarkdown source={post.content} escapeHtml={false} />
                </Container>
            </Container>
        </React.Fragment>
    )
}

export async function getStaticPaths() {
    const { data } = await request({
        method: 'get',
        url: `/posts`
    })

    return {
        paths: data.map((post) => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { data } = await request({
        method: 'get',
        url: `/posts/?slug=${params.slug}`
    })

    return {
        props: { post: data[0] },
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1
    }
}

export default PostDetail
