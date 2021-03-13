require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `Jason Huang`,
    siteTitleAlt: `Jason Huang`,
    siteHeadline: ``,
    siteUrl: `https://jasonhuang.netlify.app`,
    siteDescription: ``,
    siteLanguage: `en`,
    siteImage: ``,
    author: `@jhthenerd`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: "YYYY-MM-DD",
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/err_53`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/the.err53/`,
          },
          {
            name: `Resume`,
            url: `https://media.githubusercontent.com/media/err53/resume/master/resume.pdf`,
          },
        ],
        feedTitle: "Jason Huang",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Huang`,
        short_name: `Jason Huang`,
        description: `Jason's personal site`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `automatic`,
        icon: `src/images/icon.svg`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
