import React from 'react'
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query fordummy {
        site {
          siteMetadata {
            description
        }
      }
    }
    `}
    render={data => (
      <p>{data.site.siteMetadata.description}</p>
    )}
  />
)

// We CAN'T make a graphql query from a component, only from a page, if we try doing a graphql query from a component, it will not run, and we'll se a message on the console saying that we can't do this.
// Instead, we need to use the static query api. The Static Query API lets us retrieve data using a graphql component from within the components

// The query from our page, won't work here
// export const pageQuery = graphql`
// 	query {
// 		site {
// 			siteMetadata {
// 				title
// 				author
// 			}
// 		}
// 	}
// `