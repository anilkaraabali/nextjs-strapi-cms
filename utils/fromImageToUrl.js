/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 */
export const fromImageToUrl = (path) => {
    if (!path) {
        return '/default-blog-cover-image.jpg'
    }

    if (path.indexOf('/') === 0) {
        //It's a relative url, add API URL
        return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
    }

    return path
}
