import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    const { query } = this.state;
    const { history } = this.props;
    history.push(`/search/${query}`);
  };

  render() {
    return (
      <Area>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <input type="submit" value="submit" onClick={this.handleSubmit} />
      </Area>
    );
  }
}

const Area = styled.div`
    display:flex;
    margin:25px auto;
    width:100%;
    max-width:500px;
    justify-content:center;
`;

export default withRouter(SearchBar);
