import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };

    return (
        <main>
            <h1>Posts:</h1>
            <ul>
                {data.allWordpressPost.nodes.map((post) => (
                    <li>
                        <a href={post.slug}>
                            <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                            <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding" />
                            <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
                            <p>{post.yoast_head_json.twitter_misc.Geschatte_leestijd}</p>
                            <p>{post.yoast_head_json.author}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    )
}

// https://react.dev/learn/rendering-lists

export default IndexPage

export const query = graphql`
    query {
        allWordpressPost {
            nodes {
                slug
                title {
                    rendered
                }
                date
                excerpt {
                    rendered
                }
                yoast_head_json {
                    author
                    og_image {
                        url
                    }
                    twitter_misc {
                        Geschatte_leestijd
                    }
                }
            }
        }
    }
`
// https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/

export const Head = () => <title>Home Page</title>