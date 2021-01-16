import React from 'react';
import { Link, graphql } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const blogTitle = data.site.siteMetadata.title;
		const authorName = data.site.siteMetadata.author;
		const bio = data.site.siteMetadata.bio;
		const posts = data.allMarkdownRemark.edges;

		return (
			<Layout title={blogTitle} subtitle="Built with React and Gatsby">
				<SEO title="All posts" />
				<div className="blog-container">
					<section>
						{posts && posts.map(post => (
							<div className="post-summary" key={post.node.id}>
								<p>{post.node.frontmatter.date}</p>
								<h2>{post.node.frontmatter.title}</h2>
								<p>{post.node.excerpt}</p>
								<Link to={post.node.fields.slug}>
									<button>Read more</button>
								</Link>
							</div>
						))}
					</section>
					<aside>
						<p>We'll put a profile pic here later</p>
						<h3>{authorName}</h3>
						<p>{bio}</p>
					</aside>
				</div>
			</Layout>
		);
	}
}

export default BlogIndex;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				author
				bio
			}
		}
		allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
			edges {
				node {
					id
					excerpt(pruneLength: 200)
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;
