import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import "./search.css"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          value={this.state.query}
          onChange={this.search}
          placeholder="¿Qué necesitas?"
        />
        {this.state.results.length > 0 && (
          <ul className="Search-results">
            {this.state.results.map(page => (
              <li key={page.id}>
                <Link to={"/" + page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}