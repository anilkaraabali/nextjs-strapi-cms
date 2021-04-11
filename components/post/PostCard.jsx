import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import PostAuthor from './PostAuthor'

const useStyles = makeStyles((theme) => ({
    card: {
        cursor: 'pointer'
    },
    layoutRowCard: {
        display: 'flex',
        flexDirection: 'row'
    },
    content: {
        marginTop: theme.spacing(2)
    },
    layoutRowContent: {
        padding: theme.spacing(4),
        marginTop: 0
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

const PostCard = ({ post, layout }) => {
    const classes = useStyles()
    const sizeOfImage = layout === 3 ? 'small' : 'medium'

    return (
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <article
                className={clsx(classes.card, {
                    [classes.layoutRowCard]: layout === 1
                })}>
                <Image
                    src={post.featured_image.formats[sizeOfImage].url}
                    alt={post.title}
                    width={post.featured_image.formats[sizeOfImage].width}
                    height={post.featured_image.formats[sizeOfImage].height}
                />

                <div
                    className={clsx(classes.content, {
                        [classes.layoutRowContent]: layout === 1
                    })}>
                    <Typography variant="h5" gutterBottom>
                        {post.title}
                    </Typography>

                    <Typography
                        variant="body1"
                        color="textSecondary"
                        className={clsx({
                            [classes.description]: layout !== 1
                        })}>
                        {post.description}
                    </Typography>

                    <div className={classes.footer}>
                        <PostAuthor date={post.published_at} author={post.author} />
                    </div>
                </div>
            </article>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostCard
