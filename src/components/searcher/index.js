import React from "react"
import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"
import Search from "./search"
import "./searcher.css"

const Searcher = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => <Search searchIndex={data.siteSearchIndex.index} />}
  />
)

export default Searcher
