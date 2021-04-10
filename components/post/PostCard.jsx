import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import PostAuthor from './PostAuthor'

const useStyles = makeStyles((theme) => ({
    card: {
        cursor: 'pointer'
    },
    img: {
        width: '100%'
    },
    content: {
        marginTop: theme.spacing(2)
    },
    description: {
        display: '-webkit-box',
        lineClamp: 3,
        boxOrient: 'vertical',
        overflow: 'hidden'
    },
    footer: {
        marginTop: theme.spacing(2)
    }
}))

const PostCard = ({ post }) => {
    const classes = useStyles()

    return (
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <article className={classes.card}>
                <Image
                    src={post.featured_image.formats.small.url}
                    alt={post.title}
                    width={post.featured_image.width}
                    height={post.featured_image.height}
                />

                <div className={classes.content}>
                    <Typography variant="h5" gutterBottom>
                        {post.title}
                    </Typography>

                    <Typography
                        variant="body1"
                        color="textSecondary"
                        className={classes.description}>
                        {post.description}
                    </Typography>
                </div>

                <div className={classes.footer}>
                    <PostAuthor date={post.published_at} author={post.author} />
                </div>
            </article>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostCard
