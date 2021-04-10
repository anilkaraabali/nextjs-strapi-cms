import axios from 'axios'

axios.defaults.baseURL = `${
    process.env.NEXT_PUBLIC_API_URL || 'https://nextjs-strapi-rest.herokuapp.com'
}`

export const request = (requestObject) => {
    requestObject.headers = {
        ...requestObject.headers
    }

    return axios(requestObject).then(
        (res) => Promise.resolve(res),
        (err) => {
            return Promise.reject(err.response.data)
        }
    )
}
