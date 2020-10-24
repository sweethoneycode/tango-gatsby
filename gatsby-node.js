const path = require("path");
const slash = require("slash");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve("./src/templates/page.js");
  const archiveTemplate = path.resolve("./templates/archive.js");
  const postTemplate = path.resolve("./templates/post.js");

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            link
            status
            categories {
              id
            }
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            name
            slug
            count
          }
        }
      }
    }
  `);

  // Check for errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressCategory,
  } = result.data;

  // create archive pages for each category

  allWordpressCategory.edges.forEach((catEdge) => {
    //first filter our the posts

    const filteredPosts = allWordpressPost.edges.filter(
      ({ node: { categories } }) =>
        categories.some((el) => el.id === catEdge.node.id)
    );

    // some categories may be empty

    if (filteredPosts.length > 0) {
      paginate({
        createPage,
        items: filteredPosts,
        itemsPerPage: 10,
        pathPrefix: `/trends/${catEdge.node.slug}`,
        component: slash(archiveTemplate),
        context: {
          catId: catEdge.node.is,
          catName: catEdge.node.name,
          catSlug: catEdge.node.slug,
          catCount: catEdge.node.count,
          categories: allWordpressCategory.edges,
        },
      });
    }
  });

  allWordpressPage.edges.forEach((edge) => {
    if (edge.node.status === "publish") {
      createPage({
        path: edge.node.link,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
          parent: edge.node.wordpress_parent,
          wpId: edge.node.wordpress_id,
        },
      });
    }
  });
};
