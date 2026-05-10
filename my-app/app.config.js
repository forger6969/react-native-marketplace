import "dotenv/config";

export default {
  expo: {
    name: "my-app",
    slug: "my-app",

    extra: {
      apiUrl: process.env.API_URL,
    },
  },
};