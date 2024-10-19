const path = require('path');

// First import wordpress data into internal graphql database
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    // fetch all posts
    const resPosts = await fetch('https://redpers.nl/wp-json/wp/v2/posts');
    const posts = await resPosts.json()

    posts.forEach(post => {
        createNode({
            ...post,
            id: createNodeId(`wp-post-${post.id}`), // Create a unique ID
            internal: {
                type: 'WordpressPost', // Node type for querying later
                contentDigest: createContentDigest(post)
            }
        });
    });
};

// Then generate pages using the imported wordpress data
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Query for WordpressPost nodes created in the previous step
    const result = await graphql(`
        query {
            allWordpressPost {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    // Error handling
    if (result.errors) {
        console.error(result.errors);
        throw new Error('Error querying WordpressPost nodes');
    }

    const posts = result.data.allWordpressPost.nodes;

    // Path to the templates that will be used to generate the pages
    const postTemplate = path.resolve(`./src/templates/article.js`);

    // Create post pages
    posts.forEach(post => {
        createPage({
            path: `/${post.slug}`, // URL path for the page
            component: postTemplate, // The template used to generate the post page
            context: {
                id: post.id // Pass the node ID to the template as context
            }
        });

        console.log(`Page http://localhost:8000/${post.slug} created`);
    });
};
