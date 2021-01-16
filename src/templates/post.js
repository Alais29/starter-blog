import React from 'react';
import { graphql, Link } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const PostTemplate = ({ data, pageContext }) => {
	const frontmatter = data.markdownRemark.frontmatter;
	const { title, subtitle, description, date } = frontmatter;
	const post = data.markdownRemark;
	const { previous, next, slug } = pageContext;

	return ( 
		<Layout title={title} subtitle={subtitle}>
			<SEO title={title} description={description || post.excerpt} slug={slug} />
			<section className="posts">
				<p className="date">{date}</p>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
				<ul>
					<li className="post-navigation">
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li className="post-navigation">
						{next && (
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</ul>
			</section>
		</Layout>
	);
}

export default PostTemplate;

export const pageQuery = graphql`
	query Posts($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				subtitle
				description
			}
		}
	}
`;