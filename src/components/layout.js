import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 850px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
          <Link to="/" css={css`margin: 10px`}>Home</Link>
          <Link to="/about/" css={css`margin: 10px`}>About</Link>
          <Link to="/blog/" css={css`margin: 10px`}>Blog</Link>
          <Link to="/my-files/" css={css`margin: 10px`}>My Files</Link>
          <Link to="/design/" css={css`margin: 10px`} >Design</Link>
          <Link to="/contributors/" css={css`margin: 10px`}>Contributors</Link>
          <Link to="/yml-at-buildtime/" css={css`margin: 10px`}>YAML</Link>
      </ul>
      {children}
    </div>
  )
}