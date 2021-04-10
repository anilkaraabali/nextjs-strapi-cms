export const formatDate = (date, locale = 'en-US') => {
    if (!date) return

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    return new Intl.DateTimeFormat(locale, options).format(Date.parse(date))
}
