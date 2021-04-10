import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import PostCard from '../../components/post/PostCard'
import PostEmpty from '../../components/post/PostEmpty'
import { request } from '../api/axios'

const Blog = ({ posts }) => {
    if (!posts.length) return <PostEmpty />

    return (
        <Container>
            <Grid container spacing={4}>
                {posts.map((post, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <PostCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export async function getStaticProps() {
    const { data } = await request({
        method: 'get',
        url: `/posts`
    })

    return {
        props: {
            posts: data
        }
    }
}

export default Blog
