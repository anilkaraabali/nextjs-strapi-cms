<div align="center">
  <img src="https://i.ibb.co/R2v0PsD/Next-a7b1c0f30b.png"/>
</div><br>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Before running, create a .env.local file based off of the provided .env.local.example file.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo

You can see the live demo of the app on the [Vercel](https://nextjs-git-master-anilkaraabali.vercel.app/)

### Integrations
- Database: [PostgreSQL](https://strapi.io/blog/deploying-a-strapi-api-on-heroku)
- UI Library: [Material UI](https://material-ui.com/)
- Prop Validations: [PropTypes](https://www.npmjs.com/package/prop-types)
- CMS: [Strapi](https://strapi.io/)

## Deploy on Heroku

One-click deployment has some problems due to the latest version, prefer to deploy manually by following the relevant steps completely. [Manuel Deploy Steps](https://strapi.io/blog/deploying-a-strapi-api-on-heroku)

- You need to change one of the scripts in **package.json** for the Strapi to activate auto-reloading.

```js
"scripts": {
    ...
    "start": "strapi dev",
  }
```

- You need to change the default upload provider of your [Strapi application to Cloudinary](https://strapi.io/blog/adding-cloudinary-support-to-your-strapi-application) for persistence. One of the first things you will need to do is to create a free account on Cloudinary right [here](https://cloudinary.com/users/register/free). Once you managed to create your free account you will be redirected to the management dashboard of your account. Then, create the following file **./config/plugins.js** and add the below lines of code to it:

```js
module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET')
    }
  }
});
```

Do not forget to add [Strapi Provider Upload Cloudinary](https://www.npmjs.com/package/strapi-provider-upload-cloudinary)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
