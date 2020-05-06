const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
    query GetAllArticles {
      allContentfulArticles {
        nodes {
          id
          step
          title
          text {
            text
          }
          pictures {
            file {
              url
            }
          }
        }
      }
    }
    `,
  );
  const component = path.resolve('./src/pages/template.tsx');
  result.data.allContentfulArticles.nodes.forEach(({ step }) => {
    createPage({
      path: `/${step}`,
      component,
      context: {
        step,
      },
    });
  });
};
