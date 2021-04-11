import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import PostCard from '../../components/post/PostCard'
import PostEmpty from '../../components/post/PostEmpty'
import { request } from '../api/axios'

const Blog = ({ posts }) => {
    if (!posts.length) return <PostEmpty />

    // to show the post in different types of layouts
    const subArray = [1, 3, 2]
    let [postIndex, loopIndex] = [0, 0]
    const results = []
    while (postIndex < posts.length) {
        const endIndex = postIndex + subArray[loopIndex % subArray.length]
        results.push(posts.slice(postIndex, endIndex))
        postIndex = endIndex
        loopIndex++
    }

    return (
        <Container>
            <Grid container spacing={6}>
                {results.map((postGroup, postGroupIndex) => {
                    return postGroup.map((post, index) => (
                        <Grid key={index} item xs={12} sm={6} md={12 / subArray[postGroupIndex]}>
                            <PostCard post={post} layout={subArray[postGroupIndex]} />
                        </Grid>
                    ))
                })}
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
