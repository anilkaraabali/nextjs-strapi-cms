import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

import { formatDate } from '../../utils'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(3)
    },
    avatar: {
        marginRight: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    }
}))

const PostAuthor = ({ date, author }) => {
    const classes = useStyles()
    const publishedDate = formatDate(date)

    return (
        <section className={classes.container}>
            <Avatar alt={author.username} className={classes.avatar}>
                {author.username.charAt(0)}
            </Avatar>

            <div>
                <Typography variant="body2" color="textSecondary" display="block">
                    {author.username}
                </Typography>

                <Typography variant="caption" color="textSecondary">
                    {publishedDate}
                </Typography>
            </div>
        </section>
    )
}

PostAuthor.propTypes = {
    date: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired
}

export default PostAuthor
