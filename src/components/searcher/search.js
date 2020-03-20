import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

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
        <div className="Input">
          <input
            className="Input-field"
            type="text"
            value={this.state.query}
            onChange={this.search}
            placeholder="Busca un plan..."
          />
          <span className="Input-icon" role="img" aria-label="Buscar">
            🔍
          </span>
        </div>
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
    this.index ? this.index : Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      results: this.index
        .search(query, {})
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
